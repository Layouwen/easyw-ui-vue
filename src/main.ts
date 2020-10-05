import {createApp} from 'vue'; // 创建vue实例的函数
import {createWebHashHistory, createRouter} from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import './index.scss';

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