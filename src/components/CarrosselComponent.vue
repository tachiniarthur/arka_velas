<template>
  <div class="relative w-full h-[28rem] overflow-hidden">
    <!-- Carrossel -->
    <swiper
      :modules="modules"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :loop="true"
      :pagination="{ clickable: true }"
      class="w-full h-full"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="`Imagem ${index + 1}`" class="w-full h-full object-cover" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue' // Componentes do Swiper
import { Autoplay, Pagination } from 'swiper/modules' // Módulos do Swiper
import 'swiper/swiper-bundle.css' // Estilos do Swiper

// Importando imagens locais
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

// Imagens locais
const images = ref([img1, img2, img3])

// Módulos do Swiper
const modules = [Autoplay, Pagination]
</script>

<style>
.swiper-pagination-bullet-active {
  background-color: #3a4766 !important;
}
</style>
