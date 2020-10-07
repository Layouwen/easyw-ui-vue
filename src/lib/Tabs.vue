<template>
  <div class="easyw-tabs">
    <div class="easyw-tabs-nav" ref="container">
      <div class="easyw-tabs-nav-item" v-for="(t,index) in titles" :ref="el => { if (el) navItems[index] = el }"
           @click="select(t)" :class="{selected: t=== selected}" :key="index">{{t}}
      </div>
      <div class="easyw-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="easyw-tabs-content">
      <component class="easyw-tabs-content-item" :class="{selected: c.props.title === selected }" v-for="c in defaults"
                 :is="c"/>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, ref, onMounted, onUpdated} from 'vue';
import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const divs = navItems.value;
      const result = divs.filter(div => div.classList.contains('selected'))[0];
      console.log(result);
      const {
        width,
      } = result.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {
        left: left1,
      } = container.value.getBoundingClientRect();
      const {
        left: left2,
      } = result.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + 'px';
    };
    onMounted(x);
    onUpdated(x);

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
      navItems,
      indicator,
      container,
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
    position: relative;
    
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
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
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