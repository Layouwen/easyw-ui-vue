<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggleDialog">显示Dialog</Button>
  <Dialog v-model:visible="x" :close-on-click-overlay="false" close-on-click-overlay
          :ok="fn1" :cancel="fn2">
    <template v-slot:title>
      <strong>我是加粗的标题</strong>
    </template>
    <template v-slot:content>
      <p>h1</p>
      <p>h2</p>
    </template>
  </Dialog>
</template>

<script lang='ts'>
import { ref } from 'vue';
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';

export default {
  name: 'DialogDemo',
  components: {Button, Dialog},
  setup() {
    const x = ref(false);
    const toggleDialog = () => {
      x.value = true;
      console.log(x.value);
    };
    const fn1 = () => {
      alert('你点击了确认按钮');
      return false;
    };
    const fn2 = () => {
    };
    return {toggleDialog, x, fn1, fn2};
  },
};
</script>

<style scoped>

</style>
