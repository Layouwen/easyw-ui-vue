<template>
  <div>
    <div class="topNavAndBanner">
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
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-light"></use>
      </svg>
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
$color: #28d1c9;
$green: #02bcb0;
$border-radius: 4px;

.topNavAndBanner {
  background: rgb(227, 255, 253);
  background: linear-gradient(140deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);

  .banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    color: $color;

    > .actions {
      padding: 8px 0;

      > a {
        display: inline-block;
        padding: 8px 24px;
        margin: 0 8px;
        color: #fff;
        border-radius: $border-radius;
        background: $green;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}

.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
</style>
