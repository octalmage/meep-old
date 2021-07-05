package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
	"github.com/octalmage/meep/x/meep/types"
)

func (k msgServer) SubmitBanUserProposal(goCtx context.Context, msg *types.MsgSubmitBanUserProposal) (*types.MsgSubmitBanUserProposalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// content := types.NewBanUserProposal("Ban User", msg.Address, msg.Address)
	content := govtypes.NewTextProposal("Ban User", msg.Address)

	// depositFee, err := sdk.ParseCoinsNormalized("10000000umeep")
	// if err != nil {
	// 	return nil, err
	// }

	// creatorAddress, err := sdk.AccAddressFromBech32(msg.Creator)
	// if err != nil {
	// 	return nil, err
	// }

	_, err := k.govKeeper.SubmitProposal(ctx, content)
	if err != nil {
		return nil, err
	}

	// k.govKeeper.AddDeposit(ctx, proposal.ProposalId, creatorAddress, depositFee)

	return &types.MsgSubmitBanUserProposalResponse{}, nil
}
