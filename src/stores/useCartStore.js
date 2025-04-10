import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import Cookies from 'js-cookie';

export const useCartStore = defineStore('cart', () => {
  const savedItems = JSON.parse(Cookies.get('cartItems') || '[]');
  const savedCount = parseInt(Cookies.get('countItens') || '0');
  const totalPrice = ref('R$ 0,00');

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

    totalPrice.value = `R$ ${cartItems.value
      .reduce(
        (total, item) => total + parseFloat(item.price.replace('R$', '').replace(',', '.').trim()) * item.quantity,
        0
      )
      .toFixed(2)
      .replace('.', ',')}`;
  }

  function removeItem(vela) {
    const index = cartItems.value.findIndex((item) => item.id === vela.id);

    if (index !== -1) {
      cartItems.value.splice(index, 1);
      countItens.value = cartItems.value.reduce((total, item) => total + item.quantity, 0);
      totalPrice.value = `R$ ${cartItems.value
        .reduce(
          (total, item) => total + parseFloat(item.price.replace('R$', '').replace(',', '.').trim()) * item.quantity,
          0
        )
        .toFixed(2)
        .replace('.', ',')}`;
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

  return { cartItems, countItens, totalPrice, addToCart, removeItem };
});
