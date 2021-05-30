package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateThread{}

func NewMsgCreateThread(creator string) *MsgCreateThread {
	return &MsgCreateThread{
		Creator: creator,
	}
}

func (msg *MsgCreateThread) Route() string {
	return RouterKey
}

func (msg *MsgCreateThread) Type() string {
	return "CreateThread"
}

func (msg *MsgCreateThread) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateThread) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateThread) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateThread{}

func NewMsgUpdateThread(creator string, id uint64) *MsgUpdateThread {
	return &MsgUpdateThread{
		Id:      id,
		Creator: creator,
	}
}

func (msg *MsgUpdateThread) Route() string {
	return RouterKey
}

func (msg *MsgUpdateThread) Type() string {
	return "UpdateThread"
}

func (msg *MsgUpdateThread) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateThread) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateThread) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateThread{}

func NewMsgDeleteThread(creator string, id uint64) *MsgDeleteThread {
	return &MsgDeleteThread{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteThread) Route() string {
	return RouterKey
}

func (msg *MsgDeleteThread) Type() string {
	return "DeleteThread"
}

func (msg *MsgDeleteThread) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteThread) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteThread) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
