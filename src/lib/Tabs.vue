<template>
  <div class="abc-tabs">
    <div class="abc-tabs-nav">
      <div class="abc-tabs-nav-item"
           :class="{selected: t===selected}"
           @click="select(t)"
           :ref="el=>{if(el) navItems[index] = el}"
           v-for="(t,index) in titles" :key="index">{{ t }}
      </div>
      <div class="abc-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="abc-tabs-content">
      <component class="abc-tabs-content-item"
                 :class="{selected: c.props.title === selected }"
                 v-for="c in defaults"
                 :is="c" />
    </div>
  </div>
</template>

<script lang='ts'>
import { ref, onMounted } from 'vue';
import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    // 获取tab数组
    const navItems = ref<HTMLDivElement[]>([]);
    // 获取下划线元素
    const indicator = ref<HTMLDivElement>(null);
    // 加载完毕后执行
    onMounted(() => {
      // 所有tab的元素
      const divs = navItems.value;
      // 获取选中的标签
      const result = divs.filter(div => div.classList.contains('selected'))[0];
      // 获取它的宽度
      const {width} = result.getBoundingClientRect();
      console.log(width);
      indicator.value.style.width = width + 'px';
    });
    // 获取元素数组
    const defaults = context.slots.default();
    // 遍历元素数组，判断类型是否为Tab
    defaults.forEach((tag, index) => {
      if (tag.type !== Tab) {
        throw new Error('第' + index + '个' + tag.type + '元素不符合标准');
      }
    });
    // 过滤当前选中的元素
    const current = defaults.filter((tag) => {
      return tag.props.title === props.selected;
    })[0];
    // 将标签中的title值取出来
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    // 修改外部的选中标签
    const select = (title: String) => {
      context.emit('update:selected', title);
    };
    return {defaults, indicator, navItems, titles, current, select};
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
    }
  }

  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
