<template>
  <Switch v-model:value="xxx" />
</template>

<script lang='ts'>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';

export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup() {
    const xxx = ref(true);
    return {xxx};
  },
};
</script>

<style scoped>

</style>
