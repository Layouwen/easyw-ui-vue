<template>
  <div>
    <div>Button 实例</div>
    <h1>示例1</h1>
    <div>
      <Button theme="button">按钮</Button>
      <Button theme="link">按钮</Button>
      <Button theme="text">按钮</Button>
      <Button>按钮</Button>
    </div>
  </div>
</template>

<script lang='ts'>
import Button from '../lib/Button.vue';

export default {
  name: 'ButtonDemo',
  components: {Button},
  setup() {
    const onClick = () => {
      console.log(2);
    };
    return {onClick};
  },
};
</script>

<style lang='scss' scoped>

</style>