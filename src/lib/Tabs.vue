<template>
  <div>
    Tabs 组件
    <div v-for="(t,index) in titles" :key="index">{{ t }}</div>
    <component v-for="(c, index) in defaults" :key="index" :is="c" />
  </div>
</template>

<script lang='ts'>
import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  setup(props, context) {
    // 获取元素数组
    const defaults = context.slots.default();
    // 遍历元素数组，判断类型是否为Tab
    defaults.forEach((tag, index) => {
      if (tag.type !== Tab) {
        throw new Error('第' + index + '个' + tag.type + '元素不符合标准');
      }
    });
    // 将标签中的title值取出来
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return {defaults, titles};
  },
};
</script>

<style lang="scss" scoped>

</style>
