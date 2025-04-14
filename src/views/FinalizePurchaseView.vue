<script setup>
import { useCartStore } from '@/stores/useCartStore';

const cart = useCartStore();

function finalizePurchase() {
  alert('Pedido finalizado com sucesso!');
}
</script>

<template>
  <div class="container mx-auto px-6">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="md:col-span-2">
        <table class="w-full">
          <tbody>
            <tr v-for="item in cart.cartItems" :key="item.id" class="border-b">
              <td class="p-4 flex items-center gap-4">
                <img :src="item.img" alt="Produto" class="w-16 h-16 object-cover" />
                <div>
                  <p class="font-medium text-gray-800">{{ item.name }}</p>
                  <p class="text-sm text-gray-500">{{ item.description }}</p>
                </div>
              </td>
              <td class="text-center p-4">{{ item.price }}</td>
              <td class="text-center p-4">
                <div class="flex items-center text-center rounded-md overflow-hidden border border-gray-300 w-28 h-10">
                  <button
                    type="button"
                    class="w-1/3 h-full bg-white hover:bg-gray-100 text-[#3A4766] font-semibold text-lg"
                    @click="cart.decreaseQuantity(item.id)"
                  >
                    -
                  </button>
                  <span
                    class="w-1/3 h-full flex items-center justify-center text-[#3A4766] text-sm border-x border-gray-300 focus:outline-none"
                  >
                    {{ item.quantity }}
                  </span>
                  <button
                    type="button"
                    class="w-1/3 h-full bg-white hover:bg-gray-100 text-[#3A4766] font-semibold text-lg"
                    @click="cart.increaseQuantity(item.id)"
                  >
                    +
                  </button>
                </div>
              </td>
              <td class="text-center p-4">
                R$
                {{
                  (parseFloat(item.price.replace('R$', '').replace(',', '.')) * item.quantity)
                    .toFixed(2)
                    .replace('.', ',')
                }}
              </td>
              <td class="text-center p-4">
                <button @click="cart.removeItem(item)" class="text-red-600 hover:underline">Remover</button>
              </td>
            </tr>
          </tbody>
        </table>
        <router-link to="/" class="block mt-4 text-center text-gray-600 hover:underline">
          Continuar comprando
        </router-link>
      </div>

      <div class="p-6">
        <h2 class="text-lg font-bold text-gray-800 mb-4">Resumo do pedido</h2>
        <hr class="my-4" />
        <div class="flex justify-between items-center mb-4">
          <span class="text-lg font-bold text-gray-800">Total:</span>
          <span class="text-lg font-bold text-gray-800">{{ cart.totalPrice }}</span>
        </div>
        <button
          @click="finalizePurchase"
          class="w-full bg-[#3A4766] text-white py-2 rounded-md text-center cursor-pointer hover:bg-[#2b3a5d] transition duration-300"
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  </div>
</template>
