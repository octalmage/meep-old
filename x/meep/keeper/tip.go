package keeper

import (
	"encoding/binary"
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/meep/x/meep/types"
)

// GetTipCount get the total number of tip
func (k Keeper) GetTipCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TipCountKey))
	byteKey := types.KeyPrefix(types.TipCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetTipCount set the total number of tip
func (k Keeper) SetTipCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TipCountKey))
	byteKey := types.KeyPrefix(types.TipCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendTip appends a tip in the store with a new id and update the count
func (k Keeper) AppendTip(
	ctx sdk.Context,
	creator string,
	postId uint64,
	amount int32,
) uint64 {
	// Create the tip
	count := k.GetTipCount(ctx)
	var tip = types.Tip{
		Creator: creator,
		Id:      count,
		PostId:  postId,
		Amount:  amount,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TipKey))
	value := k.cdc.MustMarshalBinaryBare(&tip)
	store.Set(GetTipIDBytes(tip.Id), value)

	// Update tip count
	k.SetTipCount(ctx, count+1)

	return count
}

// SetTip set a specific tip in the store
func (k Keeper) SetTip(ctx sdk.Context, tip types.Tip) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TipKey))
	b := k.cdc.MustMarshalBinaryBare(&tip)
	store.Set(GetTipIDBytes(tip.Id), b)
}

// GetTip returns a tip from its id
func (k Keeper) GetTip(ctx sdk.Context, id uint64) types.Tip {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TipKey))
	var tip types.Tip
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTipIDBytes(id)), &tip)
	return tip
}

// HasTip checks if the tip exists in the store
func (k Keeper) HasTip(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TipKey))
	return store.Has(GetTipIDBytes(id))
}

// GetTipOwner returns the creator of the tip
func (k Keeper) GetTipOwner(ctx sdk.Context, id uint64) string {
	return k.GetTip(ctx, id).Creator
}

// RemoveTip removes a tip from the store
func (k Keeper) RemoveTip(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TipKey))
	store.Delete(GetTipIDBytes(id))
}

// GetAllTip returns all tip
func (k Keeper) GetAllTip(ctx sdk.Context) (list []types.Tip) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TipKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Tip
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTipIDBytes returns the byte representation of the ID
func GetTipIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTipIDFromBytes returns ID in uint64 format from a byte array
func GetTipIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
