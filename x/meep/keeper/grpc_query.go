package keeper

import (
	"github.com/octalmage/meep/x/meep/types"
)

var _ types.QueryServer = Keeper{}
