package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/octalmage/meep/x/meep/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) CreateThread(goCtx context.Context, msg *types.MsgCreateThread) (*types.MsgCreateThreadResponse, error) {
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

	if err := k.bankKeeper.SendCoins(ctx, creatorAddress, moduleAcct, feeCoins); err != nil {
		return nil, err
	}

	id := k.AppendThread(
		ctx,
		msg.Creator,
	)

	k.AppendPost(
		ctx,
		msg.Creator,
		id,
		msg.Body,
		msg.Image,
	)

	return &types.MsgCreateThreadResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateThread(goCtx context.Context, msg *types.MsgUpdateThread) (*types.MsgUpdateThreadResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var thread = types.Thread{
		Creator: msg.Creator,
		Id:      msg.Id,
	}

	// Checks that the element exists
	if !k.HasThread(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetThreadOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetThread(ctx, thread)

	return &types.MsgUpdateThreadResponse{}, nil
}

func (k msgServer) DeleteThread(goCtx context.Context, msg *types.MsgDeleteThread) (*types.MsgDeleteThreadResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasThread(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetThreadOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveThread(ctx, msg.Id)

	return &types.MsgDeleteThreadResponse{}, nil
}
