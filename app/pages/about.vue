<script setup>
useSeoMeta({
  title: 'About — Akash Saini',
  description: 'About Akash Saini, Full-stack developer and startup builder.',
});
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-20">
    <p class="text-sm font-medium uppercase tracking-widest text-red-800">About</p>

    <h1 class="mt-3 text-4xl font-semibold tracking-tight">I like building things from zero.</h1>

    <div class="mt-8 space-y-6 text-lg leading-8 text-neutral-600">
      <p>I'm a Full-stack developer and startup builder focused on building products from idea through deployment.</p>

      <p>
        I work across frontend, backend, infrastructure, and AI systems, particularly with JavaScript/TypeScript,
        Node.js, Vue/Nuxt, PostgreSQL, LLMs, RAG, and automation.
      </p>

      <p>
        I'm particularly interested in early-stage environments where engineers have significant ownership and work
        closely with founders and users.
      </p>
    </div>

    <div class="mt-12">
      <NuxtLink to="/projects" class="text-sm font-medium hover:underline"> See what I've built → </NuxtLink>
    </div>
  </section>
</template>
