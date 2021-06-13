package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/octalmage/meep/x/meep/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) CreatePost(goCtx context.Context, msg *types.MsgCreatePost) (*types.MsgCreatePostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	feeCoins, err := sdk.ParseCoinsNormalized("100000umeep")
	if err != nil {
		return nil, err
	}

	// Transfer 0.1 meep to the meep module.
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))

	creatorAddress, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	if !allowedImageURL(msg.Image) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "invalid image url")
	}

	if err := k.bankKeeper.SendCoins(ctx, creatorAddress, moduleAcct, feeCoins); err != nil {
		return nil, err
	}

	id := k.AppendPost(
		ctx,
		msg.Creator,
		msg.Thread,
		msg.Body,
		msg.Image,
	)

	return &types.MsgCreatePostResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePost(goCtx context.Context, msg *types.MsgUpdatePost) (*types.MsgUpdatePostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var post = types.Post{
		Creator: msg.Creator,
		Id:      msg.Id,
		Body:    msg.Body,
	}

	// Checks that the element exists
	if !k.HasPost(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetPostOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPost(ctx, post)

	return &types.MsgUpdatePostResponse{}, nil
}

func (k msgServer) DeletePost(goCtx context.Context, msg *types.MsgDeletePost) (*types.MsgDeletePostResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasPost(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetPostOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePost(ctx, msg.Id)

	return &types.MsgDeletePostResponse{}, nil
}
