<template>
  <h1>Switch 组件示例</h1>
  <Demo :component="Switch1Demo" />
  <Demo :component="Switch2Demo" />
</template>

<script lang='ts'>
import Button from '../lib/Button.vue';
import Demo from './Demo.vue';
import Switch1Demo from '../components/Switch1.demo.vue';
import Switch2Demo from '../components/Switch2.demo.vue';
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const Prism = (window as any).Prism;

export default {
  name: 'SwitchDemo',
  components: {Demo, Button},
  setup() {
    return {Switch1Demo, Switch2Demo, Prism};
  },
};
</script>

<style lang="scss" scoped>
</style>
