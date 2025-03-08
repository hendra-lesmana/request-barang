import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)
Vue.use(VueRouter)

// Import route components
const Dashboard = () => import('./views/Dashboard.vue')
const Departments = () => import('./views/Departments.vue')
const Employees = () => import('./views/Employees.vue')
const Locations = () => import('./views/Locations.vue')
const Items = () => import('./views/Items.vue')
const Requests = () => import('./views/Requests.vue')

// Configure routes
const routes = [
  { path: '/admin', component: Dashboard },
  { path: '/admin/departments', component: Departments },
  { path: '/admin/employees', component: Employees },
  { path: '/admin/locations', component: Locations },
  { path: '/admin/items', component: Items },
  { path: '/admin/requests', component: Requests },
  { path: '*', redirect: '/admin' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const vuetify = new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')