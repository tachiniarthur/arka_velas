<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import CookieConsent from './components/CookieConsent.vue';
</script>

<template>
  <HeaderComponent />

  <main class="mt-16">
    <router-view />
    <CookieConsent />
  </main>
</template>

<style scoped></style>
