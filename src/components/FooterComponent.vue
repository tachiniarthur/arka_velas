<template>
  <footer class="w-full bg-[#3A4766] text-[#EAE8DA] py-10 mt-auto">
    <div class="container mx-auto grid grid-cols-4 gap-8 px-4">
      <div>
        <h3 class="text-sm font-bold uppercase mb-4">Atendimento</h3>
        <ul class="text-sm space-y-2">
          <li class="flex"><PhoneArrowDownLeftIcon class="h-6 w-6 pr-2" />(47) 98414-0502</li>
          <li class="flex"><EnvelopeIcon class="h-6 w-6 pr-2" /> arka.velas@gmail.com</li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-bold uppercase mb-4">Ajuda</h3>
        <ul class="text-sm space-y-2">
          <li><router-link to="/termos-de-uso" class="hover:font-bold">Termos de uso</router-link></li>
          <li><router-link to="/trocas-e-devolucoes" class="hover:font-bold">Trocas e Devoluções</router-link></li>
          <li>
            <router-link to="/politicas-de-privacidade" class="hover:font-bold">Políticas de privacidade</router-link>
          </li>
          <li><router-link to="/faq" class="hover:font-bold">FAQ</router-link></li>
        </ul>
      </div>
    </div>

    <div class="mt-8 text-center text-sm text-[#EAE8DA]">© 2023 - Todos os direitos reservados</div>
  </footer>
</template>

<script setup>
import { EnvelopeIcon, PhoneArrowDownLeftIcon } from '@heroicons/vue/24/outline';
</script>
