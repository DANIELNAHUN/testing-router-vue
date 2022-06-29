import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import PublicLayout from '../layouts/PublicLayout.vue'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta:{
      layout: PublicLayout
    }
  },

  {
    path: '/contact',
    name: 'contact',
    component:() => import('../views/ContactView.vue'),
    meta:{
      layout: DefaultLayout
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
