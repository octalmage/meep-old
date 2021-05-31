package meep

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/meep/x/meep/keeper"
	"github.com/octalmage/meep/x/meep/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the username
	for _, elem := range genState.UsernameList {
		k.SetUsername(ctx, *elem)
	}

	// Set username count
	k.SetUsernameCount(ctx, uint64(len(genState.UsernameList)))

	// Set all the thread
	for _, elem := range genState.ThreadList {
		k.SetThread(ctx, *elem)
	}

	// Set thread count
	k.SetThreadCount(ctx, uint64(len(genState.ThreadList)))

	// Set all the post
	for _, elem := range genState.PostList {
		k.SetPost(ctx, *elem)
	}

	// Set post count
	k.SetPostCount(ctx, uint64(len(genState.PostList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all username
	usernameList := k.GetAllUsername(ctx)
	for _, elem := range usernameList {
		elem := elem
		genesis.UsernameList = append(genesis.UsernameList, &elem)
	}

	// Get all thread
	threadList := k.GetAllThread(ctx)
	for _, elem := range threadList {
		elem := elem
		genesis.ThreadList = append(genesis.ThreadList, &elem)
	}

	// Get all post
	postList := k.GetAllPost(ctx)
	for _, elem := range postList {
		elem := elem
		genesis.PostList = append(genesis.PostList, &elem)
	}

	return genesis
}
