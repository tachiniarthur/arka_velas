<script setup>
import { ref } from 'vue';

const velas = ref([
  {
    id: 'frutas_vermelhas',
    name: 'Frutas vermelhas',
    img: '/img1.png',
  },
  {
    id: 'cherry_blossom',
    name: 'Cherry Blossom',
    img: '/img2.png',
  },
  {
    id: 'flor_de_figo',
    name: 'Flor de figo',
    img: '/img3.png',
  },
]);
</script>

<template>
  <section class="w-full">
    <div class="flex justify-center items-center flex-col py-10">
      <h2 class="text-3xl mb-6 text-gray-800 uppercase">Produtos</h2>

      <div class="flex flex-col w-full md:hidden">
        <router-link
          v-for="vela in velas"
          :key="vela.id"
          :to="`/vela/${vela.id}`"
          class="h-48 w-full hover:scale-[1.02] duration-300 relative"
        >
          <img class="w-full h-full object-cover" :src="vela.img" :alt="vela.alt" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <h3 class="absolute left-6 bottom-6 text-white text-3xl font-light uppercase">{{ vela.name }}</h3>
        </router-link>
      </div>

      <div class="w-full hidden md:flex gap-4 px-4 h-[34rem]">
        <router-link
          v-if="velas[0]"
          :to="`/vela/${velas[0].id}`"
          class="w-2/3 h-full hover:scale-[1.02] duration-300 relative overflow-hidden"
        >
          <img class="w-full h-full object-cover" :src="velas[0].img" :alt="velas[0].alt" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <h3 class="absolute left-6 bottom-6 text-white text-3xl font-light uppercase">{{ velas[0].name }}</h3>
        </router-link>

        <div class="w-1/3 h-full flex flex-col gap-4">
          <router-link
            v-for="vela in velas.slice(1, 3)"
            :key="vela.id"
            :to="`/vela/${vela.id}`"
            class="h-1/2 relative hover:scale-[1.02] duration-300 overflow-hidden"
          >
            <img class="w-full h-full object-cover" :src="vela.img" :alt="vela.alt" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <h3 class="absolute left-6 bottom-6 text-white text-3xl font-light uppercase">{{ vela.name }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
