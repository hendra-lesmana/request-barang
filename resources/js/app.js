require('./bootstrap');

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';
import App from './admin/App.vue';

// Import views
import Dashboard from './admin/views/Dashboard.vue';
import Departments from './admin/views/Departments.vue';
import Employees from './admin/views/Employees.vue';
import Locations from './admin/views/Locations.vue';
import Items from './admin/views/Items.vue';
import Requests from './admin/views/Requests.vue';

// Use plugins
Vue.use(Vuetify);
Vue.use(VueRouter);

// Configure router
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/admin', component: Dashboard },
    { path: '/admin/departments', component: Departments },
    { path: '/admin/employees', component: Employees },
    { path: '/admin/locations', component: Locations },
    { path: '/admin/items', component: Items },
    { path: '/admin/requests', component: Requests },
    { path: '*', redirect: '/admin' }
  ]
});

// Create Vue instance
const app = new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify(),
  render: h => h(App)
});