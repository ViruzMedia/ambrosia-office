<template>
  <div class="login_registration">
    <div class="sufee-login d-flex align-content-center flex-wrap">
      <div class="container">
        <div class="login-content">
          <div class="login-logo">
            <a href="">
              <img class="align-content" src="static/assets/images/ambrosialogo.png" alt>
            </a>
          </div>
          <div class="login-form">
            <h6>Account-System > Login</h6>
            <hr>
            <div class="form-group">
              <label>Account-Name</label>
              <input v-model="username" required class="form-control" placeholder="Account-Name">
            </div>
            <div class="form-group">
              <label>Passwort</label>
              <input
                type="password"
                class="form-control"
                placeholder="Passwort"
                v-model="password"
                required
              >
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" v-model="remember"> Eingeloggt bleiben!
              </label>
             <!-- <label class="pull-right">
                <a href="#">Passwort vergessen?</a>
              </label> -->
            </div>
            <br>
            <button
              @click="login"
              class="btn btn-success btn-sm"
            >Einloggen</button>
            <hr>
            <div class="register-link m-t-15 text-center">
              <p>Kein Ambrosia-Mitglied?
                <router-link :to="'register'">Jetzt registrieren!</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/authentication.service";
export default {
  name: "login",
  data() {
    return {
      username: "",
      select: null,
      password: "",
      message: "",
      spec: "",
      alert: false,
      remember: false
    };
  },
  methods: {
    async login() {
      const response = await AuthenticationService.login({
        username: this.username,
        password: this.password
      });
      this.$cookie.set("uid", response.data.id, 7);
      if (this.remember === true) {
        this.$cookie.set("key", response.data.key, 7);
      }
      this.$store.dispatch("setUID", response.data.id);
      this.$store.dispatch("setToken", response.data.token);

      await this.updateMessage(response);
      if (this.alert === true) {
        this.$noty.error(this.message);
      }
      if (this.$store.state.isUserLoggedIn) {
        this.$noty.success(this.message);
      }
      if (this.remember) {
        this.$noty.info(
          "Du bist jetzt für <b>7 Tage</b> eingeloggt, <br> wenn du dich nicht Manuell ausloggst."
        );
      }
      if (this.$store.state.isUserLoggedIn) {
        return this.navigateTo({
          name: "dashboard"
        });
      }
    },
    async updateMessage(response) {
      this.message = response.data.message;
      this.spec = response.data.spec;
      this.alert = response.data.error;
      await this.$nextTick();
    },
    async navigateTo(route) {
      await this.$router.push(route);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
