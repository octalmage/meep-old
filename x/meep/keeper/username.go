package keeper

import (
	"encoding/binary"
	"strconv"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/meep/x/meep/types"
)

// GetUsernameCount get the total number of username
func (k Keeper) GetUsernameCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UsernameCountKey))
	byteKey := types.KeyPrefix(types.UsernameCountKey)
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

// SetUsernameCount set the total number of username
func (k Keeper) SetUsernameCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UsernameCountKey))
	byteKey := types.KeyPrefix(types.UsernameCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendUsername appends a username in the store with a new id and update the count
func (k Keeper) AppendUsername(
	ctx sdk.Context,
	creator string,
	name string,
) uint64 {
	// Create the username
	count := k.GetUsernameCount(ctx)
	var username = types.Username{
		Creator: creator,
		Id:      count,
		Name:    name,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UsernameKey))
	value := k.cdc.MustMarshalBinaryBare(&username)
	store.Set(GetUsernameIDBytes(username.Id), value)

	// Update username count
	k.SetUsernameCount(ctx, count+1)

	return count
}

// SetUsername set a specific username in the store
func (k Keeper) SetUsername(ctx sdk.Context, username types.Username) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UsernameKey))
	b := k.cdc.MustMarshalBinaryBare(&username)
	store.Set(GetUsernameIDBytes(username.Id), b)
}

// GetUsername returns a username from its id
func (k Keeper) GetUsername(ctx sdk.Context, id uint64) types.Username {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UsernameKey))
	var username types.Username
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetUsernameIDBytes(id)), &username)
	return username
}

// HasUsername checks if the username exists in the store
func (k Keeper) HasUsername(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UsernameKey))
	return store.Has(GetUsernameIDBytes(id))
}

// GetUsernameOwner returns the creator of the username
func (k Keeper) GetUsernameOwner(ctx sdk.Context, id uint64) string {
	return k.GetUsername(ctx, id).Creator
}

// RemoveUsername removes a username from the store
func (k Keeper) RemoveUsername(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UsernameKey))
	store.Delete(GetUsernameIDBytes(id))
}

// GetAllUsername returns all username
func (k Keeper) GetAllUsername(ctx sdk.Context) (list []types.Username) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.UsernameKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Username
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetUsernameIDBytes returns the byte representation of the ID
func GetUsernameIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetUsernameIDFromBytes returns ID in uint64 format from a byte array
func GetUsernameIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
