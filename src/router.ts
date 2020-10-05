import {createRouter, createWebHashHistory} from 'vue-router';
import SwitchDemo from './components/SwitchDemo.vue';
import Doc from './views/Doc.vue';
import Home from './views/Home.vue';

const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: 'switch', component: SwitchDemo},
        {path: 'switch', component: SwitchDemo},
      ],
    },
  ],
});