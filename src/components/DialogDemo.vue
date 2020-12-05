<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggleDialog">显示Dialog</Button>
  <Dialog :visible="x"></Dialog>
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
    return {toggleDialog, x};
  },
};
</script>

<style scoped>

</style>
