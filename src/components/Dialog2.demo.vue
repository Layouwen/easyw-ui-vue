<demo>
一键打开 Dialog
</demo>

<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import { h } from 'vue';
import { openDialog } from '../lib/openDialog';

export default {
  name: 'Dialog2.demo',
  components: {Button},
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '我是标题'),
        content: '我是内容',
        ok() {
          console.log('你点击了确认按钮');
        },
        cancel() {
          console.log('你点击了取消按钮');
        },
      });
    };
    return {showDialog};
  },
};
</script>
