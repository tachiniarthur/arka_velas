import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/products', component: ProductsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
