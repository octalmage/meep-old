<template>
	<div>
		<div class="container">
			<h1>Leaderboard</h1>
			{{JSON.stringify(balances)}}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Index',
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
		address() {
			return this.$store.getters['common/wallet/address']
		},
	},
	async created() {
		await this.$store.dispatch("cosmos.bank.v1beta1/getAllBalances",{options:{subscribe:true, all:true},params:{}})
	}
}
</script>
