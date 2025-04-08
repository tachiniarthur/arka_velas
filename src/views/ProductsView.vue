<template>
  <section class="w-full">
    <div class="flex flex-col px-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl mb-6 text-gray-800 uppercase">Velas</h2>
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
        <div v-for="vela in velas" :key="vela.id" class="flex flex-col items-center">
          <router-link class="relative group w-full" :to="`/vela/${vela.id}`">
            <img class="w-full h-full object-cover" :src="vela.img" :alt="vela.name" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div
              class="absolute bottom-0 w-full bg-black flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto"
            >
              <span class="text-xl py-2 text-white">Comprar</span>
            </div>
          </router-link>
          <h3 class="text-black text-2xl font-light uppercase mt-2">
            {{ vela.name }}
          </h3>
          <span class="text-lg text-black font-light uppercase">
            {{ vela.price }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';

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

const velas = ref([
  {
    id: 'frutas_vermelhas',
    name: 'Frutas vermelhas',
    img: '/img1.png',
    price: 'R$ 48,90',
  },
  {
    id: 'cherry_blossom',
    name: 'Cherry Blossom',
    img: '/img2.png',
    price: 'R$ 48,90',
  },
  {
    id: 'flor_de_figo',
    name: 'Flor de figo',
    img: '/img3.png',
    price: 'R$ 48,90',
  },
]);
</script>
