package keeper

import (
	"context"
	"fmt"
	"regexp"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/octalmage/meep/x/meep/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) CreateUsername(goCtx context.Context, msg *types.MsgCreateUsername) (*types.MsgCreateUsernameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	username := strings.ToLower(msg.Name)

	usernameList := k.GetAllUsername(ctx)
	for _, existingUsername := range usernameList {
		if existingUsername.Creator == msg.Creator {
			// Return an error when username is already claimed.
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "User already has a username.")
		}

		if existingUsername.Name == msg.Name {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "This user is already claimed.")
		}
	}

	if len(username) < 4 {
		// Return an error when username is too short.
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Username must be at least 4 characters.")
	}

	if len(username) > 16 {
		// Return an error when username is too short.
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Username can be no more than 12 characters.")
	}

	// https://socketloop.com/tutorials/golang-regular-expression-alphanumeric-underscore
	re := regexp.MustCompile("^[a-zA-Z0-9_]*$")

	if !re.MatchString(username) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Username invalid")
	}

	if banned(username) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Username banned")
	}

	// Transfer 1 meep to the meep module.
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	feeCoins, err := sdk.ParseCoinsNormalized("1000000umeep")
	if err != nil {
		return nil, err
	}

	creatorAddress, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	if err := k.bankKeeper.SendCoins(ctx, creatorAddress, moduleAcct, feeCoins); err != nil {
		return nil, err
	}

	id := k.AppendUsername(
		ctx,
		msg.Creator,
		username,
	)

	return &types.MsgCreateUsernameResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateUsername(goCtx context.Context, msg *types.MsgUpdateUsername) (*types.MsgUpdateUsernameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var username = types.Username{
		Creator: msg.Creator,
		Id:      msg.Id,
		Name:    msg.Name,
	}

	// Checks that the element exists
	if !k.HasUsername(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	k.SetUsername(ctx, username)

	return &types.MsgUpdateUsernameResponse{}, nil
}

func (k msgServer) DeleteUsername(goCtx context.Context, msg *types.MsgDeleteUsername) (*types.MsgDeleteUsernameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasUsername(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetUsernameOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveUsername(ctx, msg.Id)

	return &types.MsgDeleteUsernameResponse{}, nil
}
