import { createRouter, createWebHashHistory } from 'vue-router'
import Carta from '../views/Carta.vue'
import Formulario from '../views/Formulario.vue'
import Inventario from '../views/Inventario.vue'
import Pedido from '../views/Pedido.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Carta
  },
  {
    path: '/inventario',
    name: 'inventario',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Inventario
  },
  {
    path: '/formulario',
    name: 'formulario',
    component: Formulario
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: Pedido
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
