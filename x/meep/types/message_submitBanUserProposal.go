package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSubmitBanUserProposal{}

func NewMsgSubmitBanUserProposal(creator string, address string) *MsgSubmitBanUserProposal {
	return &MsgSubmitBanUserProposal{
		Creator: creator,
		Address: address,
	}
}

func (msg *MsgSubmitBanUserProposal) Route() string {
	return RouterKey
}

func (msg *MsgSubmitBanUserProposal) Type() string {
	return "SubmitBanUserProposal"
}

func (msg *MsgSubmitBanUserProposal) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSubmitBanUserProposal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSubmitBanUserProposal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
