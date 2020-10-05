import {createApp} from 'vue'; // 创建vue实例的函数
import App from './App.vue';
import {router} from './router';
import './index.scss';


const app = createApp(App);
app.use(router);
app.mount('#app'); // 挂载组件