<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="fuck" :closeOnClickOverlay="false" :ok="f1" :cancel="f2"></Dialog>
</template>

<script lang='ts'>
import {ref} from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';

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
    return {fuck, toggle, f1, f2};
  },
};
</script>

<style lang='scss' scoped>

</style>