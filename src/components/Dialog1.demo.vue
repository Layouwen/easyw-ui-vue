<demo>
常规使用
</demo>

<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="status" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
      <template v-slot:content>
        <strong>我是加粗了的内容</strong>
        <div>我是普通的内容</div>
      </template>
      <template v-slot:title>
        <strong>我是加粗了的标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { Dialog } from '../lib/index';
import { Button } from '../lib/index';
import { ref } from 'vue';

export default {
  name: 'Dialog1.demo',
  components: {
    Dialog,
    Button,
  },
  setup() {
    const status = ref(false);

    const toggle = () => {
      status.value = !status.value;
    };

    const f1 = () => {
      alert('你点击了确认按钮，并阻止了退出');
      return false; // return false 可以阻止退出
    };
    const f2 = () => {
      console.log('你点击了取消按钮');
    };
    return {status, toggle, f1, f2};
  },
};
</script>
