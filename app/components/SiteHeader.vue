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
  <header class="sticky top-0 z-50 border-b border-neutral-200 bg-white">
    <nav
      class="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
      <NuxtLink
        to="/"
        class="text-lg font-semibold tracking-tight text-[#8B1E1E] transition hover:text-[#721919] sm:text-2xl md:text-2xl lg:text-3xl">
        Akash Saini
      </NuxtLink>

      <div class="flex flex-wrap items-center justify-center gap-4 text-sm font-medium sm:gap-8 sm:text-base">
        <template v-for="link in links" :key="link.label">
          <NuxtLink v-if="link.type === 'link'" :to="link.to" class="text-neutral-800 transition hover:text-[#8B1E1E]">
            {{ link.label }}
          </NuxtLink>

          <a v-else :href="link.to" download class="text-neutral-800 transition hover:text-[#8B1E1E]">
            {{ link.label }}
          </a>
        </template>

        <a
          href="mailto:iakashsaini9@gmail.com"
          class="rounded-lg bg-[#8B1E1E] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#721919]">
          Get in touch
        </a>
      </div>
    </nav>
  </header>
</template>
