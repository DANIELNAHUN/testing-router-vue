import Vue from 'vue'
import VueRouter from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
//import PublicLayout from '../layouts/PublicLayout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'unsplash',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UnsplashView.vue'),
    meta: {
      layout: DefaultLayout
    }
  },

  {
    path: '/cardquestion',
    name: 'cardquestion',
    component: () => import('../views/CardQuestionView.vue'),
    meta: {
      layout: DefaultLayout
    }
  },
  {
    path: '/chronometer',
    name: 'chronometer',
    component: () => import('../views/ChronometerView.vue'),
    meta: {
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
