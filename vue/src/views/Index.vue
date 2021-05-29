<template>
	<div>
		<div class="container">
			<div class="sp-token-send__holder">
			<div class="sp-component sp-assets__wrapper">
				<SpAssets :balances="balances" />
			</div>
			</div>
			<SpTransferList :address="address" />
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
						params: { address: this.address },
					})?.balances ?? []
				)
			} else {
				return []
			}
		},
		address() {
			return this.$store.getters['common/wallet/address']
		}
	}
}
</script>
