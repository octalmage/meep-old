<template>
  <div v-if="initialized">
    <SpWallet ref="wallet" v-on:dropdown-opened="$refs.menu.closeDropdown()" />
    <SpLayout>
      <template v-slot:sidebar>
        <Sidebar />
      </template>
      <template v-slot:content>
        <router-view />
      </template>
    </SpLayout>
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>

<script>
import "./scss/app.scss";
import "@starport/vue/lib/starport-vue.css";
import Sidebar from "./components/Sidebar";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      initialized: false,
      balances: [],
    };
  },
  watch: {
    // whenever question changes, this function will run
    currentAccount: async function (newAccount) {
      if (newAccount) {
        this.updateBalances();
      }
    },
  },
  computed: {
    hasWallet() {
      return this.$store.hasModule(["common", "wallet"]);
    },
  },
  methods: {
    async updateBalances() {
      if (this.currentAccount) {
        await this.$store.dispatch("cosmos.bank.v1beta1/QueryAllBalances", {
          options: { subscribe: true, all: true },
          params: { address: this.currentAccount },
        });
        this.balances =
          this.$store.getters["cosmos.bank.v1beta1/getAllBalances"]({
            params: { address: this.currentAccount },
          })?.balances ?? [];
      } else {
        this.balances = [];
      }
    },
  },
  async created() {
    await this.$store.dispatch("common/env/init", {
      apiNode: "https://api.meep.social",
      rpcNode: "https://rpc.meep.social",
      wsNode: "wss://rpc.meep.social/websocket",
      // apiNode: 'http://localhost:1317',
      // rpcNode: 'http://localhost:26657',
      // wsNode: 'ws://localhost:26657/websocket',
      chainId: "meep-1",
      addrPrefix: "meep",
      sdkVersion: "Stargate",
			refresh: 10000,
    });

    // await this.$store.dispatch('cosmos.staking.v1beta1/init');

    await this.$store.dispatch("octalmage.meep.meep/QueryPostAll", {
      options: { subscribe: true, all: true },
      params: {},
    });
    await this.$store.dispatch("octalmage.meep.meep/QueryThreadAll", {
      options: { subscribe: true, all: true },
      params: {},
    });
    await this.$store.dispatch("octalmage.meep.meep/QueryUsernameAll", {
      options: { subscribe: true, all: true },
      params: {},
    });
    await this.$store.dispatch("octalmage.meep.meep/QueryTipAll", {
      options: { subscribe: true, all: true },
      params: {},
    });

    this.initialized = true;
  },
  // errorCaptured(err) {
  // 	console.log(err)
  // 	return false
  // }
};
</script>
