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

func (k Keeper) ThreadAll(c context.Context, req *types.QueryAllThreadRequest) (*types.QueryAllThreadResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var threads []*types.Thread
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	threadStore := prefix.NewStore(store, types.KeyPrefix(types.ThreadKey))

	pageRes, err := query.Paginate(threadStore, req.Pagination, func(key []byte, value []byte) error {
		var thread types.Thread
		if err := k.cdc.UnmarshalBinaryBare(value, &thread); err != nil {
			return err
		}

		threads = append(threads, &thread)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllThreadResponse{Thread: threads, Pagination: pageRes}, nil
}

func (k Keeper) Thread(c context.Context, req *types.QueryGetThreadRequest) (*types.QueryGetThreadResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var thread types.Thread
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasThread(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThreadKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetThreadIDBytes(req.Id)), &thread)

	return &types.QueryGetThreadResponse{Thread: &thread}, nil
}
