<template>
  <div>
    <div class="container">
      <!-- this line is used by starport scaffolding # 4 -->
      <!-- <SpType modulePath="octalmage.meep.meep" moduleType="Thread"  /> -->
      <h3>MEEP</h3>
      <div class="sp-voter__main sp-box sp-shadow sp-form-group">
        <div
          class="sp-voter__main sp-box sp-shadow sp-form-group"
          v-show="!hasFunds && currentAccount"
        >
          <sp-button :disabled="submitting" @click="getMEEP"
            >Get 5 MEEP for free!</sp-button
          >
        </div>
        <form class="sp-voter__main__form">
          <div class="sp-voter__main__rcpt__header sp-box-header">
            Create a new thread
          </div>

          <textarea
            :disabled="submitting"
            class="sp-input"
            placeholder=""
            v-model="body"
          />

          <sp-button
            v-show="hasFunds"
            :disabled="submitting"
            @click="createThread"
            >Create</sp-button
          >
          <sp-button v-show="!currentAccount" disabled>Sign in</sp-button>
          <sp-button v-show="!hasFunds && currentAccount" disabled
            >You need MEEP</sp-button
          >
        </form>
      </div>

      <div class="sp-type-list sp-type__list">
        <h3>Threads</h3>
        <br />
        <div
          style="margin-bottom: 1rem"
          v-for="thread in threads"
          v-bind:key="'thread' + thread.id"
          class="sp-type-list__main sp-box sp-shadow"
        >
          <div class="sp-type-list__header sp-box-header">POSTS</div>
          <div
            v-for="(post, _, index) in postsForThread(thread.id)"
            v-bind:key="'post' + post.id"
          >
            <div class="sp-type-list__item">
              <div class="sp-type-list__item__icon">
                <div class="sp-icon sp-icon-Docs"></div>
              </div>
              <div class="sp-type-list__item__details">
                User <strong>{{ post.creator.substr(-8) }}</strong> said:<br /><br />
                <div class="sp-type-list__item__details__field">
                  {{ post.body }}
                </div>
                <br />
                <strong>{{ formatTimestamp(Date.now(), post.createdAt) }}</strong>
              </div>
            </div>
            <div class="sp-dashed-line">&nbsp;</div>
          </div>
          <form class="sp-voter__main__form">
            <div class="sp-voter__main__rcpt__header sp-box-header">
              Create a new reply
            </div>

            <textarea
              :disabled="submitting"
              class="sp-input"
              placeholder=""
              v-model="body"
            />

            <sp-button
              v-show="hasFunds"
              :disabled="submitting"
              @click="createPost(thread.id)"
              >Post</sp-button
            >
            <sp-button v-show="!currentAccount" disabled>Sign in</sp-button>
            <sp-button v-show="!hasFunds && currentAccount" disabled
              >You need MEEP</sp-button
            >
          </form>
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
    },
  },
  computed: {
    postsForThread() {
      return (threadId) => this.posts.filter((p) => p.thread === threadId);
    },
    hasFunds() {
      return this.balances.length > 0;
    },
    threads() {
      const threads =
        this.$store.getters["octalmage.meep.meep/getThreadAll"]({
          params: {},
        })?.Thread ?? [];

      threads.reverse();
      return threads;
    },
    posts() {
      const posts =
        this.$store.getters["octalmage.meep.meep/getPostAll"]({
          params: {},
        })?.Post ?? [];

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
    async getMEEP() {
      this.submitting = true;
      const options = {
        address: this.currentAccount,
        coins: ["5meep"],
      };

      await fetch(
        `http://${window.location.host
          .replace("8081", "4500")
          .replace("8888", "4500")}`,
        {
          method: "post",
          body: JSON.stringify(options),
        }
      );

      await this.updateBalances();
      this.submitting = false;
    },
    async createThread() {
      this.submitting = true;
      const value = {
        creator: this.currentAccount,
      };


      const threadId = 1 + Number(this.threads[0].id);

      await this.$store.dispatch("octalmage.meep.meep/sendMsgCreateThread", {
        value,
        fee: [],
      });

      await this.$store.dispatch("octalmage.meep.meep/QueryThreadAll", {
        options: { subscribe: true, all: true },
        params: {},
      });

      
      await this.createPost(threadId);
    },
    async createPost(threadId) {
      console.log("threadID", threadId);
      if (!this.loggedIn) {
        alert("Unlock your wallet!");
        return;
      }

      this.submitting = true;
      const value = {
        creator: this.currentAccount,
        body: this.body,
        thread: Number(threadId),
      };

      await this.$store.dispatch("octalmage.meep.meep/sendMsgCreatePost", {
        value,
        fee: [],
      });
      this.body = "";
      this.submitting = false;
    },
    formatTimestamp(current, previous) {
      var msPerMinute = 60 * 1000;
      var msPerHour = msPerMinute * 60;
      var msPerDay = msPerHour * 24;
      var msPerMonth = msPerDay * 30;
      var msPerYear = msPerDay * 365;

      var elapsed = current - previous;

      if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + " seconds ago";
      } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + " minutes ago";
      } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + " hours ago";
      } else if (elapsed < msPerMonth) {
        return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
      } else if (elapsed < msPerYear) {
        return (
          "approximately " + Math.round(elapsed / msPerMonth) + " months ago"
        );
      } else {
        return (
          "approximately " + Math.round(elapsed / msPerYear) + " years ago"
        );
      }
    },
  },
  async mounted() {
    this.updateBalances();
  },
  // errorCaptured(err) {
  // 	alert('error!');
  // 	console.error(err)
  // 	this.submitting = false;
  // 	return false
  // }
};
</script>

