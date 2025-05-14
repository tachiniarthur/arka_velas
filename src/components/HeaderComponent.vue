<template>
  <header>
    <nav class="bg-white fixed w-full top-0 z-50 hidden md:block">
      <div class="relative flex justify-center items-center py-4">
        <ul class="flex gap-6 items-center">
          <router-link to="/">
            <img :src="'/logo.png'" alt="Logo" class="h-8" />
          </router-link>
          <li v-for="item in items" :key="item.name" class="flex items-center">
            <template v-if="item.url">
              <router-link
                :to="item.url"
                @click="item.sub ? toggleSecondHeader(item) : null"
                class="text-[#3A4766] border-b-2 border-transparent uppercase hover:border-[#3A4766] transition-all duration-300 ease-in-out pb-1.5"
              >
                {{ item.name }}
              </router-link>
            </template>
            <template v-else>
              <button
                @click="item.sub ? toggleSecondHeader(item) : null"
                class="text-[#3A4766] cursor-pointer border-b-2 border-transparent uppercase hover:border-[#3A4766] transition-all duration-300 ease-in-out pb-1.5"
              >
                {{ item.name }}
              </button>
            </template>
          </li>
        </ul>

        <button
          type="button"
          class="absolute right-10 top-1/2 transform -translate-y-1/2 cursor-pointer"
          @click="toggleStoreMenu()"
        >
          <div class="relative">
            <ShoppingBagIcon class="h-6 w-6 text-[#3A4766]" />
            <span
              class="absolute -top-2 -right-2 bg-[#3A4766] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
              >{{ cart.countItens }}</span
            >
          </div>
        </button>
      </div>
    </nav>

    <nav v-if="showSecondHeader" class="pt-10 bg-gray-50 fixed w-full top-16 z-40 hidden md:block">
      <div class="container mx-auto px-6 pt-4 pb-6">
        <nav class="grid grid-cols-2">
          <ul class="flex flex-col gap-3" v-for="subItem in subItems" :key="subItem.name">
            <span class="text-[#3A4766] font-medium border-b pb-0.5 w-72">
              {{ subItem.name }}
            </span>
            <div class="flex flex-col gap-2">
              <li v-for="item in subItem.items" :key="item.name">
                <router-link
                  :to="item.url"
                  @click="closeSecondHeader"
                  class="text-[#3A4766] font-light hover:font-medium transition duration-300"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </nav>

    <nav v-if="showSecondHeaderProdutos" class="pt-10 bg-gray-50 fixed w-full top-16 z-40 hidden md:block">
      <div class="container mx-auto px-6 pt-4 pb-6">
        <nav class="grid grid-cols-2">
          <ul class="flex flex-col gap-3" v-for="subItem in subItemsProdutos" :key="subItem.name">
            <span class="text-[#3A4766] font-medium border-b pb-0.5 w-72">
              {{ subItem.name }}
            </span>
            <div class="flex flex-col gap-2">
              <li v-for="item in subItem.items" :key="item.name">
                <router-link
                  :to="item.url"
                  @click="closeSecondHeader"
                  class="text-[#3A4766] font-light hover:font-medium transition duration-300"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </nav>

    <nav class="bg-white fixed top-0 left-0 right-0 z-50 md:hidden flex justify-between py-4 px-6">
      <button @click="toggleMobileMenu" class="focus:outline-none">
        <Bars3Icon class="h-8 w-8 text-[#3A4766]" />
      </button>
      <router-link to="/">
        <img :src="'/logo.png'" alt="Logo" class="h-8" />
      </router-link>
      <button type="button" class="focus:outline-none" @click="toggleStoreMenu()">
        <div class="relative">
          <ShoppingBagIcon class="h-6 w-6 text-[#3A4766]" />
          <span
            class="absolute -top-2 -right-2 bg-[#3A4766] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            >{{ cart.countItens }}</span
          >
        </div>
      </button>
    </nav>

    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-40 bg-black opacity-50" @click="closeMobileMenu"></div>

    <nav
      v-if="isMobileMenuOpen"
      class="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform transition duration-300 ease-in-out max-h-screen overflow-y-auto h-full"
    >
      <div class="p-4">
        <button @click="closeMobileMenu" class="focus:outline-none">
          <XMarkIcon class="h-6 w-6 text-[#3A4766]" />
        </button>
      </div>
      <div class="p-4">
        <ul class="space-y-4">
          <li v-for="item in items" :key="item.name">
            <router-link
              v-if="!item.sub"
              :to="item.url"
              @click="closeMobileMenu"
              class="block text-[#3A4766] hover:bg-gray-100 rounded transition duration-300"
            >
              {{ item.name }}
            </router-link>
            <button
              v-else
              @click="openSubMenu(item)"
              class="block w-full text-left text-[#3A4766] hover:bg-gray-100 rounded transition duration-300"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <div v-if="cart.isCartOpen" class="fixed inset-0 z-40 bg-black opacity-50" @click="closeStoreMenu"></div>

    <div
      v-if="cart.isCartOpen"
      class="fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-lg transform transition duration-300 ease-in-out max-h-screen h-full flex flex-col"
    >
      <div class="p-4">
        <button @click="closeStoreMenu" class="focus:outline-none">
          <XMarkIcon class="h-6 w-6 text-[#3A4766]" />
        </button>
      </div>
      <div class="flex-1 overflow-y-auto p-4">
        <ul class="space-y-4" v-if="cart.cartItems.length > 0">
          <li class="flex flex-col" v-for="cartItem in cart.cartItems" :key="cartItem.id">
            <div class="group flex items-start gap-2 relative" :title="'Visualizar ' + cartItem.name">
              <router-link class="relative w-22 h-22 flex-shrink-0 overflow-hidden" :to="cartItem.url">
                <img class="w-full h-full object-cover" :src="cartItem.img[0]" :alt="cartItem.name" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div
                  class="absolute bottom-0 w-full flex justify-center items-center opacity-0 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto"
                >
                  <span class="text-lg py-1 text-white">Visualizar</span>
                </div>
              </router-link>
              <div class="flex flex-col justify-between flex-1 gap-1">
                <div class="flex justify-between items-center">
                  <span class="text-lg font-medium uppercase w-30 text-gray-800 text-break">{{ cartItem.name }}</span>
                  <div class="flex flex-col items-end">
                    <span class="text-sm font-light text-gray-600">x{{ cartItem.quantity }}</span>
                    <span v-if="cartItem.volume" class="text-xs font-light text-gray-600">x{{ cartItem.volume }}</span>
                  </div>
                </div>
                <span class="text-md font-light text-gray-700">{{ cartItem.price }}</span>
              </div>
              <button
                type="button"
                class="absolute bottom-0 right-0 h-5 w-5 text-red-700 cursor-pointer md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto transition-all duration-300 ease-in-out"
                @click="() => cart.removeItem(cartItem)"
              >
                <TrashIcon />
              </button>
            </div>
          </li>
        </ul>
        <div v-else>
          <p class="text-center text-gray-500 pt-10">Seu carrinho está vazio</p>
        </div>
      </div>
      <div class="px-4 py-3">
        <div class="flex justify-between items-center mb-4">
          <span class="text-lg font-medium text-gray-800">Subtotal:</span>
          <span class="text-lg font-medium text-gray-800">{{ cart.totalPrice }}</span>
        </div>
        <router-link
          @click="closeStoreMenu"
          to="/finalizar-compra"
          class="block w-full bg-[#3A4766] text-white py-2 rounded-md text-center hover:bg-[#2b3a5d] transition duration-300"
        >
          Finalizar compra
        </router-link>
      </div>
    </div>

    <nav
      v-if="isSubMenuOpen"
      class="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out max-h-screen overflow-y-auto h-full"
    >
      <div class="p-4">
        <button @click="closeSubMenu" class="focus:outline-none">
          <ArrowLeftIcon class="h-6 w-6 text-[#3A4766]" />
        </button>
      </div>
      <div class="p-4 space-y-4">
        <ul class="flex flex-col gap-3" v-for="subItem in subItems" :key="subItem.name">
          <span class="text-[#3A4766] font-medium border-b pb-0.5 w-72">
            {{ subItem.name }}
          </span>
          <div class="flex flex-col gap-2">
            <li v-for="item in subItem.items" :key="item.name">
              <router-link
                :to="item.url"
                @click="closeMobileMenu"
                class="text-[#3A4766] font-light hover:font-medium transition duration-300"
              >
                {{ item.name }}
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </nav>

    <nav
      v-if="isSubMenuOpenProdutos"
      class="fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out max-h-screen overflow-y-auto h-full"
    >
      <div class="p-4">
        <button @click="closeSubMenu" class="focus:outline-none">
          <ArrowLeftIcon class="h-6 w-6 text-[#3A4766]" />
        </button>
      </div>
      <div class="p-4 space-y-4">
        <ul class="flex flex-col gap-3" v-for="subItem in subItemsProdutos" :key="subItem.name">
          <span class="text-[#3A4766] font-medium border-b pb-0.5 w-72">
            {{ subItem.name }}
          </span>
          <div class="flex flex-col gap-2">
            <li v-for="item in subItem.items" :key="item.name">
              <router-link
                :to="item.url"
                @click="closeMobileMenu"
                class="text-[#3A4766] font-light hover:font-medium transition duration-300"
              >
                {{ item.name }}
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useCartStore } from '@/stores/useCartStore';

const cart = useCartStore();

import { ref } from 'vue';
import { Bars3Icon, XMarkIcon, ArrowLeftIcon, ShoppingBagIcon, TrashIcon } from '@heroicons/vue/24/outline';

const items = ref([
  { name: 'Queridinho', url: '/velas/aromaticas/vela/frutas_vermelhas' },
  { name: 'Produtos', sub: true },
  { name: 'Sazonal', sub: true },
  { name: 'Sobre', url: '/sobre' },
]);

const subItems = ref([
  {
    name: 'Velas Festivas',
    items: [{ name: 'Páscoa', url: '/festivas/pascoa' }],
  },
  {
    name: 'Estações',
    items: [
      { name: 'Primavera', url: '/estacoes/primavera' },
      { name: 'Verão', url: '/estacoes/verao' },
      { name: 'Outono', url: '/estacoes/outono' },
      { name: 'Inverno', url: '/estacoes/inverno' },
    ],
  },
]);

const subItemsProdutos = ref([
  {
    name: 'Velas',
    items: [
      { name: 'Velas Aromáticas', url: '/velas/aromaticas' },
      { name: 'Velas Decorativas', url: '/velas/decorativas' },
    ],
  },
  {
    name: 'Decorativos',
    items: [{ name: 'Porta-velas', url: '/decorativos/porta-velas' }],
  },
]);

const showSecondHeader = ref(false);
const showSecondHeaderProdutos = ref(false);

const isMobileMenuOpen = ref(false);
const isSubMenuOpen = ref(false);
const isSubMenuOpenProdutos = ref(false);

const toggleSecondHeader = (item) => {
  if (item.name == 'Sazonal') {
    showSecondHeader.value = !showSecondHeader.value;
    showSecondHeaderProdutos.value = false;
  } else {
    showSecondHeaderProdutos.value = !showSecondHeaderProdutos.value;
    showSecondHeader.value = false;
  }
  if (cart.isCartOpen) {
    cart.isCartOpen = !cart.isCartOpen;
  }
};

const closeSecondHeader = () => {
  showSecondHeader.value = false;
  showSecondHeaderProdutos.value = false;
};

const toggleStoreMenu = () => {
  cart.isCartOpen = !cart.isCartOpen;
  if (showSecondHeader.value) {
    showSecondHeader.value = !showSecondHeader.value;
  }

  if (showSecondHeaderProdutos.value) {
    showSecondHeaderProdutos.value = !showSecondHeaderProdutos.value;
  }

  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }

  if (isSubMenuOpen.value) {
    isSubMenuOpen.value = !isSubMenuOpen.value;
  }

  if (isSubMenuOpenProdutos.value) {
    isSubMenuOpenProdutos.value = !isSubMenuOpenProdutos.value;
  }
};

const closeStoreMenu = () => {
  cart.isCartOpen = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (cart.isCartOpen) {
    cart.isCartOpen = !cart.isCartOpen;
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  isSubMenuOpen.value = false;
  isSubMenuOpenProdutos.value = false;
};

const openSubMenu = (item) => {
  if (item.sub) {
    if (item.name == 'Sazonal') {
      isSubMenuOpen.value = true;
    } else {
      isSubMenuOpenProdutos.value = true;
    }
  }
};

const closeSubMenu = () => {
  isSubMenuOpen.value = false;
  isSubMenuOpenProdutos.value = false;
};
</script>
