<demo>
支持 size
</demo>

<template>
  <div>
    <Button size="small">小按钮</Button>
    <Button>普通按钮</Button>
    <Button size="big">大按钮</Button>
  </div>
  <div>
    <Button theme="link" size="small">小按钮</Button>
    <Button theme="link">普通按钮</Button>
    <Button theme="link" size="big">大按钮</Button>
  </div>
  <div>
    <Button theme="text" size="small">小按钮</Button>
    <Button theme="text">普通按钮</Button>
    <Button theme="text" size="big">大按钮</Button>
  </div>
</template>

<script lang="ts">
import { Button } from '../lib/index';

export default {
  name: 'Button2.demo',
  components: {Button},
};
</script>
