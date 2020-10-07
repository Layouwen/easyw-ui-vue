<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="fuck"></Dialog>
</template>

<script lang='ts'>
import {ref} from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';

export default {
  name: 'DialogDemo',
  components: {Dialog, Button},
  setup() {
    const fuck = ref(false);
    const toggle = () => {
      fuck.value = !fuck.value;
    };
    return {fuck, toggle};
  },
};
</script>

<style lang='scss' scoped>

</style>