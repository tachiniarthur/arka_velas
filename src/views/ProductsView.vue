<template>
  <section class="w-full">
    <div class="flex flex-col p-10">
      <h2 class="text-3xl mb-6 font-bold border-b-2 pb-2 text-[#3A4766]">Produtos</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <router-link
          class="h-auto rounded-lg hover:scale-105 duration-300 bg-[#3A4766] p-4 flex flex-col items-center shadow-md"
          v-for="vela in velas"
          :key="vela.id"
          :to="`/vela/${vela.id}`"
        >
          <!-- <router-link :to="`/vela/${vela.id}`"> -->
          <img
            class="w-full h-full object-cover rounded-lg"
            :src="vela.img"
            alt="Frutas vermelhas"
          />
          <h3 class="mt-2 text-center text-lg text-[#EAE8DA]">{{ vela.name }}</h3>
          <p class="text-[12px] font-light text-center text-[#EAE8DA]">
            {{ vela.description }}
          </p>
          <!-- </router-link> -->
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
]
</script>
