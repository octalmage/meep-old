<template>
  <div>
    <div class="container">
      <!-- this line is used by starport scaffolding # 4 -->
      <h3>MEEP</h3>
      <div class="sp-voter__main sp-box sp-shadow sp-form-group">
        <div
          class="sp-voter__main sp-box sp-shadow sp-form-group"
          v-show="!hasFunds && currentAccount"
        >
          <sp-button :disabled="submitting" @click="getMEEP">Get 5 MEEP for free!</sp-button>
        </div>
        <form class="sp-voter__main__form">
          <div class="sp-voter__main__rcpt__header sp-box-header">
            Post a new update
          </div>

          <textarea
            :disabled="submitting"
            class="sp-input"
            placeholder=""
            v-model="body"
          />

          <sp-button v-show="hasFunds" :disabled="submitting" @click="submit">Post</sp-button>
          <sp-button v-show="!currentAccount" disabled @click="submit"
            >Sign in</sp-button
          >
          <sp-button
            v-show="!hasFunds && currentAccount"
            disabled
            @click="submit"
            >You need MEEP</sp-button
          >
        </form>
      </div>

      <div class="sp-type-list sp-type__list">
        <h3>Posts</h3>
        <br />
        <div class="sp-type-list__main sp-box sp-shadow">
          <div class="sp-type-list__header sp-box-header">POSTS</div>
          <div v-for="post in posts" v-bind:key="'post' + post.id">
            <div class="sp-type-list__item">
              <div class="sp-type-list__item__icon">
                <div class="sp-icon sp-icon-Docs"></div>
              </div>
              <div class="sp-type-list__item__details">
                <div class="sp-type-list__item__details__field">
                  <strong>Creator</strong><br />
                  {{ post.creator }}
                </div>
                <div class="sp-type-list__item__details__field">
                  <strong>Body</strong><br />
                  {{ post.body }}
                </div>
              </div>
            </div>
            <div class="sp-dashed-line">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Types",
  data() {
    return {
      body: "",
      submitting: false,
      balances: [],
    };
  },
   watch: {
    // whenever question changes, this function will run
    currentAccount: async function (newAccount) {
      if (newAccount) {
        this.updateBalances();
      }
    }
  },
  computed: {
    hasFunds() {
      return this.balances.length > 0;
    },
    posts() {
      const posts =
        this.$store.getters["octalmage.meep.meep/getPostAll"]({
          params: {},
        })?.Post ?? [];
      posts.reverse();
      return posts;
    },
    currentAccount() {
      if (this._depsLoaded) {
        if (this.loggedIn) {
          return this.$store.getters["common/wallet/address"];
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    loggedIn() {
      if (this._depsLoaded) {
        return this.$store.getters["common/wallet/loggedIn"];
      } else {
        return false;
      }
    },
  },
  methods: {
    async updateBalances() {
      	if (this.currentAccount) {
        await this.$store.dispatch("cosmos.bank.v1beta1/QueryAllBalances",{options:{subscribe:true, all:true},params: { address: this.currentAccount }})
				this.balances = this.$store.getters['cosmos.bank.v1beta1/getAllBalances']({
						params: { address: this.currentAccount },
					})?.balances ?? [];

			} else {
				this.balances = [];
			}
    
    },
    async getMEEP() {
      this.submitting = true;
      const options = {
        "address": this.currentAccount,
        "coins": [
          "5meep"
        ]
      };

      await fetch(`http://${window.location.host.replace('8081','4500')}`, {
       method: 'post',
        body: JSON.stringify(options)
      });

      await this.updateBalances();
      this.submitting = false;
    },
    async submit() {
			if (!this.loggedIn) {
				alert('Unlock your wallet!');
				return;
			}
      this.submitting = true;
      const value = {
        creator: this.currentAccount,
        body: this.body,
      };

      await this.$store.dispatch("octalmage.meep.meep/sendMsgCreatePost", {
        value,
        fee: [],
      });
      this.body = "";
      this.submitting = false;
    },
  },
  async mounted() {
    this.updateBalances();
  },
	errorCaptured(err) {
		alert('error!');
		console.error(err)
		this.submitting = false;
		return false
	}
};
</script>

