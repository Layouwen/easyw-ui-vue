import { createApp } from 'vue';
import App from './App.vue';
import Doc from './View/Doc.vue';
import Home from './View/Home.vue';
import './index.scss';
import { createWebHashHistory, createRouter } from 'vue-router';

const history = createWebHashHistory(

);
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {path: '/doc', component: Doc},
    // {path: '/switch', component: Switch},
    // {path: '/button', component: Button},
    // {path: '/dialog', component: Dialog},
    // {path: '/tabs', component: Tabs},
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
