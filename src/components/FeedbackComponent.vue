<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const currentSlide = ref(0)
let interval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 2
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + 2) % 2
}

const startAutoplay = () => {
  interval = setInterval(nextSlide, 10000)
}

const stopAutoplay = () => {
  if (interval) {
    clearInterval(interval)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<template>
  <section class="w-full">
    <div class="flex justify-center items-center flex-col py-10">
      <h2 class="text-3xl mb-6 font-bold border-b-2 pb-2 text-[#3A4766]">Feedbacks</h2>

      <div class="relative w-full px-14">
        <div class="overflow-hidden relative">
          <div
            class="flex transition-transform duration-500 ease-in-out items-center"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div class="w-full flex-shrink-0 px-14">
              <div class="bg-white p-8 rounded-xl relative z-20">
                <div
                  class="flex items-center justify-center space-x-2 hover:scale-110 duration-500 z-30"
                >
                  <img
                    src="../assets/img1.png"
                    alt="Photo user recommendation"
                    class="rounded-full h-10 w-10"
                  />
                  <span class="text-xl font-bold tracking-tight text-gray-900">Pessoa 1</span>
                </div>
                <p class="mt-4 sm:text-lg leading-8 text-gray-600 text-center">
                  "Primeiro feedkback"
                </p>
              </div>
            </div>
            <div class="w-full flex-shrink-0 px-14">
              <div class="bg-white p-8 rounded-xl relative z-20">
                <div
                  class="flex items-center justify-center space-x-2 hover:scale-110 duration-500 z-30"
                >
                  <img
                    src="../assets/img2.png"
                    alt="Photo user recommendation"
                    class="rounded-full h-10 w-10"
                  />
                  <span class="text-xl font-bold tracking-tight text-gray-900">Pessoa 2</span>
                </div>
                <p class="mt-4 sm:text-lg leading-8 text-gray-600 text-center">
                  "Segundo feedkback"
                </p>
              </div>
            </div>
          </div>

          <div class="absolute inset-0 flex justify-between items-center z-10 pointer-events-none">
            <button
              @click="prevSlide"
              class="p-2 bg-[#3A4766] text-[#EAE8DA] rounded-full pointer-events-auto cursor-pointer"
              aria-label="Previous recommendation"
              title="Previous recommendation"
            >
              <ChevronLeftIcon class="h-6 w-6" />
            </button>
            <button
              @click="nextSlide"
              class="p-2 bg-[#3A4766] text-[#EAE8DA] rounded-full pointer-events-auto cursor-pointer"
              aria-label="Next recommendation"
              title="Next recommendation"
            >
              <ChevronRightIcon class="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
