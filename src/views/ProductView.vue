<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/useCartStore';
import { useRoute } from 'vue-router';
import QuantitySelector from '@/components/QuantitySelector.vue';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/24/outline';

const route = useRoute();
const id = route.params.id;

const velas = ref([
  {
    id: 'frutas_vermelhas',
    name: 'Frutas vermelhas',
    description: 'Uma vela aromática maravilhosa',
    img: '/img1.png',
    price: 'R$ 48,90',
    notasAromaticas: ['Notas de frutas vermelhas frescas', 'Toques de baunilha', 'Aroma doce e acolhedor'],
    caracteristicas: [
      'Feita com cera de soja 100% natural',
      'Pavio de algodão ecológico',
      'Livre de toxinas e parabenos',
    ],
    composicao: ['Cera de soja 100% natural', 'Pavio de algodão', 'Óleos essenciais de alta qualidade'],
    cuidados: [
      'Mantenha a vela longe de materiais inflamáveis.',
      'Corte o pavio para 0,5 cm antes de cada uso.',
      'Não deixe a vela acesa sem supervisão.',
    ],
    beneficiosAromaticos: [
      'Relaxamento e alívio do estresse com notas de lavanda.',
      'Energia e foco com notas cítricas.',
      'Ambiente acolhedor com notas amadeiradas.',
    ],
  },
  {
    id: 'cherry_blossom',
    name: 'Cherry Blossom',
    description: 'Uma vela aromática maravilhosa',
    img: '/img2.png',
    price: 'R$ 48,90',
    notasAromaticas: ['Flores de cerejeira delicadas', 'Toques de jasmim', 'Aroma floral e suave'],
    caracteristicas: [
      'Feita com cera de soja 100% natural',
      'Pavio de algodão ecológico',
      'Livre de toxinas e parabenos',
    ],
    composicao: ['Cera de soja 100% natural', 'Pavio de algodão', 'Óleos essenciais de alta qualidade'],
    cuidados: [
      'Mantenha a vela longe de materiais inflamáveis.',
      'Corte o pavio para 0,5 cm antes de cada uso.',
      'Não deixe a vela acesa sem supervisão.',
    ],
    beneficiosAromaticos: [
      'Relaxamento e alívio do estresse com notas florais.',
      'Sensação de frescor e tranquilidade.',
      'Ambiente delicado e acolhedor.',
    ],
  },
  {
    id: 'flor_de_figo',
    name: 'Flor de figo',
    description: 'Uma vela aromática maravilhosa',
    img: '/img3.png',
    price: 'R$ 48,90',
    notasAromaticas: ['Notas de figo fresco', 'Toques de madeira e musgo', 'Aroma sofisticado e terroso'],
    caracteristicas: [
      'Feita com cera de soja 100% natural',
      'Pavio de algodão ecológico',
      'Livre de toxinas e parabenos',
    ],
    composicao: ['Cera de soja 100% natural', 'Pavio de algodão', 'Óleos essenciais de alta qualidade'],
    cuidados: [
      'Mantenha a vela longe de materiais inflamáveis.',
      'Corte o pavio para 0,5 cm antes de cada uso.',
      'Não deixe a vela acesa sem supervisão.',
    ],
    beneficiosAromaticos: [
      'Sensação de conexão com a natureza.',
      'Aroma calmante e sofisticado.',
      'Ambiente elegante e relaxante.',
    ],
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

const isOpen = ref(false);
const isOpen2 = ref(false);
const isOpen3 = ref(false);
const isOpen4 = ref(false);
const isOpen5 = ref(false);

function toggleAccordion() {
  isOpen.value = !isOpen.value;
}

function toggleAccordion2() {
  isOpen2.value = !isOpen2.value;
}

function toggleAccordion3() {
  isOpen3.value = !isOpen3.value;
}

function toggleAccordion4() {
  isOpen4.value = !isOpen4.value;
}

function toggleAccordion5() {
  isOpen5.value = !isOpen5.value;
}
</script>

<template>
  <section class="flex flex-col md:flex-row w-full pb-24">
    <img :src="vela.img" class="w-full md:w-1/2 h-100 object-cover" alt="Imagem do produto" />
    <div class="w-full md:w-1/2 flex flex-col gap-y-4 py-4 md:py-0 px-4 md:px-6">
      <h2 class="text-2xl md:text-3xl uppercase">{{ vela.name }}</h2>
      <span class="text-xl md:text-2xl uppercase">{{ vela.price }}</span>
      <div class="flex items-center w-full space-x-4">
        <QuantitySelector v-model="selectedQty" :min="1" :max="10" />
        <button
          @click="comprar"
          class="bg-[#3A4766] w-full text-center text-white py-2 px-4 rounded-md hover:bg-[#414f70] transition duration-200 ease-in-out cursor-pointer"
        >
          Comprar
        </button>
      </div>
      <span class="text-md text-gray-500 font-light">
        {{ vela.description }}
      </span>

      <hr class="text-gray-400" />

      <div class="overflow-hidden">
        <button @click="toggleAccordion" class="w-full flex justify-between items-center font-medium px-2">
          <span class="uppercase font-light">Notas aromáticas</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!isOpen" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-if="isOpen" class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>

        <div v-show="isOpen" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="nota in vela.notasAromaticas" :key="nota">{{ nota }}</li>
          </ul>
        </div>
      </div>

      <hr class="text-gray-400" />

      <div class="overflow-hidden">
        <button @click="toggleAccordion2" class="w-full flex justify-between items-center font-medium px-2">
          <span class="uppercase font-light">Características</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!isOpen2" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-if="isOpen2" class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>

        <div v-show="isOpen2" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="caracteristica in vela.caracteristicas" :key="caracteristica">{{ caracteristica }}</li>
          </ul>
        </div>
      </div>

      <hr class="text-gray-400" />

      <div class="overflow-hidden">
        <button @click="toggleAccordion3" class="w-full flex justify-between items-center font-medium px-2">
          <span class="uppercase font-light">Composição</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!isOpen3" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-if="isOpen3" class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>

        <div v-show="isOpen3" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="componente in vela.composicao" :key="componente">{{ componente }}</li>
          </ul>
        </div>
      </div>

      <hr class="text-gray-400" />

      <div class="overflow-hidden">
        <button @click="toggleAccordion4" class="w-full flex justify-between items-center font-medium px-2">
          <span class="uppercase font-light">Cuidados e instruções</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!isOpen4" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-if="isOpen4" class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>

        <div v-show="isOpen4" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="cuidado in vela.cuidados" :key="cuidado">{{ cuidado }}</li>
          </ul>
        </div>
      </div>

      <hr class="text-gray-400" />

      <div class="overflow-hidden">
        <button @click="toggleAccordion5" class="w-full flex justify-between items-center font-medium px-2">
          <span class="uppercase font-light">Benefícios aromáticos</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!isOpen5" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-if="isOpen5" class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>

        <div v-show="isOpen5" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="beneficio in vela.beneficiosAromaticos" :key="beneficio">{{ beneficio }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
