<template>
  <div class="abc-tabs">
    <div class="abc-tabs-nav" ref="container">
      <div class="abc-tabs-nav-item"
           :class="{selected: t===selected}"
           @click="select(t)"
           :ref="el=>{ if(t===selected) selectedItem = el }"
           v-for="(t,index) in titles" :key="index">{{ t }}
      </div>
      <div class="abc-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="abc-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang='ts'>
import Tab from './Tab.vue';
import { ref, onUpdated, onMounted, computed } from 'vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    // 获取container元素
    const container = ref<HTMLDivElement>(null);
    // 获取选中的标签
    const selectedItem = ref<HTMLDivElement>(null);
    // 获取下划线元素
    const indicator = ref<HTMLDivElement>(null);
    // 设置
    const setIndicator = () => {
      // 获取它的宽度
      const {width} = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      console.log(width);

      // 计算下划线的偏移量
      const {left: left1} = container.value.getBoundingClientRect();
      const {left: left2} = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + 'px';
    };

    // 第一次和每次更新都执行
    onMounted(setIndicator);
    onUpdated(setIndicator);

    // 获取元素数组
    const defaults = context.slots.default();
    // 遍历元素数组，判断类型是否为Tab
    defaults.forEach((tag, index) => {
      if (tag.type.name !== Tab.name) {
        throw new Error('第' + index + '个' + tag.type + '元素不符合标准');
      }
    });
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected);
    });
    // 将标签中的title值取出来
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    // 修改外部的选中标签
    const select = (title: String) => {
      context.emit('update:selected', title);
    };
    return {current, defaults, indicator, selectedItem, titles, select, container};
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.abc-tabs {
  &-nav {
    position: relative;
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
    &-indicator {
      position: absolute;
      left: 0;
      bottom: -1px;
      height: 3px;
      width: 100%;
      background: $blue;
      transition: left 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
