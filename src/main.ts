import {createApp} from 'vue'; // 创建vue实例的函数
import './index.scss';
import './lib/easyw.scss';
import App from './App.vue';
import {router} from './router';


const app = createApp(App);
app.use(router);
app.mount('#app'); // 挂载组件