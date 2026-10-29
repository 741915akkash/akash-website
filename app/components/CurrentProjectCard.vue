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
    class="group relative block overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:bg-[radial-gradient(ellipse_at_top_right,_#FECACA_0%,_#FFF7F7_38%,_#FFFFFF_75%)]">
    <div class="flex items-center justify-between gap-3">
      <h3 class="text-base font-semibold text-neutral-950">
        {{ title }}
      </h3>

      <span class="rounded-full bg-[#8B1E1E] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
        Current
      </span>
    </div>

    <p class="mt-3 text-sm leading-6 text-neutral-700">
      {{ description }}
    </p>

    <span
      class="mt-4 inline-block text-sm font-medium text-red-800 transition-transform duration-300 group-hover:translate-x-1">
      View project →
    </span>
  </NuxtLink>
</template>
