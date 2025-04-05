<template>
  <section class="w-full">
    <div class="flex flex-col p-10">
      <h2 class="text-3xl mb-6 text-gray-800 uppercase border-b-2 pb-2">Produtos</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <router-link
          class="relative hover:scale-105 duration-300 overflow-hidden"
          v-for="vela in velas"
          :key="vela.id"
          :to="`/vela/${vela.id}`"
        >
          <img class="w-full h-full object-cover" :src="vela.img" alt="Frutas vermelhas" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <h3 class="absolute left-6 bottom-6 text-white text-2xl font-light uppercase">{{ vela.name }}</h3>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const velas = [
  {
    id: 1,
    name: 'Frutas vermelhas',
    description: 'testetest',
    img: 'img1.png',
    price: 10.0,
    category: 'velas',
  },
  {
    id: 2,
    name: 'Cherry Blossom',
    description: 'testetest',
    img: 'img2.png',
    price: 10.0,
    category: 'velas',
  },
  {
    id: 3,
    name: 'Flor de figo',
    description: 'testetest',
    img: 'img3.png',
    price: 10.0,
    category: 'velas',
  },
];
</script>
