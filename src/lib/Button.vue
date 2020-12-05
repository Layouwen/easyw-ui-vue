<template>
  <button class="abc-button"
          :class="{[`abc-theme-${theme}`]: theme}">
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

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.abc-button {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  white-space: nowrap;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(#000, .95);
  background: white;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-right: $blue;
  }

  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
