<template>
  <header>
    <nav class="bg-white fixed w-full top-0 z-50 hidden md:block">
      <div class="relative flex justify-center items-center py-4">
        <ul class="flex gap-6 items-center">
          <router-link to="/">
            <img :src="'/logo.png'" alt="Logo" class="h-8" />
          </router-link>
          <li v-for="item in items" :key="item.name">
            <router-link
              :to="item.url"
              @click="item.sub ? toggleSecondHeader() : null"
              class="text-[#3A4766] border-b-2 border-transparent uppercase hover:border-[#3A4766] transition-all duration-300 ease-in-out pb-1.5"
            >
              {{ item.name }}
            </router-link>
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
                <router-link :to="item.url" class="text-[#3A4766] font-light hover:font-medium transition duration-300">
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

    <div v-if="showStoreMenu" class="fixed inset-0 z-40 bg-black opacity-50" @click="closeStoreMenu"></div>

    <div
      v-if="showStoreMenu"
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
              <router-link class="relative w-28 h-28 flex-shrink-0 overflow-hidden" :to="'/vela/' + cartItem.id">
                <img class="w-full h-full object-cover" :src="cartItem.img" :alt="cartItem.name" loading="lazy" />
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
                  <span class="text-sm font-light text-gray-600">x{{ cartItem.quantity }}</span>
                </div>
                <span class="text-md font-light text-gray-700">{{ cartItem.price }}</span>
              </div>
              <button
                type="button"
                class="absolute bottom-0 right-0 h-5 w-5 opacity-0 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto cursor-pointer"
                @click="() => cart.removeItem(cartItem)"
              >
                <TrashIcon class="text-red-700" />
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
          <span class="text-lg font-medium text-gray-800">Total:</span>
          <span class="text-lg font-medium text-gray-800">{{ cart.totalPrice }}</span>
        </div>
        <button
          type="button"
          class="w-full bg-[#3A4766] text-white py-2 rounded-md hover:bg-[#2b3a5d] transition duration-300"
        >
          Finalizar compra
        </button>
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
              <router-link :to="item.url" class="text-[#3A4766] font-light hover:font-medium transition duration-300">
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
  { name: 'Queridinho', url: '#' },
  { name: 'Velas', url: '/velas' },
  { name: 'Sazonal', url: '#', sub: true },
  { name: 'Sobre', url: '#' },
]);

const subItems = ref([
  {
    name: 'Épocas do ano',
    items: [
      { name: 'Vela 1', url: '#' },
      { name: 'Vela 2', url: '#' },
      { name: 'Vela 3', url: '#' },
    ],
  },
  {
    name: 'Estações',
    items: [
      { name: 'Vela 1', url: '#' },
      { name: 'Vela 2', url: '#' },
      { name: 'Vela 3', url: '#' },
    ],
  },
]);

// Desktop
const showSecondHeader = ref(false);
const showStoreMenu = ref(false);

// Mobile
const isMobileMenuOpen = ref(false);
const isSubMenuOpen = ref(false);

const toggleSecondHeader = () => {
  showSecondHeader.value = !showSecondHeader.value;
  if (showStoreMenu.value) {
    showStoreMenu.value = !showStoreMenu.value;
  }
};

const toggleStoreMenu = () => {
  showStoreMenu.value = !showStoreMenu.value;
  if (showSecondHeader.value) {
    showSecondHeader.value = !showSecondHeader.value;
  }

  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  }

  if (isSubMenuOpen.value) {
    isSubMenuOpen.value = !isSubMenuOpen.value;
  }
};

const closeStoreMenu = () => {
  showStoreMenu.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (showStoreMenu.value) {
    showStoreMenu.value = !showStoreMenu.value;
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const openSubMenu = (item) => {
  if (item.sub) {
    isSubMenuOpen.value = true;
  }
};

const closeSubMenu = () => {
  isSubMenuOpen.value = false;
};
</script>
