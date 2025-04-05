<script setup></script>

<template>
  <section class="w-full">
    <div class="flex justify-center items-center flex-col py-10">
      <h2 class="text-3xl mb-6 text-gray-800 uppercase">Produtos</h2>
      <div class="w-full flex gap-4 px-4 h-[34rem]">
        <div class="w-1/2 h-full hover:scale-105 duration-300 relative overflow-hidden">
          <img class="w-full h-full object-cover" :src="'img1.png'" alt="Frutas vermelhas" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <h3 class="absolute left-6 bottom-6 text-white text-3xl font-light uppercase">Frutas vermelhas</h3>
        </div>
        <div class="w-1/2 h-full flex flex-col gap-4">
          <div class="h-1/2 relative hover:scale-105 duration-300 overflow-hidden">
            <img class="w-full h-full object-cover" :src="'img2.png'" alt="Flor de figo" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <h3 class="absolute left-6 bottom-6 text-white text-3xl font-light uppercase">Flor de figo</h3>
          </div>
          <div class="h-1/2 relative hover:scale-105 duration-300 overflow-hidden">
            <img class="w-full h-full object-cover" :src="'img3.png'" alt="Cherry blossom" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <h3 class="absolute left-6 bottom-6 text-white text-3xl font-light uppercase">Cherry blossom</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
