<template>
  <div class="flex items-center text-center rounded-md overflow-hidden border border-gray-300 w-28 h-10">
    <button
      type="button"
      class="w-1/3 h-full bg-white hover:bg-gray-100 text-[#3A4766] font-semibold text-lg"
      @click="decrease"
    >
      -
    </button>

    <input
      type="text"
      class="w-1/3 h-full text-center text-[#3A4766] text-sm border-x border-gray-300 focus:outline-none"
      :value="quantity"
      @input="onInput"
    />

    <button
      type="button"
      class="w-1/3 h-full bg-white hover:bg-gray-100 text-[#3A4766] font-semibold text-lg"
      @click="increase"
    >
      +
    </button>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  min: {
    type: Number,
    default: 1,
  },
  max: {
    type: Number,
    default: 99,
  },
});

const emit = defineEmits(['update:modelValue']);
const quantity = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => {
    quantity.value = val;
  }
);

const increase = () => {
  if (quantity.value < props.max) {
    quantity.value++;
    emit('update:modelValue', quantity.value);
  }
};

const decrease = () => {
  if (quantity.value > props.min) {
    quantity.value--;
    emit('update:modelValue', quantity.value);
  }
};

const onInput = (e) => {
  const val = parseInt(e.target.value, 10);
  if (!isNaN(val) && val >= props.min && val <= props.max) {
    quantity.value = val;
    emit('update:modelValue', quantity.value);
  }
};
</script>
