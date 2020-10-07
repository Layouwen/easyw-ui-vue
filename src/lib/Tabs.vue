<template>
  <div v-for="(t,index) in titles" :key="index">{{t}} 1312312</div>
  <component v-for="(c,index) in defaults" :is="c" :key="index"/>
</template>

<script lang="ts">
import Tab from './Tab.vue';

export default {
  name: 'Tabs',
  setup(props, context) {
    const defaults = context.slots.default();
    // 判断标签是否使用Tab
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    // 提取里面的title中出来
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    console.log(titles);
    return {
      defaults,
      titles,
    };
  },
};
</script>

<style lang="scss">

</style>