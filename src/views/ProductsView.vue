<template>
  <section class="w-full pb-24">
    <div class="flex flex-col px-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl mb-6 text-gray-800 uppercase">
          {{ titulo }}
        </h2>
        <div class="hidden md:flex items-center gap-x-2">
          <span class="text-gray-400 text-sm">Vista:</span>
          <button
            v-for="cols in [1, 2, 3]"
            :key="cols"
            class="cursor-pointer"
            :class="vista === cols ? 'text-black' : 'text-gray-400'"
            @click="toggleVista(cols)"
          >
            {{ cols }}
          </button>
        </div>
      </div>

      <div
        class="grid gap-6"
        :class="[
          `grid-cols-${vista}`,
          vista === 1 ? 'md:grid-cols-1' : vista === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3',
        ]"
      >
        <div v-for="produto in produtos" :key="produto.id" class="flex flex-col items-center">
          <router-link class="relative group w-full" :to="`${produto.url}`">
            <img class="w-full h-100 object-cover" :src="produto.img" :alt="produto.name" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div
              class="absolute bottom-0 w-full bg-black flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto"
            >
              <span class="text-xl py-2 text-white">Comprar</span>
            </div>
          </router-link>
          <h3 class="text-black text-2xl font-light uppercase mt-2">
            {{ produto.name }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watchEffect, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const vista = ref(3);
const isMobile = ref(false);

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

watchEffect(() => {
  if (isMobile.value) {
    vista.value = 1;
  }
});

const toggleVista = (cols) => {
  vista.value = cols;
};

const allProducts = {
  velas: [
    {
      id: 'frutas_vermelhas',
      name: 'Frutas vermelhas',
      img: '/vela-frutas-vermelhas.png',
      price: 'R$ 48,90',
      url: '/velas/aromaticas/vela/frutas_vermelhas',
    },
    {
      id: 'cherry_blossom',
      name: 'Cherry Blossom',
      img: '/vela-cherry.png',
      price: 'R$ 48,90',
      url: '/velas/aromaticas/vela/cherry_blossom',
    },
    {
      id: 'flor_de_figo',
      name: 'Flor de figo',
      img: '/vela-figo.png',
      price: 'R$ 48,90',
      url: '/velas/aromaticas/vela/flor_de_figo',
    },
    {
      id: 'lavanda',
      name: 'Lavanda',
      img: '/vela-lavanda.png',
      price: 'R$ 48,90',
      url: '/velas/aromaticas/vela/lavanda',
    },
    {
      id: 'baunilha',
      name: 'Baunilha',
      img: '/vela-baunilha.png',
      price: 'R$ 48,90',
      url: '/velas/aromaticas/vela/baunilha',
    },
  ],
  portaVelas: [
    {
      id: 'porta-vela-pequeno',
      name: 'Porta-Velas Pequeno',
      img: '/porta-vela-pequeno.png',
      price: 'R$ 05,00',
      url: '/decorativos/porta-velas/decorativo/porta-vela-pequeno',
    },
    {
      id: 'porta-vela-grande',
      name: 'Porta-Velas Grande',
      img: '/porta-vela-grande.png',
      price: 'R$ 09,90',
      url: '/decorativos/porta-velas/decorativo/porta-vela-grande',
    },
  ],
  decorativas: [
    {
      id: 'vela-soft-bubble',
      name: 'Vela Soft-Bubble',
      img: '/bubble-pequena-branca.png',
      price: 'R$ 10,00',
      url: '/velas/decorativas/vela/soft-bubble',
    },
    {
      id: 'vela-bubble',
      name: 'Vela Bubble',
      img: '/bubble-branca.png',
      price: 'R$ 18,00',
      url: '/velas/decorativas/vela/bubble',
    },
  ],
  primavera: [
    {
      id: 'cherry_blossom',
      name: 'Cherry Blossom',
      img: '/vela-cherry.png',
      price: 'R$ 48,90',
      url: '/estacoes/primavera/estacao/cherry_blossom',
    },
    {
      id: 'flor_de_figo',
      name: 'Flor de figo',
      img: '/vela-figo.png',
      price: 'R$ 48,90',
      url: '/estacoes/primavera/estacao/flor_de_figo',
    },
  ],
  verao: [
    {
      id: 'frutas_vermelhas',
      name: 'Frutas vermelhas',
      img: '/vela-frutas-vermelhas.png',
      price: 'R$ 48,90',
      url: '/estacoes/primavera/estacao/frutas_vermelhas',
    },
    {
      id: 'flor_de_figo',
      name: 'Flor de figo',
      img: '/vela-figo.png',
      price: 'R$ 48,90',
      url: '/estacoes/primavera/estacao/flor_de_figo',
    },
  ],
  outono: [
    {
      id: 'cherry_blossom',
      name: 'Cherry Blossom',
      img: '/vela-cherry.png',
      price: 'R$ 48,90',
      url: '/estacoes/primavera/estacao/cherry_blossom',
    },
    {
      id: 'lavanda',
      name: 'Lavanda',
      img: '/vela-lavanda.png',
      price: 'R$ 48,90',
      url: '/estacoes/primavera/estacao/lavanda',
    },
  ],
  inverno: [
    {
      id: 'lavanda',
      name: 'Lavanda',
      img: '/vela-lavanda.png',
      price: 'R$ 48,90',
      url: '/estacoes/primavera/estacao/lavanda',
    },
    {
      id: 'baunilha',
      name: 'Baunilha',
      img: '/vela-baunilha.png',
      price: 'R$ 48,90',
      url: '/estacoes/primavera/estacao/baunilha',
    },
  ],
  festivas: [
    {
      id: 'vela-coelinho',
      name: 'Vela Coelinho',
      img: '/vela-coelho.png',
      price: 'R$ 12,00',
      url: '/festivas/pascoa/festiva/coelinho',
    },
  ],
};

const produtosMap = {
  'porta-velas': allProducts.portaVelas,
  aromaticas: allProducts.velas,
  decorativas: allProducts.decorativas,
  primavera: allProducts.primavera,
  verao: allProducts.verao,
  outono: allProducts.outono,
  inverno: allProducts.inverno,
  festivas: allProducts.festivas,
};

const titulosMap = {
  'porta-velas': 'Porta-Velas',
  aromaticas: 'Velas Aromáticas',
  decorativas: 'Velas Decorativas',
  primavera: 'Velas de Primavera',
  verao: 'Velas de Verão',
  outono: 'Velas de Outono',
  inverno: 'Velas de Inverno',
  festivas: 'Velas Festivas',
};

const produtos = computed(() => {
  const categoria = Object.keys(produtosMap).find((key) => route.path.includes(key));
  return produtosMap[categoria] || allProducts.velas;
});

const titulo = computed(() => {
  const categoria = Object.keys(titulosMap).find((key) => route.path.includes(key));
  return titulosMap[categoria] || 'Velas';
});
</script>
