<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import CookieConsent from './components/CookieConsent.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent />

    <main class="mt-16 flex-grow">
      <router-view />
      <CookieConsent />
    </main>

    <FooterComponent />
  </div>
</template>

<style scoped></style>
