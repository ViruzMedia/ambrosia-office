<template>
  <div class="dashboard">
    <h2>Dashboard-Page</h2>
    <br>
    <div class="row">
      <div class="col-5">
        <aside class="profile-nav alt">
          <section class="card">
            <div class="card-header user-header alt bg-dark">
              <div class="media">
                <a href="#">
                  <img
                    class="align-self-center rounded-circle mr-3"
                    style="width:85px; height:85px;"
                    alt
                    src="images/admin.jpg"
                  >
                </a>
                <div class="media-body">
                  <h2 class="text-light display-6">{{this.$store.state.uid}}</h2>
                  <p>{{this.$store.state.role.name}}</p>
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-header">
            <h4>Site-Status</h4>
          </div>
          <div class="card-body">
            <p>FrontEnd</p>
            <div class="progress mb-3">
              <div
                class="progress-bar bg-success progress-bar-striped progress-bar-animated"
                role="progressbar"
                style="width: 5%"
                aria-valuenow="5"
                aria-valuemin="0"
                aria-valuemax="100"
              >5%</div>
            </div>
            <p>API-Connection</p>
            <div class="progress mb-3">
              <div
                class="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                role="progressbar"
                style="width: 1%"
                aria-valuenow="1"
                aria-valuemin="0"
                aria-valuemax="100"
              >1%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
