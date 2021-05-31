package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateTip{}

func NewMsgCreateTip(creator string, postId uint64, amount int32) *MsgCreateTip {
	return &MsgCreateTip{
		Creator: creator,
		PostId:  postId,
		Amount:  amount,
	}
}

func (msg *MsgCreateTip) Route() string {
	return RouterKey
}

func (msg *MsgCreateTip) Type() string {
	return "CreateTip"
}

func (msg *MsgCreateTip) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTip) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTip) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateTip{}

func NewMsgUpdateTip(creator string, id uint64, postId uint64, amount int32) *MsgUpdateTip {
	return &MsgUpdateTip{
		Id:      id,
		Creator: creator,
		PostId:  postId,
		Amount:  amount,
	}
}

func (msg *MsgUpdateTip) Route() string {
	return RouterKey
}

func (msg *MsgUpdateTip) Type() string {
	return "UpdateTip"
}

func (msg *MsgUpdateTip) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateTip) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateTip) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateTip{}

func NewMsgDeleteTip(creator string, id uint64) *MsgDeleteTip {
	return &MsgDeleteTip{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteTip) Route() string {
	return RouterKey
}

func (msg *MsgDeleteTip) Type() string {
	return "DeleteTip"
}

func (msg *MsgDeleteTip) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteTip) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteTip) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
