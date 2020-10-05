import {createApp} from 'vue'; // 创建vue实例的函数
import App from './App.vue';
import {createWebHashHistory, createRouter} from 'vue-router';
import './index.css';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc},
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app'); // 挂载组件