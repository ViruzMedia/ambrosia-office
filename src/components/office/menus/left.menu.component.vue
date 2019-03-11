<template class="left_menu">
  <aside id="left-panel" class="left-panel">
    <nav class="navbar navbar-expand-sm navbar-default">
      <div id="main-menu" class="main-menu collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li>
            <router-link :to="{name: 'dashboard'}"><i class="fa fa-home"></i> Dashboard</router-link>
          </li>
          <li class="menu-title">Finanzen</li>
          <!-- /.menu-title -->
          <li class="menu-item-has-children dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="menu-icon fa fa-cogs"></i> Finanzen 1
            </a>
          </li>
          <li class="menu-item-has-children dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="menu-icon fa fa-cogs"></i> Finanzen 2
            </a>
          </li>
          <li class="menu-item-has-children dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="menu-icon fa fa-cogs"></i> Finanzen 3
            </a>
          </li>

          <li class="menu-title">Bäume</li>
          <!-- /.menu-title -->
          <li class="menu-item-has-children dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="menu-icon fa fa-cogs"></i> Sponserbaum
            </a>
          </li>
          <li class="menu-item-has-children dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="menu-icon fa fa-cogs"></i> Partnerbaum
            </a>
          </li>
          <li class="menu-title">Administrativ</li>
          <!-- /.menu-title -->
          <li class="menu-item-has-children dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="menu-icon fa fa-glass"></i>Accounts
            </a>
          </li>
          <li>
            <router-link :to="{name: 'sites'}"><i class="menu-icon ti-email"></i>Seiten</router-link>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </nav>
  </aside>
</template>

<script>
export default {
  name: "left_menu",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
