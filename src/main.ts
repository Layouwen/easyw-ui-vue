import { createApp } from 'vue';
import App from './App.vue';
import Lyw from './components/Lyw.vue';
import Lyw2 from './components/Lyw2.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router';

const history = createWebHashHistory(

);
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Lyw},
    {path: '/lyw2', component: Lyw2},
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
