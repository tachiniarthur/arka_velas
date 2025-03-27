<template>
  <header>
    <nav class="bg-white fixed w-full top-0 z-50 hidden md:block">
      <div class="flex justify-center items-center py-4">
        <ul class="flex gap-6 items-center">
          <router-link to="/">
            <img src="../assets/logo.png" alt="Logo" class="h-8" />
          </router-link>
          <li v-for="item in items" :key="item.name">
            <router-link
              :to="item.url"
              @click="item.sub ? toggleSecondHeader() : null"
              class="text-[#3A4766] border-b-2 border-transparent hover:border-[#3A4766] transition-all duration-300 ease-in-out pb-1.5"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div v-if="showSecondHeader" class="pt-10 bg-gray-50 fixed w-full top-16 z-40 hidden md:block">
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
                  class="text-[#3A4766] font-light hover:font-medium transition duration-300"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </div>

    <div
      class="bg-white fixed w-full top-0 right-0 z-50 md:hidden flex justify-between py-3.5 px-10"
    >
      <img src="../assets/logo.png" alt="Logo" class="h-8" />
      <button @click="toggleMobileMenu" class="focus:outline-none">
        <Bars3Icon class="h-8 w-8 text-[#3A4766]" />
      </button>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-40 bg-black opacity-50"
      @click="closeMobileMenu"
    ></div>

    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-lg transform transition duration-300 ease-in-out max-h-screen overflow-y-auto h-full"
    >
      <div class="p-4">
        <button @click="closeMobileMenu" class="p-2 focus:outline-none">
          <XMarkIcon class="h-6 w-6 text-[#3A4766]" />
        </button>
        <ul class="mt-4 space-y-2">
          <li v-for="item in items" :key="item.name">
            <router-link
              v-if="!item.sub"
              :to="item.url"
              @click="closeMobileMenu"
              class="block px-4 py-2 text-[#3A4766] hover:bg-gray-100 rounded transition duration-300"
            >
              {{ item.name }}
            </router-link>
            <button
              v-else
              @click="openSubMenu(item)"
              class="block w-full text-left px-4 py-2 text-[#3A4766] hover:bg-gray-100 rounded transition duration-300"
            >
              {{ item.name }}
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div
      v-if="isSubMenuOpen"
      class="fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out max-h-screen overflow-y-auto h-full"
    >
      <div class="p-4">
        <button @click="closeSubMenu" class="p-2 focus:outline-none">
          <ArrowLeftIcon class="h-6 w-6 text-[#3A4766]" />
        </button>
        <ul class="flex flex-col gap-3 mt-4" v-for="subItem in subItems" :key="subItem.name">
          <span class="text-[#3A4766] font-medium border-b pb-0.5 w-72">
            {{ subItem.name }}
          </span>
          <div class="flex flex-col gap-2">
            <li v-for="item in subItem.items" :key="item.name">
              <router-link
                :to="item.url"
                class="text-[#3A4766] font-light hover:font-medium transition duration-300"
              >
                {{ item.name }}
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Bars3Icon, XMarkIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'

const items = ref([
  { name: 'Queridinho', url: '#' },
  { name: 'Produtos', url: 'products' },
  { name: 'Sazonal', url: '#', sub: true }, // Item que abre o submenu
  { name: 'Sobre', url: '#' },
])

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
])

const showSecondHeader = ref(false)

const isMobileMenuOpen = ref(false)

const isSubMenuOpen = ref(false)

const toggleSecondHeader = () => {
  showSecondHeader.value = !showSecondHeader.value
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const openSubMenu = (item) => {
  if (item.sub) {
    isSubMenuOpen.value = true
  }
}

const closeSubMenu = () => {
  isSubMenuOpen.value = false
}
</script>

<style scoped></style>
