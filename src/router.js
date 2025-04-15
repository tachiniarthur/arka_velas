import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductsView from '@/views/ProductsView.vue';
import ProductView from '@/views/ProductView.vue';
import FinalizePurchaseView from './views/FinalizePurchaseView.vue';
import FAQView from './views/FAQView.vue';
import TermosDeUsoView from './views/TermosDeUsoView.vue';
import TrocasDevolucoesView from './views/TrocasDevolucoesView.vue';
import PoliticaPrivacidadeView from './views/PoliticaPrivacidadeView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/velas', component: ProductsView },
  { path: '/vela/:id', component: ProductView, props: true },
  { path: '/finalizar-compra', component: FinalizePurchaseView },
  { path: '/termos-de-uso', component: TermosDeUsoView },
  { path: '/trocas-e-devolucoes', component: TrocasDevolucoesView },
  { path: '/politicas-de-privacidade', component: PoliticaPrivacidadeView },
  { path: '/faq', component: FAQView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
