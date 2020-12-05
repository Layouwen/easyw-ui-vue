<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>默认样式按钮</Button>
    <Button theme="button">普通按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文本按钮</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button theme="button" size="small">小按钮</Button>
    <Button theme="button" size="normal">普通按钮</Button>
    <Button theme="button" size="big">大按钮</Button>
  </div>
  <div>
    <Button theme="link" size="small">小按钮</Button>
    <Button theme="link" size="normal">普通按钮</Button>
    <Button theme="link" size="big">大按钮</Button>
  </div>
  <div>
    <Button theme="text" size="small">小按钮</Button>
    <Button theme="text" size="normal">普通按钮</Button>
    <Button theme="text" size="big">大按钮</Button>
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
