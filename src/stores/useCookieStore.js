import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCookieStore = defineStore('cookie', () => {
  const accepted = ref(localStorage.getItem('cookiesAccepted') === 'true');

  function acceptCookies() {
    accepted.value = true;
    localStorage.setItem('cookiesAccepted', 'true');
  }

  return { accepted, acceptCookies };
});
