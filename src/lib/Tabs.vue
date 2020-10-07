<template>
  <div class="easyw-tabs">
    <div class="easyw-tabs-nav">
      <div class="easyw-tabs-nav-item" v-for="(t,index) in titles" @click="select(t)" :class="{selected: t ===
      selected}" :key="index">{{t}}
      </div>
    </div>
    <div class="easyw-tabs-content">
      <component class="easyw-tabs-content-item" :class="{selected: c.props.title === selected }" v-for="c in defaults"
                 :is="c"/>
    </div>
  </div>
</template>

<script lang="ts">
import {computed} from 'vue';
import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    // 判断标签是否使用Tab
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    // 提取里面的title中出来
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const select = (title: String) => {
      context.emit('update:selected', title);
    };
    return {
      defaults,
      titles,
      current,
      select,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.easyw-tabs {
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
    
    &-item {
      display: none;
      
      &.selected {
        display: block;
      }
    }
  }
}
</style>