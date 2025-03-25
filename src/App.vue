<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import CarrosselComponent from './components/CarrosselComponent.vue'
import SloganComponent from './components/SloganComponent.vue'
import PreviewProductsComponent from './components/PreviewProductsComponent.vue'
import HistoryComponent from './components/HistoryComponent.vue'
</script>

<template>
  <HeaderComponent />

  <main class="mt-16">
    <CarrosselComponent />
    <SloganComponent />
    <PreviewProductsComponent />
    <HistoryComponent />
  </main>
</template>

<style scoped></style>
