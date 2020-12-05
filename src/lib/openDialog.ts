import Dialog from './Dialog.vue';
import { createApp, h } from 'vue';

export const openDialog = (options) => {
  const {title, content, ok, cancel} = options;
  // 创建div标签挂载到body页面中
  const div = document.createElement('div');
  document.body.append(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ok, cancel,
        },
        {
          title,
          content,
        },
      );
    },
  });
  app.mount(div);
};
