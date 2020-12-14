<demo>
支持 disabled
</demo>

<template>
  <div>
    <Button disabled>默认按钮禁用</Button>
    <Button theme="link" disabled>链接按钮禁用</Button>
    <Button theme="text" disabled>文字按钮禁用</Button>
  </div>
</template>

<script lang='ts'>
import { Button } from '../lib/index';

export default {
  name: 'Button4.demo',
  components: {Button},
};
</script>
