<template>
  <router-view />
</template>

<script lang='ts'>
import { ref, provide } from 'vue';
import { router } from './router';

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width > 500);
    // 全局注入属性
    provide('menuVisible', menuVisible);
    // 切换路由后取消显示
    router.afterEach(() => {
      if (width <= 500) menuVisible.value = false;
    });
  },
};
</script>
