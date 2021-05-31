package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/octalmage/meep/x/meep/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TipAll(c context.Context, req *types.QueryAllTipRequest) (*types.QueryAllTipResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var tips []*types.Tip
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	tipStore := prefix.NewStore(store, types.KeyPrefix(types.TipKey))

	pageRes, err := query.Paginate(tipStore, req.Pagination, func(key []byte, value []byte) error {
		var tip types.Tip
		if err := k.cdc.UnmarshalBinaryBare(value, &tip); err != nil {
			return err
		}

		tips = append(tips, &tip)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTipResponse{Tip: tips, Pagination: pageRes}, nil
}

func (k Keeper) Tip(c context.Context, req *types.QueryGetTipRequest) (*types.QueryGetTipResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var tip types.Tip
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasTip(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TipKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTipIDBytes(req.Id)), &tip)

	return &types.QueryGetTipResponse{Tip: &tip}, nil
}
