import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HelloWorld
  },
  {
    path: '/adicionar',
    name: 'adicionar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AdicionarUsuario.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
