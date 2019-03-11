<template>
  <div id="app">
    <div v-if="this.$store.state.isUserLoggedIn">
      <leftmenu/>
      <div id="right-panel" class="right-panel">
        <headmenu/>
        <!-- Content -->
        <div class="content">
          <router-view/>
        </div>
        <!-- /.content -->
      </div>
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>

<script>
import leftmenu from "@/components/office/menus/left.menu.component";
import headmenu from "@/components/office/menus/head.menu.component";

import AuthenticationService from "@/services/authentication.service";
import RoleService from "@/services/role.service";
import RouteService from "@/services/route.service";
import "vuejs-noty/dist/vuejs-noty.css";

export default {
  name: "App",
  components: {
    leftmenu,
    headmenu
  },
  methods: {
    async checkRoute() {
      if (this.$store.state.uid !== "" || this.$store.state.key !== "") {
        const config = {
          headers: {
            access: this.$store.state.token,
            user_identification: this.$store.state.uid,
            user_identification_key: this.$store.state.key
          }
        };
        const data = { route_name: this.$route.name };
        const response_route = await RouteService.checkRoute(data, config);
        console.log(response_route);
        if (response_route.data.error == true) {
          await this.$router.push({ name: "dashboard" });
          await this.$noty.error(response_route.data.message);
        }
      }
    },
    async setClientRoles() {
      if (this.$store.state.uid !== "" || this.$store.state.key !== "") {
        const config = {
          headers: {
            access: this.$store.state.token,
            user_identification: this.$store.state.uid,
            user_identification_key: this.$store.state.key
          }
        };
        const data = { uid: this.$store.state.uid };
        const response_role = await RoleService.getRoleByUID(data, config);
        console.log(response_role);
        const result_name = response_role.data.role.map(a => a.name);
        const result_id = response_role.data.role.map(a => a._id);
        const result_priority = response_role.data.role.map(a => a.priority);
        console.log(result_id);
      console.log(result_name);
       console.log(result_priority);
        await this.$store.dispatch("setRole", {
          name: result_name[0],
          id: result_id[0],
          priority: result_priority[0]
        });
      }
    },
    async check_login_state() {
      if (
        !this.$store.state.isUserLoggedIn &&
        this.$route.name !== "register"
      ) {
        await this.$router.push({ name: "login" });
      }
    },
    async key_login() {
      const cookieKey = this.$cookie.get("key");
      const cookieUID = this.$cookie.get("uid");
      //start automatic login process on every site if remember me is active//
      const response_login = await AuthenticationService.key_login({
        uid: cookieUID,
        key: cookieKey
      });

      if (response_login.data.error === false) {
        await this.$store.dispatch("setKey", cookieKey);
        await this.$store.dispatch("setToken", response_login.data.token);
        await this.$store.dispatch("setUID", cookieUID);
        
      }
    }
  },
  beforeCreate: function() {
    this.$nextTick(async function() {
      await this.key_login();
      await this.check_login_state();
      await this.setClientRoles();
      await this.checkRoute();
     
    });
  },
  created: function() {
    this.$nextTick(async function() {
      await this.setClientRoles();
    });
  },
  watch: {
    async $route(to, from) {
      await this.check_login_state();
      await this.setClientRoles();
      await this.checkRoute();
    }
  }
};
</script>

<style>
</style>
