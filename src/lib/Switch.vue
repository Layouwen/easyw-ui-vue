<template>
  <div>
    <button :class="{checked: value}" @click="toggleChecked"><span></span></button>
    {{ value }}
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Switch',
  props: {value: Boolean},
  setup(props, context) {
    console.log(props, 'props');
    console.log(context, 'context');
    const toggleChecked = () => {
      context.emit('input', !props.value);
    };
    return {toggleChecked};
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  position: relative;
  height: $h;
  width: $h*2;
  border: none;
  border-radius: $h / 2;
  background: grey;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    border-radius: $h2 / 2;
    background: white;
    transition: all 250ms;
  }

  &.checked {
    background: blue;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>
