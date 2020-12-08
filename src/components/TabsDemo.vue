<template>
  <div>Tabs 示例</div>
  <Demo :component="Tabs1Demo" />
</template>

<script lang='ts'>
import Demo from './Demo.vue';
import Tabs1Demo from './Tabs1.demo.vue';

export default {
  name: 'TabsDemo',
  components: {Demo},
  setup() {
    return {Tabs1Demo};
  },
};
</script>
