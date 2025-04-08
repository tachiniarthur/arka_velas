<template>
  <div
    v-if="!accepted"
    class="fixed bottom-4 left-4 right-4 mx-auto max-w-xl bg-white text-sm text-gray-800 shadow-lg rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between z-50"
  >
    <div class="flex flex-col">
      <p class="mb-2 sm:mb-0">Usamos cookies para melhorar sua experiência.</p>
      <p class="mb-2 sm:mb-0">Ao continuar, você aceita nossa política.</p>
    </div>
    <button @click="acceptCookies" class="bg-[#3A4766] text-white px-4 py-2 rounded hover:bg-[#414f70] transition">
      Aceitar
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const accepted = ref(false);

onMounted(() => {
  accepted.value = localStorage.getItem('cookiesAccepted') === 'true';
});

function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  accepted.value = true;
}
</script>
