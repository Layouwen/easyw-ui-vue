import {createApp} from 'vue'; // 创建vue实例的函数
import App from './App.vue';
import {createWebHashHistory, createRouter} from 'vue-router';
import './index.css';
import Easyw from './components/Easyw.vue';
import Test from './components/Test.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Easyw},
    {path: '/test', component: Test},
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app'); // 挂载组件