<template>
  <div>
    <TopNav />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ul>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ul>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from 'vue';
import TopNav from '../components/TopNav.vue';

export default {
  name: 'Doc',
  components: {TopNav},
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    return {menuVisible};
  },
};
</script>

<style lang='scss' scoped>
aside {
  width: 150px;
  padding: 16px;
  background: lightblue;

  > h2 {
    margin-bottom: 4px;
  }

  > ol {
    > li {
      padding: 4px 0;
    }
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>
