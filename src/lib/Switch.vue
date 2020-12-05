<template>
  <button class="abc-switch" :class="{'abc-checked': value}" @click="toggleChecked"><span></span></button>
</template>

<script lang='ts'>
export default {
  name: 'Switch',
  props: {value: Boolean},
  setup(props, context) {
    const toggleChecked = () => {
      context.emit('update:value', !props.value);
    };
    return {toggleChecked};
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.abc-switch {
  position: relative; height: $h; width: $h*2;
  border: none; border-radius: $h / 2; background: #bfbfbf;

  > span {
    position: absolute; top: 2px; left: 2px;
    width: $h2; height: $h2; border-radius: $h2 / 2;
    background: white; transition: all 250ms;
  }

  &:active {
    > span { width: $h2 + 4px; }
  }

  &.abc-checked {
    background: #1890ff;

    &:active {
      > span { width: $h2 + 4px; margin-left: -4px; }
    }

    > span { left: calc(100% - #{$h2} - 2px); }
  }
}
</style>
