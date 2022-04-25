import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Reporting from '../views/Reporting.vue'
import AboutView from '../views/AboutView.vue'
import Secret from '../views/Secret.vue'
import Welcome from '../views/Welcome.vue'
import AppSettings from '../views/AppSettings.vue'


const routes = [
  {
    path: '/oldhomeview',
    name: 'oldhomeview',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/reporting',
    name: 'reporting',
    component: Reporting
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/secret',
    name: 'secret',
    component: Secret
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/Welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/appsettings',
    name: 'appsettings',
    component: AppSettings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
