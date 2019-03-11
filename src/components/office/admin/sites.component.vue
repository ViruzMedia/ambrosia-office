<template>
  <div class="sites">
    <h2>Seiten/Routen</h2>
    <br>
    <div class="row">
      <div class="card">
        <div class="card-body">
          <div class="stat-widget-five">
            <div class="stat-icon dib flat-color-3">
              <i class="pe-7s-browser"></i>
            </div>
            <div class="stat-content">
              <div class="text-left dib">
                <div class="stat-text">
                  <span class="count">{{routes.length}}</span>
                </div>
                <div class="stat-heading">total Routes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <strong class="card-title">
              <button v-on:click="getAllRoles()"
                type="button"
                class="btn btn-outline-warning btn-sm"
                data-toggle="modal"
                data-target="#largeModal"
              >Neue Rolle hinzufügen</button>
            </strong>
          </div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ObjectID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Route</th>
                  <th scope="col">Role</th>
                  <th scope="col">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="route in routes" :key="route.length">
                  <th scope="row">{{route._id}}</th>
                  <td>{{route.name}}</td>
                  <td>{{route.route}}</td>
                  <td>{{route.needed_role}}</td>
                  <td>{{route.needed_priority}}</td>
                  <td>
                    <button type="button" class="btn btn-outline-success btn-sm">
                      <i class="fa fa-pencil"></i> Ändern
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm">
                      <i class="fa fa-exclamation"></i> Löschen
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="largeModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="largeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="largeModalLabel">Neue Route hinzufügen:</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="row form-group">
                <input v-model="route_name"
                  type="text"
                  id="text-input"
                  name="text-input"
                  placeholder="Routen-Name"
                  class="form-control .col-sm-3"
                >
                <input v-model="route_route"
                  type="text"
                  id="text-input"
                  name="text-input"
                  placeholder="/route"
                  class="form-control .col-sm-3"
                >
                
                <input v-model="route_priority"
                  type="number"
                  id="text-input"
                  name="text-input"
                  placeholder="Priority"
                  class="form-control"
                >
                <select v-model="route_role" name="select" id="select" class="form-control">
                  <option  v-for="role in roles" :key="role.length" placeholder="Rolle" >{{role.name}}</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <p>{{route_name}}</p><br>
            <p>{{route_route}}</p><br>
            <p>{{route_role}}</p><br>
            <p>{{route_priority}}</p><br>
            <button  type="button" class="btn btn-secondary" data-dismiss="modal">Beenden</button>
            <button v-on:click="addRoute()" type="button" class="btn btn-primary">Absenden</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vuejs-noty/dist/vuejs-noty.css";
import RouteService from "@/services/route.service";
import RoleService from "@/services/role.service";
export default {
  name: "sites",
  data() {
    return {
      routes: [{}],
      roles: [{}],
      route_name: '',
      route_route: '',
      route_role: '',
      route_priority: '',
    };
  },
  methods: {
    async addRoute(){
      const data = {
          name: this.route_name,
          route: this.route_route,
          needed_role: this.route_role,
          needed_priority: this.route_priority
      }
      const config = {
        headers: {
          access: this.$store.state.token,
          user_identification: this.$store.state.uid,
          user_identification_key: this.$store.state.key
        }
      };
      if(this.roles.length > 0) {
        const str = this.roles.find(d => d.name === this.route_role);
        console.log(str._id)
        data.needed_role = str._id;
      }
    const response = await RouteService.addRoute(data, config);
      if(response.data.error == true) {
        await this.$noty.error(response.data.message);
      } else {
        await this.$noty.success(response.data.message);
      }
    },
    async getAllRoutes() {
      const config = {
        headers: {
          access: this.$store.state.token,
          user_identification: this.$store.state.uid,
          user_identification_key: this.$store.state.key
        }
      };
      //console.log(config);
      const response = await RouteService.getAllRoutes(config);
      //console.log(response);
      this.routes = response.data.routes;
    },
    async getAllRoles() {
      const config = {
        headers: {
          access: this.$store.state.token,
          user_identification: this.$store.state.uid,
          user_identification_key: this.$store.state.key
        }
      };
      console.log(config);
      const response = await RoleService.getAllRoles(config)
      console.log(response);
      this.roles = response.data.roles;
    }
  },
  created: async function() {
    await this.getAllRoutes();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
