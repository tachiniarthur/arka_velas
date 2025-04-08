import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import Cookies from 'js-cookie';

export const useCartStore = defineStore('cart', () => {
  const savedItems = JSON.parse(Cookies.get('cartItems') || '[]');
  const savedCount = parseInt(Cookies.get('countItens') || '0');

  const cartItems = ref(savedItems);
  const countItens = ref(savedCount);

  function addToCart(vela) {
    const existing = cartItems.value.find((item) => item.id === vela.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cartItems.value.push({ ...vela, quantity: 1 });
    }

    countItens.value++;
  }

  watch(
    [countItens, cartItems],
    () => {
      Cookies.set('countItens', countItens.value, { expires: 1 });
      Cookies.set('cartItems', JSON.stringify(cartItems.value), { expires: 1 });
    },
    { deep: true }
  );

  return { cartItems, countItens, addToCart };
});
