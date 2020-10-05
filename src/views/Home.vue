<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>Easy-UI</h1>
      <h2>一个很厉害的 UI 框架</h2>
      <p class="actions">
        <a>GitHub</a>
        <a>开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue'
  export default {
    name: "Home",
    components: {Topnav}
  }
</script>

<style lang="scss" scoped>
</style>