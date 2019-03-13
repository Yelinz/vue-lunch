import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const DateView = () => import('./views/DateView.vue');
const IndexView = () => import('./views/IndexView.vue');

export function createRouter() {
  return new Router({
    routes: [
      {path: '/', component: IndexView},
      {path: '/date', component: DateView},
    ],
  });
}
