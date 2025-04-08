import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import Cookies from 'js-cookie';

export const useCartStore = defineStore('cart', () => {
  const savedItems = JSON.parse(Cookies.get('cartItems') || '[]');
  const savedCount = parseInt(Cookies.get('countItens') || '0');
  const totalPrice = ref(0);

  const cartItems = ref(savedItems);
  const countItens = ref(savedCount);

  function addToCart(vela) {
    const existing = cartItems.value.find((item) => item.id === vela.id);

    if (existing) {
      existing.quantity += vela.quantity;
    } else {
      cartItems.value.push({ ...vela });
    }

    countItens.value = cartItems.value.reduce((total, item) => total + item.quantity, 0);

    // Corrigindo o cálculo do totalPrice
    totalPrice.value = cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0);

    console.log('Total Price:', totalPrice.value);
  }

  function removeItem(vela) {
    const index = cartItems.value.findIndex((item) => item.id === vela.id);

    if (index !== -1) {
      cartItems.value.splice(index, 1);
      countItens.value = cartItems.value.reduce((total, item) => total + item.quantity, 0);
    }
  }

  watch(
    [countItens, cartItems],
    () => {
      Cookies.set('countItens', countItens.value, { expires: 1 });
      Cookies.set('cartItems', JSON.stringify(cartItems.value), { expires: 1 });
    },
    { deep: true }
  );

  return { cartItems, countItens, addToCart, removeItem };
});
