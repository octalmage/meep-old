package keeper

import (
	"encoding/binary"
	"strconv"
	"time"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/meep/x/meep/types"
)

// GetThreadCount get the total number of thread
func (k Keeper) GetThreadCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThreadCountKey))
	byteKey := types.KeyPrefix(types.ThreadCountKey)
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

// SetThreadCount set the total number of thread
func (k Keeper) SetThreadCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThreadCountKey))
	byteKey := types.KeyPrefix(types.ThreadCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendThread appends a thread in the store with a new id and update the count
func (k Keeper) AppendThread(
	ctx sdk.Context,
	creator string,
) uint64 {
	// Create the thread
	count := k.GetThreadCount(ctx)
	var thread = types.Thread{
		Creator:   creator,
		Id:        count,
		CreatedAt: time.Now().Unix(),
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThreadKey))
	value := k.cdc.MustMarshalBinaryBare(&thread)
	store.Set(GetThreadIDBytes(thread.Id), value)

	// Update thread count
	k.SetThreadCount(ctx, count+1)

	return count
}

// SetThread set a specific thread in the store
func (k Keeper) SetThread(ctx sdk.Context, thread types.Thread) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThreadKey))
	b := k.cdc.MustMarshalBinaryBare(&thread)
	store.Set(GetThreadIDBytes(thread.Id), b)
}

// GetThread returns a thread from its id
func (k Keeper) GetThread(ctx sdk.Context, id uint64) types.Thread {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThreadKey))
	var thread types.Thread
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetThreadIDBytes(id)), &thread)
	return thread
}

// HasThread checks if the thread exists in the store
func (k Keeper) HasThread(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThreadKey))
	return store.Has(GetThreadIDBytes(id))
}

// GetThreadOwner returns the creator of the thread
func (k Keeper) GetThreadOwner(ctx sdk.Context, id uint64) string {
	return k.GetThread(ctx, id).Creator
}

// RemoveThread removes a thread from the store
func (k Keeper) RemoveThread(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThreadKey))
	store.Delete(GetThreadIDBytes(id))
}

// GetAllThread returns all thread
func (k Keeper) GetAllThread(ctx sdk.Context) (list []types.Thread) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ThreadKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Thread
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetThreadIDBytes returns the byte representation of the ID
func GetThreadIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetThreadIDFromBytes returns ID in uint64 format from a byte array
func GetThreadIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
