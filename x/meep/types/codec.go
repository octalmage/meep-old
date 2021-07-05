package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgSubmitBanUserProposal{}, "meep/SubmitBanUserProposal", nil)

	cdc.RegisterConcrete(&MsgCreateTip{}, "meep/CreateTip", nil)
	cdc.RegisterConcrete(&MsgUpdateTip{}, "meep/UpdateTip", nil)
	cdc.RegisterConcrete(&MsgDeleteTip{}, "meep/DeleteTip", nil)

	cdc.RegisterConcrete(&MsgCreateUsername{}, "meep/CreateUsername", nil)
	cdc.RegisterConcrete(&MsgUpdateUsername{}, "meep/UpdateUsername", nil)
	cdc.RegisterConcrete(&MsgDeleteUsername{}, "meep/DeleteUsername", nil)

	cdc.RegisterConcrete(BanUserProposal{}, "meep/BanUserProposal", nil)

	cdc.RegisterConcrete(&MsgCreateThread{}, "meep/CreateThread", nil)
	cdc.RegisterConcrete(&MsgUpdateThread{}, "meep/UpdateThread", nil)
	cdc.RegisterConcrete(&MsgDeleteThread{}, "meep/DeleteThread", nil)

	cdc.RegisterConcrete(&MsgCreatePost{}, "meep/CreatePost", nil)
	cdc.RegisterConcrete(&MsgUpdatePost{}, "meep/UpdatePost", nil)
	cdc.RegisterConcrete(&MsgDeletePost{}, "meep/DeletePost", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSubmitBanUserProposal{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTip{},
		&MsgUpdateTip{},
		&MsgDeleteTip{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateUsername{},
		&MsgUpdateUsername{},
		&MsgDeleteUsername{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateThread{},
		&MsgUpdateThread{},
		&MsgDeleteThread{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePost{},
		&MsgUpdatePost{},
		&MsgDeletePost{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)
