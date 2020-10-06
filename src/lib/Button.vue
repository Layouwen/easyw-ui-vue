<template>
  <div :size="size">
    <!-- 使用 $attrs 将继承绑定到button标签中 -->
    <button v-bind="rest">
      <slot/>
    </button>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Button',
  inheritAttrs: false, // 取消继承外部的事件绑定
  setup(props, context) {
    // 将 size 取出来，其余所有事件使用...rest接收
    const {size, ...rest} = context.attrs;
    return {size, rest};
  },
};
</script>

<style lang='scss' scoped>

</style>