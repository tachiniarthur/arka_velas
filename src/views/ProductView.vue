<script setup>
import { ref, computed, watch } from 'vue';
import { useCartStore } from '@/stores/useCartStore';
import { useRoute } from 'vue-router';
import QuantitySelector from '@/components/QuantitySelector.vue';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/24/outline';

const route = useRoute();
const id = ref(route.params.id);
const selectedVolume = ref('500ml');
const withDoTERRA = ref(false);

const volumeOptions = [
  { label: '500ml', value: '500ml' },
  { label: '250ml', value: '250ml' },
];

const aromas = ref([
  { aroma: 'Frutas Vermelhas', doTERRA: true },
  { aroma: 'Cherry Blossom', doTERRA: false },
  { aroma: 'Flor de Figo', doTERRA: false },
  { aroma: 'Lavanda', doTERRA: true },
  { aroma: 'Baunilha', doTERRA: false },
]);

const selectedAroma = ref(aromas.value[0]);

watch(selectedAroma, (newValue) => {
  if (!newValue.doTERRA) {
    withDoTERRA.value = false;
  }
});

watch(
  () => route.params.id,
  (newId) => {
    id.value = newId;
  }
);

const produtos = ref([
  {
    id: 'frutas_vermelhas',
    name: 'Frutas vermelhas',
    description:
      'Um aroma envolvente e marcante, com notas doces e vibrantes que remetem à mistura de frutas vermelhas frescas. Ideal para criar um ambiente acolhedor e cheio de personalidade. Feita artesanalmente em pote de gesso com um pavio maravilhoso de madeira, que proporciona uma queima elegante e um leve crepitar encantador. Disponível também na versão com óleo essencial da doTERRA, para uma experiência ainda mais intensa e terapêutica.',
    img: ['/vela-frutas-vermelhas.png', '/pote-vela-grande-mao.png', '/pote-vela-pequena-mao.png'],
    price: 'R$ 55,00',
    url: '/velas/aromaticas/vela/frutas_vermelhas',
    otherVolume: true,
    doTERRA: true,
    notasAromaticas: [
      'Notas de saída: Morango, Laranja, Framboesa, Uva, Melão',
      'Notas de corpo: Flor de Laranjeira, Frésia, Cassis',
      'Notas de fundo: Baunilha, Musk, Caramelo',
    ],
    caracteristicas: ['Feita com cera de soja 100% natural', 'Pavio de madeira', 'Livre de toxinas e parabenos'],
    composicao: ['Cera de soja 100% natural', 'Pavio de madeira', 'Essências de alta qualidade'],
    cuidados: [
      'Mantenha a vela longe de materiais inflamáveis.',
      'Corte o pavio para 0,5 cm antes de cada uso.',
      'Não deixe a vela acesa sem supervisão.',
    ],
  },
  {
    id: 'cherry_blossom',
    name: 'Cherry Blossom',
    description:
      'Inspirada na delicadeza das flores de cerejeira, esta vela traz um aroma suave, romântico e acolhedor, ideal para momentos de tranquilidade e bem-estar. Acompanha um pote feito à mão em gesso e um pavio maravilhoso de madeira, que crepita suavemente ao queimar e intensifica a experiência sensorial.',
    img: ['/vela-cherry.png', '/pote-vela-grande-mao.png', '/pote-vela-pequena-mao.png'],
    price: 'R$ 55,00',
    url: '/velas/aromaticas/vela/cherry_blossom',
    otherVolume: true,
    notasAromaticas: [
      'Notas de saída: Pera, Maçã, Melão, Morango',
      'Notas de corpo: Rosa, Cassis, Ameixa, Jasmim, Violeta, Lírio do Vale',
      'Notas de fundo: Musk, Sândalo, Baunilha',
    ],
    caracteristicas: ['Feita com cera de soja 100% natural', 'Pavio de madeira', 'Livre de toxinas e parabenos'],
    composicao: ['Cera de soja 100% natural', 'Pavio de madeira', 'Essências de alta qualidade'],
    cuidados: [
      'Mantenha a vela longe de materiais inflamáveis.',
      'Corte o pavio para 0,5 cm antes de cada uso.',
      'Não deixe a vela acesa sem supervisão.',
    ],
  },
  {
    id: 'flor_de_figo',
    name: 'Flor de figo',
    description:
      'Sofisticada e única, a Flor de Figo traz um perfume floral adocicado com um leve toque verde. Uma fragrância refinada que transforma qualquer espaço em um refúgio sensorial. Produzida em um pote artesanal de gesso com um pavio maravilhoso de madeira, que além de perfumar, proporciona um toque sonoro relaxante.',
    img: ['/vela-figo.png', '/pote-vela-grande-mao.png', '/pote-vela-pequena-mao.png'],
    price: 'R$ 55,00',
    url: '/velas/aromaticas/vela/flor_de_figo',
    otherVolume: true,
    notasAromaticas: [
      'Notas de saída: Cassis, Toranja, Acorde verde',
      'Notas de corpo: Maça, folhas de figo',
      'Notas de fundo: Sandalo, Baunilha, Caramelo',
    ],
    caracteristicas: ['Feita com cera de soja 100% natural', 'Pavio de madeira', 'Livre de toxinas e parabenos'],
    composicao: ['Cera de soja 100% natural', 'Pavio de madeira', 'Essências de alta qualidade'],
    cuidados: [
      'Mantenha a vela longe de materiais inflamáveis.',
      'Corte o pavio para 0,5 cm antes de cada uso.',
      'Não deixe a vela acesa sem supervisão.',
    ],
  },
  {
    id: 'lavanda',
    name: 'Lavanda',
    description:
      'Clássica da aromaterapia, a lavanda oferece um perfume herbal e calmante, perfeito para relaxar, meditar ou desacelerar no fim do dia. Em pote artesanal de gesso, com um pavio maravilhoso de madeira que transforma o ato de acender uma vela em um verdadeiro ritual de bem-estar.',
    img: ['/vela-lavanda.png', '/pote-vela-grande-mao.png', '/pote-vela-pequena-mao.png'],
    price: 'R$ 55,00',
    url: '/velas/aromaticas/vela/lavanda',
    otherVolume: true,
    doTERRA: true,
    notasAromaticas: [
      'Notas de saída: Lima, lavanda e bergamota',
      'Notas de corpo: Rosa, cedro, jasmin e patchouli',
      'Notas de fundo: Musk, âmbar, baunilha e fava tonka',
    ],
    caracteristicas: ['Feita com cera de soja 100% natural', 'Pavio de madeira', 'Livre de toxinas e parabenos'],
    composicao: ['Cera de soja 100% natural', 'Pavio de madeira', 'Essências de alta qualidade'],
    cuidados: [
      'Mantenha a vela longe de materiais inflamáveis.',
      'Corte o pavio para 0,5 cm antes de cada uso.',
      'Não deixe a vela acesa sem supervisão.',
    ],
  },
  {
    id: 'baunilha',
    name: 'Baunilha',
    description:
      'Adoce o ambiente com o calor envolvente da baunilha. Seu aroma cremoso desperta memórias afetivas e sensações de aconchego. Feita em um elegante pote de gesso e acompanhada de um pavio maravilhoso de madeira, que proporciona uma queima charmosa e reconfortante.',
    img: ['/vela-baunilha.png', '/pote-vela-grande-mao.png', '/pote-vela-pequena-mao.png'],
    price: 'R$ 55,00',
    url: '/velas/aromaticas/vela/baunilha',
    otherVolume: true,
    notasAromaticas: [
      'Notas de saída: Anis, Pessêgo',
      'Notas de corpo: Coco, Sândalo',
      'Notas de fundo: Musk, Baunilha, Caramelo',
    ],
    caracteristicas: ['Feita com cera de soja 100% natural', 'Pavio de madeira', 'Livre de toxinas e parabenos'],
    composicao: ['Cera de soja 100% natural', 'Pavio de madeira', 'Essências de alta qualidade'],
    cuidados: [
      'Mantenha a vela longe de materiais inflamáveis.',
      'Corte o pavio para 0,5 cm antes de cada uso.',
      'Não deixe a vela acesa sem supervisão.',
    ],
  },
  {
    id: 'porta-vela-pequeno',
    name: 'Porta-Vela Pequeno',
    description:
      'Delicado e funcional, o porta-vela pequeno é feito à mão com gesso refinado, sendo perfeito para velas menores ou para apoiar pequenos objetos como anéis. Seu visual minimalista e acabamento artesanal tornam qualquer cantinho mais especial.',
    img: ['/porta-vela-pequeno.png', '/porta-vela-pequeno-mao.png'],
    price: 'R$ 05,00',
    url: '/decorativos/porta-velas/decorativo/porta-vela-pequeno',
  },
  {
    id: 'porta-vela-grande',
    name: 'Porta-Vela Grande',
    description:
      'Com design sofisticado e presença marcante, o porta-vela grande é feito artesanalmente em gesso de alta qualidade. Ideal para apoiar velas maiores ou compor a decoração com estilo e equilíbrio. Seu acabamento delicado e textura suave fazem dele uma peça versátil e encantadora.',
    img: ['/porta-vela-grande.png', '/porta-vela-grande-mao.png'],
    price: 'R$ 09,90',
    url: '/decorativos/porta-velas/decorativo/porta-vela-grande',
  },
  {
    id: 'soft-bubble',
    name: 'Soft Bubble',
    description:
      'Pequena no tamanho, mas cheia de charme. A mini-bubble é ideal para montar kits especiais ou perfumar cantinhos com delicadeza e estilo. Feita com parafina pura, pavio central de algodão e enriquecida com as essências dos nossos aromas — disponível em todas as fragrâncias da Arka Velas.',
    img: ['/bubble-pequena-branca.png', '/bubble-pequena-mao.png'],
    price: 'R$ 10,00',
    url: '/velas/decorativas/vela/soft-bubble',
    selectAroma: true,
    caracteristicas: ['Feita com parafina pura', 'Pavio de algodão ecológico'],
    composicao: ['parafina pura', 'Pavio de algodão ecológico', 'Essências de alta qualidade'],
    cuidados: [
      'Mantenha a vela longe de materiais inflamáveis.',
      'Corte o pavio para 0,5 cm antes de cada uso.',
      'Não deixe a vela acesa sem supervisão.',
      'Coloque a vela em uma superfície resistente ao calor.',
    ],
  },
  {
    id: 'bubble',
    name: 'Bubble',
    description:
      'Um clássico moderno com design escultural e presença marcante. A vela bubble é perfeita para quem busca um toque de arte e sofisticação na decoração. Produzida com parafina de alta qualidade e dois pavios de algodão, recebe as essências exclusivas da Arka Velas e está disponível em todos os nossos aromas.',
    img: ['/bubble-branca.png', '/bubble-mao.png'],
    price: 'R$ 18,00',
    url: '/velas/decorativas/vela/bubble',
    selectAroma: true,
    caracteristicas: ['Feita com parafina pura', 'Pavio de algodão ecológico'],
    composicao: ['parafina pura', 'Pavio de algodão ecológico', 'Essências de alta qualidade'],
    cuidados: [
      'Mantenha a vela longe de materiais inflamáveis.',
      'Corte o pavio para 0,5 cm antes de cada uso.',
      'Não deixe a vela acesa sem supervisão.',
      'Coloque a vela em uma superfície resistente ao calor.',
    ],
  },
  {
    id: 'coelinho',
    name: 'Coelinho',
    description:
      'Delicada e encantadora, a vela de coelhinho é ideal para presentear, decorar ou tornar momentos ainda mais especiais. Seu design lúdico combina com o perfume envolvente dos nossos aromas. Produzida em parafina de alta qualidade e perfumada com as essências exclusivas da Arka Velas, está disponível em todos os nossos aromas.',
    img: ['/vela-coelho.png', '/vela-coelho2.png'],
    price: 'R$ 12,00',
    url: '/festivas/pascoa/festiva/coelinho',
    selectAroma: true,
    caracteristicas: ['Feita com parafina pura', 'Pavio de algodão ecológico'],
    composicao: ['parafina pura', 'Pavio de algodão ecológico', 'Essências de alta qualidade'],
    cuidados: [
      'Mantenha a vela longe de materiais inflamáveis.',
      'Corte o pavio para 0,5 cm antes de cada uso.',
      'Não deixe a vela acesa sem supervisão.',
      'Coloque a vela em uma superfície resistente ao calor.',
    ],
  },
]);

const produto = computed(() => produtos.value.find((item) => item.id === id.value));

const selectedPrice = computed(() => {
  let basePrice;

  if (selectedVolume.value === '250ml') {
    basePrice = 35.0;
  } else {
    basePrice = parseFloat(produto.value?.price.replace('R$', '').replace(',', '.')) || 0;
  }

  if (withDoTERRA.value) {
    basePrice += 4;
  }

  return `R$ ${basePrice.toFixed(2).replace('.', ',')}`;
});

const selectedQty = ref(1);
const cart = useCartStore();

function comprar() {
  if (!produto.value) return;
  let produtoCart = {};

  if (produto.value.id == 'bubble' || produto.value.id == 'soft-bubble' || produto.value.id == 'coelinho') {
    produtoCart = {
      id: produto.value.id,
      name: produto.value.name,
      img: produto.value.img,
      url: produto.value.url,
      quantity: selectedQty.value,
      price: selectedPrice.value,
      selectedAroma: selectedAroma.value.aroma,
      withDoTERRA: withDoTERRA.value,
    };
  } else {
    produtoCart = {
      id: produto.value.id,
      name: produto.value.name,
      img: produto.value.img,
      url: produto.value.url,
      quantity: selectedQty.value,
      price: selectedPrice.value,
      withDoTERRA: withDoTERRA.value,
    };
  }

  if (produto.value.otherVolume) {
    produtoCart.volume = selectedVolume.value;
  }

  cart.addToCart(produtoCart);
}

const accordions = ref({
  notas: false,
  caracteristicas: false,
  composicao: false,
  cuidados: false,
});

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
      <div class="relative h-[40rem]">
        <img :src="produto.img[currentImgIndex]" class="w-full h-full object-cover" alt="Imagem do produto" />

        <button
          @click="prevImage"
          class="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white z-10"
        >
          ‹
        </button>
        <button
          @click="nextImage"
          class="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white z-10"
        >
          ›
        </button>

        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
          <span
            v-for="(img, i) in produto.img"
            :key="i"
            class="w-2 h-2 rounded-full"
            :class="i === currentImgIndex ? 'bg-[#3A4766]' : 'bg-gray-300'"
          ></span>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 flex flex-col gap-y-4 py-4 md:py-0 px-4 md:px-6">
      <h2 class="text-2xl md:text-3xl uppercase">{{ produto.name }}</h2>
      <span class="text-xl md:text-2xl uppercase">
        {{ selectedPrice }}
      </span>

      <div class="flex flex-col space-y-4">
        <div class="flex space-x-2" v-if="produto.otherVolume">
          <button
            v-for="option in volumeOptions"
            :key="option.value"
            @click="selectedVolume = option.value"
            :class="[
              'px-4 py-2 rounded-md border transition duration-300 ease-in-out w-full cursor-pointer',
              selectedVolume === option.value
                ? 'bg-[#6f747e] text-white border-[#6f747e]'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100',
            ]"
          >
            {{ option.label }}
          </button>
        </div>

        <div class="w-full" v-if="produto.selectAroma">
          <label for="aroma" class="block text-sm font-light text-gray-800 mb-2">Escolha o aroma: </label>
          <div class="relative">
            <select
              id="aroma"
              v-model="selectedAroma"
              class="block w-full appearance-none px-4 py-3 pr-10 bg-white border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6f747e] focus:border-[#6f747e] text-sm transition"
            >
              <option disabled value="">Selecione um aroma</option>
              <option v-for="aroma in aromas" :key="aroma" :value="aroma">
                {{ aroma.aroma }}
              </option>
            </select>
            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                class="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
              </svg>
            </div>
          </div>
        </div>

        <template v-if="!produto.selectAroma">
          <button
            v-if="produto.doTERRA"
            @click="withDoTERRA = !withDoTERRA"
            :class="[
              'px-4 py-2 rounded-md border transition duration-300 ease-in-out w-full cursor-pointer',
              withDoTERRA === true
                ? 'bg-[#6f747e] text-white border-[#6f747e]'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100',
            ]"
          >
            Incluir Óleo doTERRA
          </button>
        </template>
        <template v-else>
          <button
            v-if="selectedAroma.doTERRA"
            @click="withDoTERRA = !withDoTERRA"
            :class="[
              'px-4 py-2 rounded-md border transition duration-300 ease-in-out w-full cursor-pointer',
              withDoTERRA === true
                ? 'bg-[#6f747e] text-white border-[#6f747e]'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100',
            ]"
          >
            Incluir Óleo doTERRA
          </button>
        </template>

        <div class="flex items-center w-full space-x-4">
          <QuantitySelector v-model="selectedQty" :min="1" :max="10" />
          <button
            @click="comprar"
            class="bg-[#3A4766] w-full text-center text-white py-2 px-4 rounded-md hover:bg-[#414f70] transition duration-200 ease-in-out cursor-pointer"
          >
            Comprar
          </button>
        </div>
      </div>

      <span class="text-md text-gray-500 font-light">
        {{ produto.description }}
      </span>

      <template v-if="produto.notasAromaticas">
        <hr class="text-gray-400" />
        <button
          @click="accordions.notas = !accordions.notas"
          class="w-full flex justify-between items-center font-medium px-2"
        >
          <span class="uppercase font-light">Notas aromáticas</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!accordions.notas" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-else class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>
        <div v-show="accordions.notas" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="nota in produto.notasAromaticas" :key="nota">{{ nota }}</li>
          </ul>
        </div>
      </template>

      <template v-if="produto.caracteristicas">
        <hr class="text-gray-400" />
        <button
          @click="accordions.caracteristicas = !accordions.caracteristicas"
          class="w-full flex justify-between items-center font-medium px-2"
        >
          <span class="uppercase font-light">Características</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!accordions.caracteristicas" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-else class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>
        <div v-show="accordions.caracteristicas" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="caracteristica in produto.caracteristicas" :key="caracteristica">{{ caracteristica }}</li>
          </ul>
        </div>
      </template>

      <template v-if="produto.composicao">
        <hr class="text-gray-400" />
        <button
          @click="accordions.composicao = !accordions.composicao"
          class="w-full flex justify-between items-center font-medium px-2"
        >
          <span class="uppercase font-light">Composição</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!accordions.composicao" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-else class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>
        <div v-show="accordions.composicao" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="componente in produto.composicao" :key="componente">{{ componente }}</li>
          </ul>
        </div>
      </template>

      <template v-if="produto.cuidados">
        <hr class="text-gray-400" />
        <button
          @click="accordions.cuidados = !accordions.cuidados"
          class="w-full flex justify-between items-center font-medium px-2"
        >
          <span class="uppercase font-light">Cuidados e instruções</span>
          <span class="w-4 h-4">
            <ArrowDownIcon v-if="!accordions.cuidados" class="w-4 h-4 text-[#3A4766]" />
            <ArrowUpIcon v-else class="w-4 h-4 text-[#3A4766]" />
          </span>
        </button>
        <div v-show="accordions.cuidados" class="py-3 bg-white px-6">
          <ul class="list-disc list-inside text-sm">
            <li v-for="cuidado in produto.cuidados" :key="cuidado">{{ cuidado }}</li>
          </ul>
        </div>
      </template>
    </div>
  </section>
</template>
