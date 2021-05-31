package keeper

import (
	// this line is used by starport scaffolding # 1
	"github.com/octalmage/meep/x/meep/types"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	abci "github.com/tendermint/tendermint/abci/types"
)

func NewQuerier(k Keeper, legacyQuerierCdc *codec.LegacyAmino) sdk.Querier {
	return func(ctx sdk.Context, path []string, req abci.RequestQuery) ([]byte, error) {
		var (
			res []byte
			err error
		)

		switch path[0] {
		// this line is used by starport scaffolding # 2
		case types.QueryGetTip:
			return getTip(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListTip:
			return listTip(ctx, k, legacyQuerierCdc)

		case types.QueryGetUsername:
			return getUsername(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListUsername:
			return listUsername(ctx, k, legacyQuerierCdc)

		case types.QueryGetThread:
			return getThread(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListThread:
			return listThread(ctx, k, legacyQuerierCdc)

		case types.QueryGetPost:
			return getPost(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListPost:
			return listPost(ctx, k, legacyQuerierCdc)

		default:
			err = sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "unknown %s query endpoint: %s", types.ModuleName, path[0])
		}

		return res, err
	}
}
