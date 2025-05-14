<script setup>
import { useCartStore } from '@/stores/useCartStore';

const cart = useCartStore();
function finalizePurchase() {
  const message = cart.cartItems
    .map((item) => {
      const doTERRAStatus = item.withDoTERRA ? 'com doTERRA' : 'sem doTERRA';

      return `🕯️ ${item.name} - ${doTERRAStatus} - Quantidade: ${item.quantity}`;
    })
    .join('%0A');

  const whatsappLink = `https://api.whatsapp.com/send?phone=5547984140502&text=Olá!%20😊%0AAcabei%20de%20finalizar%20meu%20pedido%20no%20site%20e%20estou%20interessado%20nos%20seguintes%20produtos:%0A%0A${message}%0A%0APoderia%20me%20confirmar%20a%20disponibilidade%20e%20os%20próximos%20passos%20para%20o%20pagamento%20e%20envio?%0AObrigado(a)!%20🌿✨`;

  window.open(whatsappLink, '_blank');
}
</script>

<template>
  <div class="container mx-auto px-4 md:px-6 pb-24">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>

    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="md:col-span-2">
        <table class="w-full hidden md:table">
          <tbody>
            <tr v-for="item in cart.cartItems" :key="item.id" class="border-b">
              <td class="py-4 pr-4 flex items-center gap-4">
                <div class="group flex items-start gap-2 relative" :title="'Visualizar ' + item.name">
                  <router-link class="relative w-18 h-18 flex-shrink-0 overflow-hidden" :to="item.url">
                    <img class="w-full h-full object-cover" :src="item.img[0]" :alt="item.name" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div
                      class="absolute bottom-0 w-full flex justify-center items-center opacity-0 pointer-events-none transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto"
                    >
                      <span class="text-sm py-1 text-white">Visualizar</span>
                    </div>
                  </router-link>
                </div>
                <div>
                  <p class="font-medium text-gray-800">{{ item.name }}</p>
                  <p class="text-sm text-gray-500">{{ item.volume }}</p>
                </div>
              </td>
              <td class="text-center p-4 hidden lg:table-cell">{{ item.price }}</td>
              <td class="text-center p-4 w-38">
                <div
                  class="flex items-center text-center rounded-md overflow-hidden border border-gray-400 w-full h-10"
                >
                  <button
                    type="button"
                    class="w-1/3 h-full bg-white hover:bg-gray-100 text-[#3A4766] font-semibold text-lg cursor-pointer"
                    @click="cart.decreaseQuantity(item.id)"
                  >
                    -
                  </button>
                  <span class="w-1/3 h-full flex items-center justify-center text-[#3A4766] text-sm focus:outline-none">
                    {{ item.quantity }}
                  </span>
                  <button
                    type="button"
                    class="w-1/3 h-full bg-white hover:bg-gray-100 text-[#3A4766] font-semibold text-lg cursor-pointer"
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
              <td class="text-center py-4 pl-4">
                <button @click="cart.removeItem(item)" class="text-red-600 hover:underline cursor-pointer">
                  Remover
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="flex flex-col gap-y-4 md:hidden">
          <div v-for="item in cart.cartItems" :key="item.id" class="flex flex-col border-b pb-2">
            <div class="flex items-center gap-4">
              <router-link class="relative w-20 h-20 flex-shrink-0 overflow-hidden" :to="item.url">
                <img class="w-full h-full object-cover rounded-md" :src="item.img" :alt="item.name" />
              </router-link>
              <div class="flex-1">
                <p class="font-medium text-gray-800">{{ item.name }}</p>
                <p class="text-sm text-gray-500">{{ item.volume }}</p>
                <p class="text-sm font-bold text-gray-800 mt-2">R$ {{ item.price }}</p>
              </div>
            </div>
            <div class="flex items-center justify-between mt-4">
              <div class="flex items-center text-center rounded-md overflow-hidden border border-gray-300 w-32 h-10">
                <button
                  type="button"
                  class="w-1/3 h-full bg-white hover:bg-gray-100 text-[#3A4766] font-semibold text-lg cursor-pointer"
                  @click="cart.decreaseQuantity(item.id)"
                >
                  -
                </button>
                <span class="w-1/3 h-full flex items-center justify-center text-[#3A4766] text-sm focus:outline-none">
                  {{ item.quantity }}
                </span>
                <button
                  type="button"
                  class="w-1/3 h-full bg-white hover:bg-gray-100 text-[#3A4766] font-semibold text-lg cursor-pointer"
                  @click="cart.increaseQuantity(item.id)"
                >
                  +
                </button>
              </div>
              <button @click="cart.removeItem(item)" class="text-red-600 hover:underline text-sm font-medium">
                Remover
              </button>
            </div>
          </div>
        </div>

        <router-link to="/" class="block mt-4 text-center text-gray-600 hover:underline">
          Continuar comprando
        </router-link>
      </div>

      <div class="p-6">
        <h2 class="text-lg font-bold text-gray-800 mb-4">Resumo do pedido</h2>
        <hr class="my-4 text-[#3A4766]" />
        <div class="flex justify-between items-center mb-4">
          <span class="text-lg font-bold text-gray-800">Subtotal:</span>
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
