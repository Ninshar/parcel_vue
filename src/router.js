import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

const router = new VueRouter({
  routes: [
    { path: '/', name:"foo", component: Foo },
    { path: '/bar', name:"bar", component: Bar }
  ]// (缩写) 相当于 routes: routes
})

export default router;