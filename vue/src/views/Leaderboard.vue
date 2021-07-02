<template>
	<div>
		<div class="container">
			<h1>Leaderboard</h1>
			<table style="border: 1px solid black; border-collapse: collapse; width: 400px; font-size: 22px">
					<tr style="border: 1px solid black;">
					<td style="border: 1px solid black;padding: .5em;"><strong>Place</strong></td>
					<td style="border: 1px solid black;padding: .5em;"><strong>Username</strong></td>
					<td style="border: 1px solid black;padding: .5em;"><strong>MEEP</strong></td>
				</tr>
				<tr style="border: 1px solid black;" v-for="(leader, index) in leaderboard" :key="leader[0]">
					<td style="border: 1px solid black;padding: .5em;">{{index + 1}}</td>
					<td style="border: 1px solid black;padding: .5em;">{{usernameForAddress(leader[0])}}</td>
					<td style="border: 1px solid black;padding: .5em;">{{leader[1]}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Leaderboard',
	data: () => ({
		leaderboard: [],
	}),
	computed: {
		balances: function () {
			if (this._depsLoaded) {
				return (
					this.$store.getters['cosmos.bank.v1beta1/getAllBalances']({
						params: {},
					})?.balances ?? []
				)
			} else {
				return []
			}
		},
		usernames() {
      return this.$store.getters["octalmage.meep.meep/getUsernameAll"]({
          params: {},
        })?.Username ?? [];
    },
		address() {
			return this.$store.getters['common/wallet/address']
		},
	},
	methods: {
		usernameForAddress(address, def) {
      const username = this.usernames.filter(u => u.creator === address);
      return username.length > 0 ? username[0].name : (def || '');
    },
		async balanceForUser(address) {
			  return this.$store.dispatch("cosmos.bank.v1beta1/QueryAllBalances", {
          options: { subscribe: false, all: false },
          params: { address },
        });
		}
	},
	async mounted() {
		const leaderboard = {};
		const usernames = this.usernames;
		for (let username of usernames) {
			const balance = await this.balanceForUser(username.creator);
			leaderboard[username.creator] = Number(balance.balances[0].amount) / 1000000;
		}
		const sortable = Object.entries(leaderboard).sort(([,a],[,b]) => b-a)
		this.leaderboard = sortable;
	}
}
</script>
