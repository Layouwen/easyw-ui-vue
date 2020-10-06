<template>
  <!-- :class="{[`theme-${theme}`]: theme}" -->
  <button class="easyw-button"
          :class="`theme-${theme}`">
    <slot/>
  </button>
</template>

<script lang='ts'>
export default {
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style lang='scss' scoped>
div {
  border: 1px solid red;
}
</style>