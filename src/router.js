import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductsView from '@/views/ProductsView.vue';
import ProductView from '@/views/ProductView.vue';
import FinalizePurchaseView from './views/FinalizePurchaseView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/velas', component: ProductsView },
  { path: '/vela/:id', component: ProductView, props: true },
  { path: '/finalizar-compra', component: FinalizePurchaseView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
