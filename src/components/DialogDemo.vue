<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="fuck" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:title>
      <strong>我是自定义标题</strong>
    </template>
    <template v-slot:content>
      <strong>自定义内容1</strong>
      <div>自定义内容2</div>
    </template>
  </Dialog>
  <h1>示例2</h1>
  <Button @click="showDialog">show</Button>
</template>

<script lang='ts'>
import {ref, h} from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {openDialog} from '../lib/openDialog';

export default {
  name: 'DialogDemo',
  components: {Dialog, Button},
  setup(props, context) {
    const fuck = ref(false);
    const toggle = () => {
      fuck.value = !fuck.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        },
      });
    };
    return {fuck, toggle, f1, f2, showDialog};
  },
};
</script>

<style lang='scss' scoped>

</style>