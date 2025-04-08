<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/useCartStore';
import { useRoute } from 'vue-router';
import QuantitySelector from '@/components/QuantitySelector.vue';

const route = useRoute();
const id = route.params.id;

const velas = ref([
  {
    id: 'frutas_vermelhas',
    name: 'Frutas vermelhas',
    description: 'Uma vela aromática maravilhosa',
    img: '/img1.png',
    price: 'R$ 48,90',
  },
  {
    id: 'cherry_blossom',
    name: 'Cherry Blossom',
    description: 'Uma vela aromática maravilhosa',
    img: '/img2.png',
    price: 'R$ 48,90',
  },
  {
    id: 'flor_de_figo',
    name: 'Flor de figo',
    description: 'Uma vela aromática maravilhosa',
    img: '/img3.png',
    price: 'R$ 48,90',
  },
]);

const vela = computed(() => velas.value.find((item) => item.id === id));

const selectedQty = ref(1);

const cart = useCartStore();

function comprar() {
  if (!vela.value) return;

  const velaCart = {
    ...vela.value,
    quantity: selectedQty.value,
  };

  cart.addToCart(velaCart);
}
</script>

<template>
  <section class="flex gap-x-6">
    <img :src="vela.img" class="w-1/2 h-auto" alt="Imagem do produto" />
    <div class="w-1/2 flex flex-col gap-y-4">
      <h2 class="text-3xl">{{ vela.name }}</h2>
      <span class="text-md text-gray-500 font-light">
        {{ vela.description }}
      </span>
      <span class="text-md text-gray-500">{{ vela.price }}</span>
      <QuantitySelector v-model="selectedQty" :min="1" :max="10" />
      <button
        @click="comprar"
        class="bg-[#3A4766] w-28 text-center text-white py-2 px-4 rounded-md hover:bg-[#414f70] transition duration-200 ease-in-out"
      >
        Comprar
      </button>
    </div>
  </section>
</template>
