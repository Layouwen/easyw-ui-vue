<template>
  <div>
    Tabs 组件
    <component :is="defaults[0]" />
    <component :is="defaults[1]" />
  </div>
</template>

<script lang='ts'>
import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag, index) => {
      if (tag.type !== Tab) {
        throw new Error('第' + index + '个' + tag.type + '元素不符合标准');
      }
    });
    return {defaults};
  },
};
</script>

<style lang="scss" scoped>

</style>
