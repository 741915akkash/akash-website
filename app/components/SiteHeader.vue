<script setup>
const links = [
  {
    label: 'About',
    to: '/about',
    type: 'link',
  },
  {
    label: 'Projects',
    to: '/projects',
    type: 'link',
  },
  {
    label: 'Resume',
    to: '/Akash-Saini-Resume.pdf',
    type: 'download',
  },
];
</script>

<template>
  <header class="border-b border-neutral-200">
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
      <NuxtLink to="/" class="text-xl font-semibold tracking-tight text-[#8B1E1E] transition hover:text-[#721919]">
        Akash Saini
      </NuxtLink>

      <div class="flex items-center gap-6 text-sm">
        <template v-for="link in links" :key="link.label">
          <NuxtLink v-if="link.type === 'link'" :to="link.to" class="text-neutral-600 transition hover:text-[#8B1E1E]">
            {{ link.label }}
          </NuxtLink>

          <a v-else :href="link.to" download class="text-neutral-600 transition hover:text-[#8B1E1E]">
            {{ link.label }}
          </a>
        </template>
      </div>
    </nav>
  </header>
</template>
