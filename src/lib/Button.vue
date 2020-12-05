<template>
  <div :size="size">
    <!-- 通过绑定$attrs，绑定外部的属性 -->
    <!-- <button v-bind="$attrs"> -->
    <button v-bind="rest">
      <slot />
    </button>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Button.vue',
  // 取消默认继承外部属性
  inheritAttrs: false,
  setup(props, context) {
    const {size, ...rest} = context.attrs;
    return {size, rest};
  },
};
</script>

<style lang="scss" scoped>

</style>
