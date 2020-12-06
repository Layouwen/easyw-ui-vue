<template>
  <div class="abc-tabs">
    <div class="abc-tabs-nav">
      <div class="abc-tabs-nav-item" v-for="(t,index) in titles" :key="index">{{ t }}</div>
    </div>
    <div class="abc-tabs-content">
      <component class="abc-tabs-content-item" v-for="(c, index) in defaults" :key="index" :is="c" />
    </div>
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
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.abc-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
