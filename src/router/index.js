import Vue from 'vue'
import VueRouter from 'vue-router'
import ListarUsuarios from '../components/ListarUsuarios';
import VerPerfil from '../components/VerPerfil';
import EditarUsuario from '../components/EditarUsuario';
import AdicionarUsuario from '../components/AdicionarUsuario';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: ListarUsuarios,

    },
  {
    path: '/verperfil/:id',
    name: 'verperfil',
    props: true,
    component: VerPerfil


  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: EditarUsuario,
    props:true
  },
  {
    path: '/adicionar',
    name: 'adicionar',
    component: AdicionarUsuario
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
