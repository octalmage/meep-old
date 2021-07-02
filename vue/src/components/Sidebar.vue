<template>
  <SpSidebar
    v-on:sidebar-open="sidebarOpen = true"
    v-on:sidebar-close="sidebarOpen = false"
  >
    <template v-slot:default>
      <SpLinkIcon link="/" text="Home" icon="Dashboard" />
      <SpLinkIcon link="/leaderboard" text="Leaderboard" icon="Docs" />
      <SpLinkIcon link="/wallet" text="Wallet" icon="Transactions" />
      <!-- <SpLinkIcon link="/relayers" text="Relayers" icon="Modules" /> -->
      <!-- <div class="sp-dash"></div> -->
      <!-- <SpLinkIcon href="https://github.com/tendermint/starport" target="_blank" text="Documentation" icon="Docs" />-->
    </template>
    <template v-slot:footer>
      <button @click="connectKeplr">Add MEEP to Keplr</button>
			<br />
			<br />
      <SpStatusRPC :showText="sidebarOpen" />
      <SpStatusWS :showText="sidebarOpen" />
      <div class="sp-text">Build: v0.3.8</div>
    </template>
  </SpSidebar>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      sidebarOpen: true,
    };
  },
  methods: {
    async connectKeplr() {
      window.keplr.experimentalSuggestChain({
        // Chain-id of the Cosmos SDK chain.
        chainId: "meep-1",
        // The name of the chain to be displayed to the user.
        chainName: "MEEP",
        // RPC endpoint of the chain.
        rpc: "https://rpc.meep.social",
        // REST endpoint of the chain.
        rest: "https://api.meep.social",
        // Staking coin information
        stakeCurrency: {
          // Coin denomination to be displayed to the user.
          coinDenom: "MEEP",
          // Actual denom (i.e. uatom, uscrt) used by the blockchain.
          coinMinimalDenom: "umeep",
          // # of decimal points to convert minimal denomination to user-facing denomination.
          coinDecimals: 6,
        },
        // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
        // The 'stake' button in Keplr extension will link to the webpage.
        // walletUrlForStaking: "",
        // The BIP44 path.
        bip44: {
          // You can only set the coin type of BIP44.
          // 'Purpose' is fixed to 44.
          coinType: 118,
        },
        // Bech32 configuration to show the address to user.
        // This field is the interface of
        // {
        //   bech32PrefixAccAddr: string;
        //   bech32PrefixAccPub: string;
        //   bech32PrefixValAddr: string;
        //   bech32PrefixValPub: string;
        //   bech32PrefixConsAddr: string;
        //   bech32PrefixConsPub: string;
        // }
        bech32Config: {
          bech32PrefixAccAddr: "meep",
          bech32PrefixAccPub: "meeppub",
          bech32PrefixValAddr: "meepvaloper",
          bech32PrefixValPub: "meepvaloperpub",
          bech32PrefixConsAddr: "meepvalcons",
          bech32PrefixConsPub: "meepvalconspub",
        },
        // List of all coin/tokens used in this chain.
        currencies: [
          {
            // Coin denomination to be displayed to the user.
            coinDenom: "MEEP",
            // Actual denom (i.e. uatom, uscrt) used by the blockchain.
            coinMinimalDenom: "umeep",
            // # of decimal points to convert minimal denomination to user-facing denomination.
            coinDecimals: 6,
            // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
            // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
            // coinGeckoId: "meep-MEEP",
          },
        ],
        // List of coin/tokens used as a fee token in this chain.
        feeCurrencies: [
          {
            // Coin denomination to be displayed to the user.
            coinDenom: "MEEP",
            // Actual denom (i.e. uatom, uscrt) used by the blockchain.
            coinMinimalDenom: "umeep",
            // # of decimal points to convert minimal denomination to user-facing denomination.
            coinDecimals: 6,
            // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
            // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
            // coinGeckoId: ""
          },
        ],
        // (Optional) The number of the coin type.
        // This field is only used to fetch the address from ENS.
        // Ideally, it is recommended to be the same with BIP44 path's coin type.
        // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
        // So, this is separated to support such chains.
        coinType: 118,
        // (Optional) This is used to set the fee of the transaction.
        // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
        // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
        // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0,
        },
      });
    },
  },
  computed: {
    hasWallet() {
      return this.$store.hasModule(["common", "wallet"]);
    },
  },
};
</script>
