import Doc from './View/Doc.vue';
import Home from './View/Home.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import './index.scss';
import { createWebHashHistory, createRouter } from 'vue-router';

const history = createWebHashHistory(

);
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '/doc/switch', component: SwitchDemo},
        {path: '/doc/button', component: ButtonDemo},
        {path: '/doc/dialog', component: DialogDemo},
        {path: '/doc/tabs', component: TabsDemo},
      ],
    },
  ],
});

router.afterEach(() => {
  console.log('切换');
});
