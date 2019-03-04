<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import AuthenticationService from "@/services/authentication.service";
import "vuejs-noty/dist/vuejs-noty.css";

export default {
  name: "App",
  methods: {
    async check_login_state() {
      if (
        !this.$store.state.isUserLoggedIn &&
        this.$route.name !== "register"
      ) {
        await this.$router.push({ name: "login" });
      }
    },
    async key_login(){
      const cookieKey = this.$cookie.get("key");
      const cookieUID = this.$cookie.get("uid");
      //start automatic login process on every site if remember me is active//
      const response_login = await AuthenticationService.key_login({
        uid: cookieUID,
        key: cookieKey
      });

      if (response_login.data.error === false) {
        await this.$store.dispatch("setUID", cookieUID);
        await this.$store.dispatch("setToken", response_login.data.token);
      }
    }
  },
  created: function() {
    this.$nextTick(async function() {
      await this.key_login();
      await this.check_login_state();
    });
  },
  watch: {
    $route(to, from) {
      this.check_login_state();
    }
  }
};
</script>

<style>
</style>
