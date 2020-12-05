<template>
  <div>
    <TopNav />
    <div class="banner">
      <h1>无名框架</h1>
      <h2>基于Vue3开发的无名框架</h2>
      <p class="actions">
        <a href="javascript:">Github</a>
        <a href="javascript:">开始</a>
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import TopNav from '../components/TopNav.vue';

export default {
  name: 'Doc',
  components: {TopNav},
};
</script>

<style scoped>

</style>
