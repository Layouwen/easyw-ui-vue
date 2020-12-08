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
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>框架使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源码功能使用 TypeScript 书写</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码简单</h3>
          <p>多次重构，使用简洁的语法完成</p>
        </li>
      </ul>
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
  clip-path: ellipse(80% 60% at 50% 40%);
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
  width: 100%;
  margin: 64px auto;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      width: 400px;
      margin: 16px 0;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text
      }
    }
  }
}
</style>
