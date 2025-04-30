import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductsView from '@/views/ProductsView.vue';
import ProductView from '@/views/ProductView.vue';
import FinalizePurchaseView from './views/FinalizePurchaseView.vue';
import FAQView from './views/FAQView.vue';
import TermosDeUsoView from './views/TermosDeUsoView.vue';
import TrocasDevolucoesView from './views/TrocasDevolucoesView.vue';
import PoliticaPrivacidadeView from './views/PoliticaPrivacidadeView.vue';
import AboutView from './views/AboutView.vue';

const routes = [
  { path: '/', component: HomeView },

  { path: '/velas/aromaticas', component: ProductsView },
  { path: '/velas/decorativas', component: ProductsView },
  { path: '/decorativos/porta-velas', component: ProductsView },

  { path: '/velas/aromaticas/vela/:id', component: ProductView, props: true },
  { path: '/velas/decorativas/vela/:id', component: ProductView, props: true },
  { path: '/decorativos/porta-velas/decorativo/:id', component: ProductView, props: true },

  { path: '/festivas/pascoa', component: ProductsView },

  { path: '/estacoes/primavera', component: ProductsView },
  { path: '/estacoes/verao', component: ProductsView },
  { path: '/estacoes/outono', component: ProductsView },
  { path: '/estacoes/inverno', component: ProductsView },

  { path: '/festivas/pascoa/festiva/:id', component: ProductView },

  { path: '/estacoes/primavera/estacao/:id', component: ProductView },
  { path: '/estacoes/verao/estacao/:id', component: ProductView },
  { path: '/estacoes/outono/estacao/:id', component: ProductView },
  { path: '/estacoes/inverno/estacao/:id', component: ProductView },

  { path: '/finalizar-compra', component: FinalizePurchaseView },

  { path: '/sobre', component: AboutView },

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
