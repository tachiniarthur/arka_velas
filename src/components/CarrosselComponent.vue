<template>
  <section class="relative w-full aspect-[16/9] overflow-hidden">
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
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const images = ref(['img-banner.png', 'img-banner2.png']);

const modules = [Autoplay, Pagination];
</script>

<style>
.swiper-pagination-bullet-active {
  background-color: #3a4766 !important;
}
</style>
