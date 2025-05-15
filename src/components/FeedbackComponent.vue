<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

const feedbacks = ref([
  {
    id: 1,
    name: 'Giordano',
    text: 'O cuidado nos detalhes é visível. Desde o aroma até o acabamento do pote, tudo transmite carinho e qualidade.',
  },
  {
    id: 2,
    name: 'Julia',
    text: 'Apenas elogios, tudo maravilhoso! Qualidade impecável, e não vejo a hora de comprar outro aroma!',
  },
  {
    id: 3,
    name: 'Dilcele',
    text: 'Comprei a vela de flor de figo e simplesmente amei! O cheiro é delicado e o pote é lindo demais.',
  },
  {
    id: 4,
    name: 'Valneza',
    text: 'Entrega super rápida e o aroma da vela de frutas vermelhas com óleo essencial é perfeito! Recomendo demais.',
  },
  {
    id: 5,
    name: 'Dhyego',
    text: 'Vela maravilhosa, pavio de madeira faz toda a diferença! Um toque sofisticado que deixa o ambiente aconchegante',
  },
  {
    id: 6,
    name: 'Adolar',
    text: 'Já é a terceira vez que compro. A qualidade continua impecável, e o design dos potes é um charme!',
  },
]);

const currentPosition = ref(0);
const itemsPerSlide = ref(1);

const isFirstItem = computed(() => currentPosition.value === 0);
const isLastItem = computed(() => currentPosition.value + itemsPerSlide.value >= feedbacks.value.length);

const totalSlides = computed(() => Math.ceil(feedbacks.value.length / itemsPerSlide.value));

const nextSlide = () => {
  if (isLastItem.value) return;
  currentPosition.value = Math.min(
    currentPosition.value + itemsPerSlide.value,
    feedbacks.value.length - itemsPerSlide.value
  );
};

const prevSlide = () => {
  if (isFirstItem.value) return;
  currentPosition.value = Math.max(currentPosition.value - itemsPerSlide.value, 0);
};

const updateItemsPerSlide = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    itemsPerSlide.value = 1;
  } else if (screenWidth < 1024) {
    itemsPerSlide.value = 2;
  } else {
    itemsPerSlide.value = 3;
  }
};

onMounted(() => {
  updateItemsPerSlide();
  window.addEventListener('resize', updateItemsPerSlide);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerSlide);
});
</script>

<template>
  <section class="w-full">
    <div class="flex justify-center items-center flex-col py-10 relative">
      <h2 class="text-3xl mb-6 text-gray-800 uppercase">Feedback</h2>

      <div class="w-full px-4 md:px-8 lg:px-12">
        <div class="relative">
          <button
            @click="prevSlide"
            :disabled="isFirstItem"
            :class="{ 'opacity-50 cursor-not-allowed': isFirstItem }"
            class="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-[#3A4766] rounded-full z-20 hover:bg-[#2a3550]"
            aria-label="Previous recommendation"
          >
            <ChevronLeftIcon class="h-6 w-6" />
          </button>

          <div class="overflow-hidden">
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentPosition * (100 / itemsPerSlide)}%)` }"
            >
              <div v-for="feedback in feedbacks" :key="feedback.id" class="w-full md:w-1/2 lg:w-1/3 flex-shrink-0">
                <div class="bg-white p-8 rounded-xl h-full">
                  <div class="flex items-center justify-center space-x-2">
                    <span class="text-xl font-bold tracking-tight text-gray-900">{{ feedback.name }}</span>
                  </div>
                  <p class="mt-4 sm:text-lg leading-8 text-gray-600 text-center">"{{ feedback.text }}"</p>
                </div>
              </div>
            </div>
          </div>

          <button
            @click="nextSlide"
            :disabled="isLastItem"
            :class="{ 'opacity-50 cursor-not-allowed': isLastItem }"
            class="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-[#3A4766] rounded-full z-20 hover:bg-[#2a3550]"
            aria-label="Next recommendation"
          >
            <ChevronRightIcon class="h-6 w-6" />
          </button>
        </div>

        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="index in totalSlides"
            :key="index"
            @click="currentPosition = (index - 1) * itemsPerSlide"
            :class="{
              'bg-[#3A4766]': currentPosition / itemsPerSlide === index - 1,
              'bg-gray-300': currentPosition / itemsPerSlide !== index - 1,
            }"
            class="w-3 h-3 rounded-full focus:outline-none"
            :aria-label="`Go to slide ${index}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>
