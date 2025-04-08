<script setup>
import { useCartStore } from '@/stores/useCartStore';

const cart = useCartStore();

function comprar() {
  const vela = {
    id: 'frutas_vermelhas',
    name: 'Frutas vermelhas',
    price: 'R$ 48,90',
    img: '/img1.png',
  };

  cart.addToCart(vela);
}
</script>

<template>
  <section class="flex gap-x-6">
    <img :src="'/img1.png'" class="w-1/2 h-auto" alt="Imagem do produto" />
    <div class="w-1/2 flex flex-col gap-y-4">
      <h2 class="text-3xl">Nome Produto</h2>
      <span class="text-md text-gray-500 font-light">
        Uma vela aromática tropical com cheiro de frutas frescas e deliciosas
      </span>
      <span class="text-md text-gray-500">Valor</span>
      <button
        @click="comprar"
        class="bg-[#3A4766] w-28 text-center text-white py-2 px-4 rounded-md hover:bg-[#414f70] transition duration-200 ease-in-out"
      >
        Comprar
      </button>
    </div>
  </section>
</template>
