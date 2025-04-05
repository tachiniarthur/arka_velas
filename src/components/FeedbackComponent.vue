<script setup>
import { ref, computed } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

const feedbacks = ref([
  { id: 1, name: 'Pessoa 1', text: 'Primeiro feedback' },
  { id: 2, name: 'Pessoa 2', text: 'Segundo feedback' },
  { id: 3, name: 'Pessoa 3', text: 'Terceiro feedback' },
  { id: 4, name: 'Pessoa 4', text: 'Quarto feedback' },
  { id: 5, name: 'Pessoa 5', text: 'Quinto feedback' },
  { id: 6, name: 'Pessoa 6', text: 'Sexto feedback' },
]);

const visibleFeedbacks = ref([]);
const currentPosition = ref(0);

const isFirstItem = computed(() => currentPosition.value === 0);
const isLastItem = computed(() => currentPosition.value === feedbacks.value.length - 3);

const initializeVisibleFeedbacks = () => {
  visibleFeedbacks.value = feedbacks.value.slice(0, 3);
  currentPosition.value = 0;
};

const nextSlide = () => {
  if (isLastItem.value) return;
  currentPosition.value++;
  visibleFeedbacks.value = feedbacks.value.slice(currentPosition.value, currentPosition.value + 3);
};

const prevSlide = () => {
  if (isFirstItem.value) return;
  currentPosition.value--;
  visibleFeedbacks.value = feedbacks.value.slice(currentPosition.value, currentPosition.value + 3);
};

const goToSlide = (index) => {
  currentPosition.value = index;
  visibleFeedbacks.value = feedbacks.value.slice(index, index + 3);
};

initializeVisibleFeedbacks();
</script>

<template>
  <section class="w-full">
    <div class="flex justify-center items-center flex-col py-10 relative">
      <h2 class="text-3xl mb-6 text-gray-800 uppercase">Feedback</h2>

      <div class="w-full px-14">
        <div class="relative">
          <button
            @click="prevSlide"
            :disabled="isFirstItem"
            :class="{ 'opacity-50 cursor-not-allowed': isFirstItem }"
            class="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-[#3A4766] text-[#EAE8DA] rounded-full z-20 hover:bg-[#2a3550]"
            aria-label="Previous recommendation"
          >
            <ChevronLeftIcon class="h-6 w-6" />
          </button>

          <div class="overflow-hidden">
            <div class="flex items-center justify-center gap-4">
              <div v-for="feedback in visibleFeedbacks" :key="feedback.id" class="w-1/3 flex-shrink-0">
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
            class="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-[#3A4766] text-[#EAE8DA] rounded-full z-20 hover:bg-[#2a3550]"
            aria-label="Next recommendation"
          >
            <ChevronRightIcon class="h-6 w-6" />
          </button>
        </div>

        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(_, index) in feedbacks.length - 2"
            :key="index"
            @click="goToSlide(index)"
            :class="{ 'bg-[#3A4766]': currentPosition === index, 'bg-gray-300': currentPosition !== index }"
            class="w-3 h-3 rounded-full focus:outline-none"
            :aria-label="`Go to slide ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>
