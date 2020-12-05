<template>
  <div>
    <TopNav />
    <div class="banner">
      <h1>无名框架</h1>
      <h2>基于Vue3开发的无名框架</h2>
      <p class="actions">
        <a href="http://github.com/layouwen">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import TopNav from '../components/TopNav.vue';

export default {
  name: 'Home',
  components: {TopNav},
};
</script>

<style lang='scss' scoped>
.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  background: lightgreen;
  
  > .actions {
    padding: 8px 0;
    
    > a {
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
      margin: 0 8px;
      background: #fff;
    }
  }
}
</style>
