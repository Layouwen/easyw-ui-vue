<template>
  <button class="abc-button"
          :class="{[`theme-${theme}`]: theme}">
    <slot />
  </button>
</template>

<script lang='ts'>
export default {
  name: 'Button.vue',
  props: {
    theme: {
      type: String,
      default: 'button',
    },
  },
  setup(props, context) {
  },
};
</script>

<style lang="scss" scoped>

</style>
