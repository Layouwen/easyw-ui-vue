<template>
  <Switch v-model:value="bool" />
</template>

<script lang='ts'>
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';

export default {
  name: 'SwitchDemo',
  components: {Switch},
  setup() {
    const bool = ref(true);
    return {bool};
  },
};
</script>

<style scoped>

</style>
