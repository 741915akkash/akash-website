<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="group block rounded-xl border border-neutral-200 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#8B1E1E] hover:shadow-[0_8px_24px_rgba(139,30,30,0.08)]">
    <h3 class="font-semibold transition-colors duration-200 group-hover:text-[#8B1E1E]">
      {{ title }}
    </h3>

    <p class="mt-2 leading-7 text-neutral-600">
      {{ description }}
    </p>

    <span
      class="mt-5 inline-block text-sm font-medium text-neutral-800 transition-colors duration-200 group-hover:text-[#8B1E1E]">
      View project →
    </span>
  </NuxtLink>
</template>
