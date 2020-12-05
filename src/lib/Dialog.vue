<template>
  <template v-if="visible">
    <div class="abc-dialog-overlay" @click="onClickOverlay" />
    <div class="abc-dialog-wrapper">
      <div class="abc-dialog">
        <header>标题<span class="abc-dialog-close" @click="close"></span></header>
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
          <p>第三行字</p>
        </main>
        <footer>
          <Button level="main" @click="ok">确认</Button>
          <Button @click="cancel">取消</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang='ts'>
import Button from './Button.vue';

export default {
  name: 'Dialog',
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        console.log(props.closeOnClickOverlay);
        close();
      }
    };
    const ok = () => {
      if (props.ok?.() !== false) close();
    };
    const cancel = () => {
      close();
    };
    return {close, onClickOverlay, ok, cancel};
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.abc-dialog {
  min-width: 15em;
  max-width: 90%;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(#000, .5);
  background: white;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: fade_out(#000, .5);
  }

  &-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    font-size: 20px;
    border-bottom: 1px solid $border-color;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    padding: 12px 16px;
    text-align: right;
    border-top: 1px solid $border-color;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      height: 1px;
      width: 100%;
      background: black;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
