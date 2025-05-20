import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import Cookies from 'js-cookie';
import { useCookieStore } from './useCookieStore';

export const useCartStore = defineStore('cart', () => {
  const cookieStore = useCookieStore();
  const savedItems = cookieStore.accepted ? JSON.parse(Cookies.get('cartItems') || '[]') : [];
  const savedCount = cookieStore.accepted ? parseInt(Cookies.get('countItens') || '0') : 0;
  const totalPrice = ref('R$ 0,00');

  const cartItems = ref(savedItems);
  const isCartOpen = ref(false);
  const countItens = ref(savedCount);

  function calculateTotalPrice() {
    totalPrice.value = `R$ ${cartItems.value
      .reduce(
        (total, item) => total + parseFloat(item.price.replace('R$', '').replace(',', '.').trim()) * item.quantity,
        0
      )
      .toFixed(2)
      .replace('.', ',')}`;

    countItens.value = cartItems.value.reduce((total, item) => total + item.quantity, 0);
  }

  calculateTotalPrice();

  function addToCart(produto) {
    let existing = false;

    if (produto.id === 'bubble' || produto.id === 'soft-bubble') {
      existing = cartItems.value.find(
        (item) =>
          item.id === produto.id &&
          item.selectedAroma === produto.selectedAroma &&
          item.withDoTERRA === produto.withDoTERRA
      );
    } else {
      existing = cartItems.value.find(
        (item) => item.id === produto.id && item.volume === produto.volume && item.withDoTERRA === produto.withDoTERRA
      );
    }

    if (existing) {
      existing.quantity += produto.quantity;
    } else {
      cartItems.value.push({ ...produto });
    }

    countItens.value = cartItems.value.reduce((total, item) => total + item.quantity, 0);
    calculateTotalPrice();

    Cookies.set('cartItems', JSON.stringify(cartItems.value), { expires: 1 });
    Cookies.set('countItens', countItens.value, { expires: 1 });

    isCartOpen.value = true;
  }

  function toggleCart() {
    isCartOpen.value = !isCartOpen.value;
  }

  function removeItem(produto) {
    const index = cartItems.value.findIndex((item) => item.id === produto.id);

    if (index !== -1) {
      cartItems.value.splice(index, 1);
      countItens.value = cartItems.value.reduce((total, item) => total + item.quantity, 0);
      calculateTotalPrice();

      if (cookieStore.accepted) {
        Cookies.set('cartItems', JSON.stringify(cartItems.value), { expires: 1 });
        Cookies.set('countItens', countItens.value, { expires: 1 });
      }
    }
  }

  function increaseQuantity(produto) {
    let itemIndex = -1;

    if (produto.id === 'bubble' || produto.id === 'soft-bubble') {
      itemIndex = cartItems.value.findIndex(
        (item) =>
          item.id === produto.id &&
          item.selectedAroma === produto.selectedAroma &&
          item.withDoTERRA === produto.withDoTERRA
      );
    } else {
      itemIndex = cartItems.value.findIndex(
        (item) => item.id === produto.id && item.volume === produto.volume && item.withDoTERRA === produto.withDoTERRA
      );
    }

    if (itemIndex !== -1) {
      cartItems.value[itemIndex].quantity++;
      calculateTotalPrice();

      if (cookieStore.accepted) {
        Cookies.set('cartItems', JSON.stringify(cartItems.value), { expires: 1 });
      }
    }
  }

  function decreaseQuantity(produto) {
    let itemIndex = -1;

    if (produto.id === 'bubble' || produto.id === 'soft-bubble') {
      itemIndex = cartItems.value.findIndex(
        (item) =>
          item.id === produto.id &&
          item.selectedAroma === produto.selectedAroma &&
          item.withDoTERRA === produto.withDoTERRA
      );
    } else {
      itemIndex = cartItems.value.findIndex(
        (item) => item.id === produto.id && item.volume === produto.volume && item.withDoTERRA === produto.withDoTERRA
      );
    }

    if (itemIndex !== -1 && cartItems.value[itemIndex].quantity > 1) {
      cartItems.value[itemIndex].quantity--;
      calculateTotalPrice();

      if (cookieStore.accepted) {
        Cookies.set('cartItems', JSON.stringify(cartItems.value), { expires: 1 });
      }
    }
  }

  watch(
    cartItems,
    () => {
      if (cookieStore.accepted) {
        Cookies.set('cartItems', JSON.stringify(cartItems.value), { expires: 1 });
        Cookies.set('countItens', countItens.value, { expires: 1 });
      }
    },
    { deep: true }
  );

  return {
    cartItems,
    isCartOpen,
    countItens,
    totalPrice,
    addToCart,
    toggleCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  };
});
