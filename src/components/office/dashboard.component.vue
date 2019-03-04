<template>
  <div class="dashboard">
    <headmenu/>
    <leftmenu/>
  </div>
</template>

<script>
import leftmenu from "@/components/office/menus/left.menu.component"
import headmenu from "@/components/office/menus/head.menu.component"
export default {
  name: 'dashboard',
  data () {
    return {
     
    }
  },
  components: {
    leftmenu,
    headmenu
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
