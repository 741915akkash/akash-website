<script setup>
defineProps({
  company: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },

  period: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <article class="border-b border-neutral-200 py-8 first:pt-0">
    <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 class="font-semibold">
          {{ role }}
        </h3>

        <p class="mt-1 text-sm text-neutral-500">
          {{ company }}
        </p>
      </div>

      <p class="text-sm text-neutral-500">
        {{ period }}
      </p>
    </div>

    <p class="mt-4 max-w-2xl text-sm leading-6 text-neutral-700">
      {{ description }}
    </p>
  </article>
</template>
