<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="test">你好</Button>
  </div>
</template>

<script lang='ts'>
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
  setup() {
    const test = () => {
      console.log('你好');
    };
    return {test};
  },
};
</script>

<style scoped>

</style>
