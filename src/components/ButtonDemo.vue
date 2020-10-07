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
    <h1>示例2</h1>
    <div>
      <Button>按钮</Button>
      <Button size="big">按钮</Button>
      <Button size="small">按钮</Button>
    </div>
    <div>
      <Button theme="link">按钮</Button>
      <Button theme="link" size="big">按钮</Button>
      <Button theme="link" size="small">按钮</Button>
    </div>
    <div>
      <Button theme="text">按钮</Button>
      <Button theme="text" size="big">按钮</Button>
      <Button theme="text" size="small">按钮</Button>
    </div>
  </div>
  <h1>示例3</h1>
  <div>
    <div>
      <Button>普通按钮</Button>
      <Button level="main">主要按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text">普通链接按钮</Button>
      <Button theme="text" level="main">主要链接按钮</Button>
      <Button theme="text" level="danger">危险链接按钮</Button>
    </div>
  </div>
  <h1>示例4</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
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