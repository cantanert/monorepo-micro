import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '../components/test.vue';

Vue.use(VueRouter)

export const routes = [
  {
    path: '/urun-yonetimi',
    name: 'Home',
    component: Test,
    children: [
      {
        path: '/',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
