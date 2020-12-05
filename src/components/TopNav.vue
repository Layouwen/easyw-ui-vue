<template>
  <div class="topNav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>

<script lang='ts'>
import { inject, Ref } from 'vue';

export default {
  name: 'TopNav',
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible');
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggleMenu};
  },
};
</script>

<style lang='scss' scoped>
.topNav {
  position: relative;
  z-index: 10;
  display: flex;
  padding: 16px;
  background: pink;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    display: none;
    width: 24px;
    height: 24px;
    background: lightcoral;
  }

  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: block;
    }
  }
}
</style>
