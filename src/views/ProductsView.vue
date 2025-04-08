<template>
  <section class="w-full">
    <div class="flex flex-col px-10">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl mb-6 text-gray-800 uppercase">Velas</h2>
        <div class="hiddden md:flex md:items-center md:justify-between md:gap-x-2">
          <span class="text-gray-400 text-sm">Vista:</span>
          <button class="cursor-pointer" :class="vista == 1 ? 'text-black' : 'text-gray-400'" @click="toggleVista(1)">
            1
          </button>
          <button class="cursor-pointer" :class="vista == 2 ? 'text-black' : 'text-gray-400'" @click="toggleVista(2)">
            2
          </button>
          <button class="cursor-pointer" :class="vista == 3 ? 'text-black' : 'text-gray-400'" @click="toggleVista(3)">
            3
          </button>
        </div>
      </div>
      <div class="grid gap-6" :class="'grid-cols-' + vista">
        <div class="flex flex-col items-center" v-for="vela in velas" :key="vela.id">
          <router-link class="relative group" :to="`/vela/${vela.id}`">
            <img class="w-full h-full object-cover" :src="vela.img" alt="Frutas vermelhas" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div
              class="absolute bottom-0 w-full bg-black h-auto justify-center items-center opacity-0 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto flex"
            >
              <span class="text-xl py-2 text-white">Comprar</span>
            </div>
          </router-link>
          <h3 class="text-black text-2xl font-light uppercase mt-2">{{ vela.name }}</h3>
          <span class="text-lg text-black font-light uppercase">
            {{ vela.price }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches;
});

const vista = ref(3);

if (isMobile.value) {
  vista.value = 1;
}

function toggleVista(numCols) {
  vista.value = numCols;
}

const velas = [
  {
    id: 'frutas_vermelhas',
    name: 'Frutas vermelhas',
    img: 'img1.png',
    price: 'R$ 48,90',
  },
  {
    id: 'cherry_blossom',
    name: 'Cherry Blossom',
    img: 'img2.png',
    price: 'R$ 48,90',
  },
  {
    id: 'flor_de_figo',
    name: 'Flor de figo',
    img: 'img3.png',
    price: 'R$ 48,90',
  },
];
</script>
