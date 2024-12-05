import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'
import ipad from '../views/ipad.vue'
import iphone from '../views/iphone.vue'
import watch from '../views/watch.vue'
import mac from '../views/mac.vue'
import iphoneb from '../views/iphoneb.vue'
import locat from '../views/locat.vue'
import ipadb from '../views/ipadb.vue'
import watchb from '../views/watchb.vue'
import macb from '../views/macb.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/iphone',
    name: 'iphone',
    component: () => import('../views/iphone.vue')
  },
  {
    path: '/ipad',
    name: 'ipad',
    component: () => import('../views/ipad.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('../views/watch.vue')
  },
  {
    path: '/mac',
    name: 'mac',
    component: () => import('../views/mac.vue')
  },
  {
    path: '/iphoneb',
    name: 'iphoneb',
    component: () => import('../views/iphoneb.vue')
  },
  {
    path: '/locat',
    name: 'locat',
    component: () => import('../views/locat.vue')
  },
  {
    path: '/ipadb',
    name: 'ipadb',
    component: () => import('../views/ipadb.vue')
  },
  {
    path: '/watchb',
    name: 'watchb',
    component: () => import('../views/watchb.vue')
  },
  {
    path: '/macb',
    name: 'macb',
    component: () => import('../views/macb.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
