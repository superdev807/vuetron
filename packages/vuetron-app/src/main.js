import Vue from 'vue';
// import Vue-Router and Vuex
import VueRouter from 'vue-router';
import { store } from './store';
// import all components
import App from './App.vue';
import Home from './components/home/HomeContainer.vue';
import EventStream from './components/event-stream/EventStreamContainer.vue';
import Subscription from './components/subscriptions/SubscriptionContainer.vue';
import State from './components/State.vue';
import ComponentTree from './components/ComponentTree.vue';
import VueObjectView from './lib/vue-object-view/VueObjectView.vue';
// import styles and icons
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons';

// use Router, Bootstrap, and Icons
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.component('vue-object-view', VueObjectView);
Vue.component('icon', Icon);

// define Router routes and instantiate router
const routes = [
  { path: '/', component: Home },
  { path: '/eventstream', component: EventStream },
  { path: '/subscription', component: Subscription },
  { path: '/state', component: State },
  { path: '/vuevision', component: ComponentTree },
  { path: '*', redirect: '/' }
];
const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#vuetron',
  template: '<App/>',
  router,
  store,
  components: { App }
});
/* eslint-disable-line no-new */

/**
 * COLOR PALLETTE
 * mint green: #06F7B4
 * mint green-btn: rgba(5, 248, 180, 31)
 * purple-nav: #364984
 * purple-text: #001453
 * light gray: #D8D8D8
 * dark gray: #979797
 */
