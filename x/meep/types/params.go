package types

import (
	"fmt"
	"strings"

	paramstypes "github.com/cosmos/cosmos-sdk/x/params/types"
)

var (
	DefaultBannedUsers = []string{}
)

// Parameter keys
var (
	KeyBannedUsers = []byte("BannedUsers")
)

var _ paramstypes.ParamSet = &Params{}

// Params defines the parameters for the auth module.
type Params struct {
	BannedUsers []string `json:"banned_users"`
}

// ParamKeyTable for auth module
func ParamKeyTable() paramstypes.KeyTable {
	return paramstypes.NewKeyTable().RegisterParamSet(&Params{})
}

func validateBannedUsers(i interface{}) error {
	_, ok := i.([]string)
	if !ok {
		return fmt.Errorf("invalid parameter type: %T", i)
	}
	return nil
}

// ParamSetPairs implements the ParamSet interface and returns all the key/value pairs
// pairs of auth module's parameters.
// nolint
func (p *Params) ParamSetPairs() paramstypes.ParamSetPairs {
	return paramstypes.ParamSetPairs{
		{KeyBannedUsers, &p.BannedUsers, validateBannedUsers},
	}
}

// DefaultParams returns a default set of parameters.
func DefaultParams() Params {
	return Params{
		BannedUsers: DefaultBannedUsers,
	}
}

// String implements the stringer interface.
func (p Params) String() string {
	var sb strings.Builder
	sb.WriteString("Params:")
	sb.WriteString(fmt.Sprintf("BannedUsers:%s\t", strings.Join(p.BannedUsers, ",")))

	return sb.String()
}

func (p Params) Validate() error {
	return nil
}
