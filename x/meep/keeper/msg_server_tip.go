package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/octalmage/meep/x/meep/types"
)

func (k msgServer) CreateTip(goCtx context.Context, msg *types.MsgCreateTip) (*types.MsgCreateTipResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	feeCoins, err := sdk.ParseCoinsNormalized(fmt.Sprintf("%dmeep", msg.Amount))
	if err != nil {
		return nil, err
	}

	creatorAddress, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	if !k.HasPost(ctx, msg.PostId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("post %d doesn't exist", msg.PostId))
	}

	post := k.GetPost(ctx, msg.PostId)

	if msg.Creator == post.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "you cannot tip yourself")
	}

	postCreatorAddress, err := sdk.AccAddressFromBech32(post.Creator)
	if err != nil {
		return nil, err
	}

	if err := k.bankKeeper.SendCoins(ctx, creatorAddress, postCreatorAddress, feeCoins); err != nil {
		return nil, err
	}

	// if the user already has a tip for this post, just append the amount.
	tipList := k.GetAllTip(ctx)
	for _, existingTip := range tipList {
		if existingTip.PostId == msg.PostId && existingTip.Creator == msg.Creator {
			existingTip.Amount = existingTip.Amount + 1

			k.SetTip(ctx, existingTip)
			return &types.MsgCreateTipResponse{
				Id: existingTip.Id,
			}, nil
		}
	}

	id := k.AppendTip(
		ctx,
		msg.Creator,
		msg.PostId,
		msg.Amount,
	)

	return &types.MsgCreateTipResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTip(goCtx context.Context, msg *types.MsgUpdateTip) (*types.MsgUpdateTipResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var tip = types.Tip{
		Creator: msg.Creator,
		Id:      msg.Id,
		PostId:  msg.PostId,
		Amount:  msg.Amount,
	}

	// Checks that the element exists
	if !k.HasTip(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetTipOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTip(ctx, tip)

	return &types.MsgUpdateTipResponse{}, nil
}

func (k msgServer) DeleteTip(goCtx context.Context, msg *types.MsgDeleteTip) (*types.MsgDeleteTipResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasTip(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetTipOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTip(ctx, msg.Id)

	return &types.MsgDeleteTipResponse{}, nil
}
