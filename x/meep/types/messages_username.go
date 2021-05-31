package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateUsername{}

func NewMsgCreateUsername(creator string, name string) *MsgCreateUsername {
	return &MsgCreateUsername{
		Creator: creator,
		Name:    name,
	}
}

func (msg *MsgCreateUsername) Route() string {
	return RouterKey
}

func (msg *MsgCreateUsername) Type() string {
	return "CreateUsername"
}

func (msg *MsgCreateUsername) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateUsername) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateUsername) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateUsername{}

func NewMsgUpdateUsername(creator string, id uint64, name string) *MsgUpdateUsername {
	return &MsgUpdateUsername{
		Id:      id,
		Creator: creator,
		Name:    name,
	}
}

func (msg *MsgUpdateUsername) Route() string {
	return RouterKey
}

func (msg *MsgUpdateUsername) Type() string {
	return "UpdateUsername"
}

func (msg *MsgUpdateUsername) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateUsername) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateUsername) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateUsername{}

func NewMsgDeleteUsername(creator string, id uint64) *MsgDeleteUsername {
	return &MsgDeleteUsername{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteUsername) Route() string {
	return RouterKey
}

func (msg *MsgDeleteUsername) Type() string {
	return "DeleteUsername"
}

func (msg *MsgDeleteUsername) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteUsername) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteUsername) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
