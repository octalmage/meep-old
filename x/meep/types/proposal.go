package types

import (
	"fmt"
	"strings"

	govtypes "github.com/cosmos/cosmos-sdk/x/gov/types"
)

const (
	ProposalTypeBanUser = "BanUser"
)

// Assert proposl implements govtypes.Content at compile-time
var _ govtypes.Content = BanUserProposal{}

func init() {
	govtypes.RegisterProposalType(ProposalTypeBanUser)
	govtypes.RegisterProposalTypeCodec(BanUserProposal{}, "octalmage/meep/BanUserProposal")
}

// BanUserProposal modify a token's variable parameter
type BanUserProposal struct {
	Title       string `json:"title" yaml:"title"`
	Description string `json:"description" yaml:"description"`
	Address     string `json:"address" yaml:"address"`
}

// NewBanUserProposal creates a new ban user proposal.
func NewBanUserProposal(title, description, address string) BanUserProposal {
	return BanUserProposal{
		Title:       title,
		Description: description,
		Address:     address,
	}
}

// GetTitle returns the title of a ban user proposal..
func (bup BanUserProposal) GetTitle() string { return bup.Title }

// GetDescription returns the description of a ban user proposal..
func (bup BanUserProposal) GetDescription() string { return bup.Description }

// GetDescription returns the routing key of a ban user proposal..
func (bup BanUserProposal) ProposalRoute() string { return RouterKey }

// ProposalType returns the type of a ban user proposal.
func (bup BanUserProposal) ProposalType() string { return ProposalTypeBanUser }

// ValidateBasic runs basic stateless validity checks
func (bup BanUserProposal) ValidateBasic() error {
	// TODO: Actually validate.
	return nil
	// err := govtypes.ValidateAbstract(DefaultCodespace, bup)
	// if err != nil {
	// 	return err
	// }

	// return err
}

// String implements the Stringer interface.
func (bup BanUserProposal) String() string {
	var b strings.Builder
	b.WriteString(fmt.Sprintf(`Ban User Proposal:
 Title:       %s
 Description: %s
 Address:      %s
`, bup.Title, bup.Description, bup.Address))
	return b.String()
}
