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
            >Get 100 MEEP for free!</sp-button
          >
        </div>
         <div
          class="sp-voter__main sp-box sp-shadow sp-form-group"
          v-show="hasFunds && currentAccount && username === ''"
        >
          <input
            :disabled="submitting"
            class="sp-input"
            placeholder=""
            v-model="name"
          /><br />
          <sp-button :disabled="submitting" @click="createUsername">
            Claim username (1 MEEP)
          </sp-button>
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
          <input ref="inputFile" type="file" @change="onFileChanged" /> <br /><br />
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
            v-for="post in postsForThread(thread.id)"
            v-bind:key="'post' + post.id"
          >
            <div class="sp-type-list__item">
              <div  v-show="!post.image" class="sp-type-list__item__icon">
                <div class="sp-icon sp-icon-Docs"></div>
      
              </div>
              <div style="width: 300px;  margin-right: 12px;" v-show="post.image" >
                  <img @click="openImage(post.image)" style="max-width: 100%;" :src="post.image" v-show="post.image" />
                </div>
              <div class="sp-type-list__item__details">
                                <div style="float: right">
                <strong>TIPS:</strong> {{tipsForPost(post.id)}} MEEP <br /><br />
                <button v-show="post.creator !== currentAccount" :disabled="tipSubmitting" @click="createTip(post.id)">Tip 1 MEEP</button>
                </div>
                User
                <strong>{{ usernameForAddress(post.creator, post.creator.substr(-8)) }}</strong> said:<br /><br />
                <div class="sp-type-list__item__details__field">
                  {{ post.body }}
                </div>
                <br />
                <strong>{{
                  formatTimestamp(Date.now(), post.createdAt * 1000)
                }}</strong>
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
            <input ref="inputFile" type="file" @change="onFileChanged" /> <br /><br />
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
      selectedFile: '',
      name: '',
      tipSubmitting: false,
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
    tipsForPost() {
      return (postId) => this.tips.filter((p) => p.postId === postId).map(p => p.amount).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    },
    hasFunds() {
      return this.balances.length > 0;
    },
    threads() {
      const threads =
        this.$store.getters["octalmage.meep.meep/getThreadAll"]({
          params: {},
        })?.Thread ?? [];
      
      // threads.sort((a, b) => {
      //   const maxa = Math.max.apply(Math, this.postsForThread(a.id).map(function(o) { return o.createdAt; }))
      //   const maxb = Math.max.apply(Math, this.postsForThread(b.id).map(function(o) { return o.createdAt; }))
      //   return maxb - maxa;
      // });
      // console.log(threads);
      threads.reverse();
      return threads;
    },
    tips() {
      return this.$store.getters["octalmage.meep.meep/getTipAll"]({
          params: {},
        })?.Tip ?? [];
    },
    posts() {
      const posts =
        this.$store.getters["octalmage.meep.meep/getPostAll"]({
          params: {},
        })?.Post ?? [];
      // console.log(posts);
      return posts;
    },
    usernames() {
      return this.$store.getters["octalmage.meep.meep/getUsernameAll"]({
          params: {},
        })?.Username ?? [];
    },
    username() {
      return this.usernameForAddress(this.currentAccount);
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
    usernameForAddress(address, def) {
      const username = this.usernames.filter(u => u.creator === address);
      return username.length > 0 ? username[0].name : (def || '');
    },
    onFileChanged(event) {
      console.log('changed');
      const file = event.target.files[0];
      const reader = new FileReader();
      const vm = this;
      reader.onloadend = function () {
        vm.selectedFile = reader.result;
      };
      reader.readAsDataURL(file);
    },
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
        coins: ["100meep"],
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
    async openImage(image) {
      const newTab = window.open();
      newTab.document.body.innerHTML = `<img src="${image}">`;
    },  
    async createThread() {
      this.submitting = true;
      const value = {
        creator: this.currentAccount,
        body: this.body,
        image: this.selectedFile,
      };

      const response = await this.$store.dispatch("octalmage.meep.meep/sendMsgCreateThread", {
        value,
        fee: [],
      }); 

      console.log(response);
      
      this.body = "";
      this.$refs.inputFile.value = '';
      this.selectedFile = '';
      this.submitting = false;
    },
    async createTip(postId) {
      if (!this.loggedIn) {
        alert("Unlock your wallet!");
        return;
      }
      this.tipSubmitting = true;
      // this.submitting = true;
      const value = {
        postId,
        creator: this.currentAccount,
        amount: 1,
      };

      const response = await this.$store.dispatch("octalmage.meep.meep/sendMsgCreateTip", {
        value,
        fee: [],
      });

      console.log(response);
      this.tipSubmitting = false;
    },
    async createUsername() {
      if (!this.loggedIn) {
        alert("Unlock your wallet!");
        return;
      }

      this.submitting = true;
      const value = {
        creator: this.currentAccount,
        name: this.name,
      };

      const response = await this.$store.dispatch("octalmage.meep.meep/sendMsgCreateUsername", {
        value,
        fee: [],
      });

      console.log(response);
      
      this.name = "";
      this.submitting = false;
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
        image: this.selectedFile,
      };

      const response = await this.$store.dispatch("octalmage.meep.meep/sendMsgCreatePost", {
        value,
        fee: [],
      });

      console.log(response);
      
      this.body = "";
      this.$refs.inputFile.value = '';
      this.submitting = false;
      this.selectedFile = '';
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

