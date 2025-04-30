<script setup>
import { ref, computed, watch } from 'vue';
import { useCartStore } from '@/stores/useCartStore';
import { useRoute } from 'vue-router';
import QuantitySelector from '@/components/QuantitySelector.vue';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/24/outline';

const route = useRoute();
const id = ref(route.params.id);

const produtos = ref([
  {
    id: 'frutas_vermelhas',
    name: 'Frutas vermelhas',
    description: 'Uma vela aromática maravilhosa',
    img: ['/vela-frutas-vermelhas.png', '/pote-vela-grande-mao.png'],
    price: 'R$ 48,90',
    url: '/velas/aromaticas/vela/frutas_vermelhas',
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
    img: ['/vela-cherry.png', '/pote-vela-grande-mao.png'],
    price: 'R$ 48,90',
    url: '/velas/aromaticas/vela/cherry_blossom',
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
    img: ['/vela-figo.png', '/pote-vela-grande-mao.png'],
    price: 'R$ 48,90',
    url: '/velas/aromaticas/vela/flor_de_figo',
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
  {
    id: 'lavanda',
    name: 'Lavanda',
    description: 'Uma vela aromática maravilhosa',
    img: ['/vela-lavanda.png', '/pote-vela-grande-mao.png'],
    price: 'R$ 48,90',
    url: '/velas/aromaticas/vela/lavanda',
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
  {
    id: 'baunilha',
    name: 'Baunilha',
    description: 'Uma vela aromática maravilhosa',
    img: ['/vela-baunilha.png', '/pote-vela-grande-mao.png'],
    price: 'R$ 48,90',
    url: '/velas/aromaticas/vela/baunilha',
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
  {
    id: 'porta-vela-pequeno',
    name: 'Porta-Vela Pequeno',
    description: 'Uma vela aromática maravilhosa',
    img: ['/porta-vela-pequeno.png', '/porta-vela-pequeno-mao.png'],
    price: 'R$ 05,00',
    url: '/decorativos/porta-velas/decorativo/porta-vela-pequeno',
  },
  {
    id: 'porta-vela-grande',
    name: 'Porta-Vela Grande',
    description: 'Uma vela aromática maravilhosa',
    img: ['/porta-vela-grande.png', '/porta-vela-grande-mao.png'],
    price: 'R$ 09,90',
    url: '/decorativos/porta-velas/decorativo/porta-vela-grande',
  },
  {
    id: 'soft-bubble',
    name: 'Soft Bubble',
    description: 'Uma vela aromática maravilhosa',
    img: ['/bubble-pequena-branca.png', '/bubble-pequena-mao.png'],
    price: 'R$ 10,00',
    url: '/velas/decorativas/vela/soft-bubble',
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
    id: 'bubble',
    name: 'Bubble',
    description: 'Uma vela aromática maravilhosa',
    img: ['/bubble-branca.png', '/bubble-mao.png'],
    price: 'R$ 18,00',
    url: '/velas/decorativas/vela/bubble',
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
    id: 'coelinho',
    name: 'Coelinho',
    description: 'Uma vela aromática maravilhosa',
    img: ['/vela-coelho.png', '/vela-coelho2.png'],
    price: 'R$ 12,00',
    url: '/festivas/pascoa/festiva/coelinho',
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
]);

watch(
  () => route.params.id,
  (newId) => {
    id.value = newId;
  }
);

const produto = computed(() => produtos.value.find((item) => item.id === id.value));

const selectedQty = ref(1);

const cart = useCartStore();

function comprar() {
  if (!produto.value) return;

  const produtoCart = {
    ...produto.value,
    quantity: selectedQty.value,
  };

  cart.addToCart(produtoCart);
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

const currentImgIndex = ref(0);

function nextImage() {
  if (produto.value && currentImgIndex.value < produto.value.img.length - 1) {
    currentImgIndex.value++;
  } else {
    currentImgIndex.value = 0;
  }
}

function prevImage() {
  if (produto.value && currentImgIndex.value > 0) {
    currentImgIndex.value--;
  } else if (produto.value) {
    currentImgIndex.value = produto.value.img.length - 1;
  }
}
</script>

<template>
  <section class="flex flex-col md:flex-row w-full pb-24">
    <div class="w-full md:w-1/2 relative">
      <img :src="produto.img[currentImgIndex]" class="w-full h-[40rem] object-cover" alt="Imagem do produto" />
      <button
        @click="prevImage"
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        ‹
      </button>
      <button
        @click="nextImage"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        ›
      </button>
      <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        <span
          v-for="(img, i) in produto.img"
          :key="i"
          class="w-2 h-2 rounded-full"
          :class="i === currentImgIndex ? 'bg-[#3A4766]' : 'bg-gray-300'"
        ></span>
      </div>
    </div>
    <div class="w-full md:w-1/2 flex flex-col gap-y-4 py-4 md:py-0 px-4 md:px-6">
      <h2 class="text-2xl md:text-3xl uppercase">{{ produto.name }}</h2>
      <span class="text-xl md:text-2xl uppercase">{{ produto.price }}</span>
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
        {{ produto.description }}
      </span>

      <hr class="text-gray-400" />

      <div class="overflow-hidden" v-if="produto.notasAromaticas">
        <button @click="toggleAccordion" class="w-full flex justify-between items-center font-medium px-2">
          <span class="uppercase font-light">Notas aromáticas</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!isOpen" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-if="isOpen" class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>

        <div v-show="isOpen" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="nota in produto.notasAromaticas" :key="nota">{{ nota }}</li>
          </ul>
        </div>
      </div>

      <hr class="text-gray-400" v-if="produto.caracteristicas" />

      <div class="overflow-hidden" v-if="produto.caracteristicas">
        <button @click="toggleAccordion2" class="w-full flex justify-between items-center font-medium px-2">
          <span class="uppercase font-light">Características</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!isOpen2" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-if="isOpen2" class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>

        <div v-show="isOpen2" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="caracteristica in produto.caracteristicas" :key="caracteristica">{{ caracteristica }}</li>
          </ul>
        </div>
      </div>

      <hr class="text-gray-400" v-if="produto.composicao" />

      <div class="overflow-hidden" v-if="produto.composicao">
        <button @click="toggleAccordion3" class="w-full flex justify-between items-center font-medium px-2">
          <span class="uppercase font-light">Composição</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!isOpen3" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-if="isOpen3" class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>

        <div v-show="isOpen3" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="componente in produto.composicao" :key="componente">{{ componente }}</li>
          </ul>
        </div>
      </div>

      <hr class="text-gray-400" v-if="produto.cuidados" />

      <div class="overflow-hidden" v-if="produto.cuidados">
        <button @click="toggleAccordion4" class="w-full flex justify-between items-center font-medium px-2">
          <span class="uppercase font-light">Cuidados e instruções</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!isOpen4" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-if="isOpen4" class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>

        <div v-show="isOpen4" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="cuidado in produto.cuidados" :key="cuidado">{{ cuidado }}</li>
          </ul>
        </div>
      </div>

      <hr class="text-gray-400" v-if="produto.beneficiosAromaticos" />

      <div class="overflow-hidden" v-if="produto.beneficiosAromaticos">
        <button @click="toggleAccordion5" class="w-full flex justify-between items-center font-medium px-2">
          <span class="uppercase font-light">Benefícios aromáticos</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!isOpen5" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-if="isOpen5" class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>

        <div v-show="isOpen5" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="beneficio in produto.beneficiosAromaticos" :key="beneficio">{{ beneficio }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
