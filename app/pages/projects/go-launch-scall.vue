<script setup>
useSeoMeta({
  title: 'GoLaunchScall — Akash Saini',
  description:
    'A full-stack startup validation platform built with Nuxt, Node.js, PostgreSQL, and AI-assisted research workflows.',
});
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-16 sm:py-24">
    <!-- Hero -->
    <section class="max-w-3xl">
      <NuxtLink to="/projects" class="text-sm text-neutral-500 transition hover:text-black"> ← Projects </NuxtLink>

      <p class="mt-10 text-sm font-medium uppercase tracking-widest text-red-800">Full-Stack Product</p>

      <h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">GoLaunchScall</h1>

      <p class="mt-6 text-xl leading-8 text-neutral-700">
        A startup validation platform that turns founder interviews into structured evidence, analysis, and actionable
        decisions.
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <span
          v-for="tech in ['Nuxt', 'Vue', 'Node.js', 'PostgreSQL', 'REST APIs', 'OpenAI', 'pgvector', 'Docker']"
          :key="tech"
          class="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700">
          {{ tech }}
        </span>
      </div>
    </section>

    <!-- Project Links -->
    <section>
      <div class="mt-8 flex flex-wrap gap-3">
        <a
          href="https://golaunchscall.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-lg bg-[#8B1E1E] px-4 py-2.5 text-sm font-medium text-white">
          Live Project (Make account) ↗
        </a>

        <a
          href="https://github.com/741915akkash/idea-validator/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium transition hover:border-red-900">
          GitHub Code ↗
        </a>
      </div>
    </section>

    <!-- Product Screenshot -->
    <section class="mt-12">
      <a href="https://golaunchscall.com/" target="_blank" rel="noopener noreferrer" class="group block">
        <img
          src="/images/golaunchscall-dashboard.png"
          alt="GoLaunchScall startup validation dashboard"
          class="w-full rounded-2xl border border-neutral-200 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg" />
      </a>
    </section>

    <!-- Overview -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Overview</p>
      </div>

      <div class="space-y-5 text-neutral-700 leading-7 md:col-span-2">
        <p>
          GoLaunchScall is a product I built to help founders systematically validate startup ideas instead of relying
          on intuition alone.
        </p>

        <p>
          The product guides a founder through structured interview and validation workflows, stores the resulting
          evidence, evaluates answers, and builds a persistent workspace around the startup.
        </p>

        <p>
          I built the application end-to-end, including the frontend, backend APIs, database model, validation
          workflows, authentication, AI-assisted research, and the underlying workspace architecture.
        </p>
      </div>
    </section>

    <!-- Problem -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Problem</p>
        <h2 class="mt-3 text-2xl font-semibold tracking-tight">From vague ideas to structured evidence</h2>
      </div>

      <div class="space-y-5 text-neutral-700 leading-7 md:col-span-2">
        <p>
          Early-stage validation often becomes a collection of notes, conversations, assumptions, and disconnected
          research.
        </p>

        <p>
          I wanted the product to turn that process into a structured system: questions produce answers, answers become
          evidence, and evidence can contribute to a larger understanding of the startup.
        </p>

        <p>
          That required more than building a questionnaire. The application needed persistent state, revision handling,
          scoring, workspace knowledge, and a data model capable of evolving with the product.
        </p>
      </div>
    </section>

    <!-- How it works -->
    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">How it works</p>

      <h2 class="mt-3 text-3xl font-semibold tracking-tight">A validation workflow built around persistent state</h2>

      <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(item, index) in [
            {
              title: 'Interview',
              text: 'Founder answers are collected through structured checkpoints and questions.',
            },
            {
              title: 'Store',
              text: 'Answers, evidence, uncertainties, goals, and results are persisted in PostgreSQL.',
            },
            {
              title: 'Analyze',
              text: 'Validation logic and AI-assisted workflows transform raw inputs into structured knowledge.',
            },
            {
              title: 'Decide',
              text: 'The resulting evidence supports validation decisions and identifies what should be tested next.',
            },
          ]"
          :key="item.title"
          class="rounded-2xl border border-neutral-200 p-6">
          <span class="text-sm text-red-800">0{{ index + 1 }}</span>
          <h3 class="mt-4 font-semibold">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-neutral-700">
            {{ item.text }}
          </p>
        </div>
      </div>
    </section>

    <!-- Engineering -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Engineering</p>
        <h2 class="mt-3 text-2xl font-semibold tracking-tight">What I built</h2>
      </div>

      <div class="space-y-8 md:col-span-2">
        <div>
          <h3 class="font-semibold">Frontend architecture</h3>
          <p class="mt-2 leading-7 text-neutral-700">
            Nuxt pages are backed by composables and Pinia state. Quiz navigation, lifecycle state, answers, revisions,
            and workspace state are coordinated without putting all application logic inside individual pages.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">Nitro API layer</h3>
          <p class="mt-2 leading-7 text-neutral-700">
            Server routes handle lifecycle operations, answer persistence, access checks, and database interaction. The
            frontend communicates with the backend through explicit API contracts.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">Workspace model</h3>
          <p class="mt-2 leading-7 text-neutral-700">
            The workspace acts as a persistent boundary for quizzes, artifacts, tasks, interviews, evidence, and agent
            runs. This became the foundation for the later agent architecture.
          </p>
        </div>

        <div>
          <h3 class="font-semibold">AI-assisted research</h3>
          <p class="mt-2 leading-7 text-neutral-700">
            Research workflows can use existing workspace knowledge and produce structured artifacts such as market
            research and competitor analysis.
          </p>
        </div>
      </div>
    </section>

    <!-- Architecture -->
    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Architecture</p>

      <div class="mt-8 overflow-x-auto rounded-2xl bg-neutral-950 p-8 font-mono text-sm leading-8 text-neutral-200">
        <pre>
Nuxt / Vue
    ↓
Composables + Pinia
    ↓
Nitro API
    ↓
Access / Business Logic
    ↓
PostgreSQL + pgvector
    ↓
AI / Research Workflows
    ↓
Workspace Knowledge</pre
        >
      </div>
    </section>

    <!-- Learning -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">What I learned</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-700 md:col-span-2">
        <p>
          The hardest part wasn't building individual features. It was designing boundaries between frontend state,
          APIs, persistence, validation logic, AI workflows, and workspace knowledge.
        </p>

        <p>
          The project also taught me how quickly a product's data model evolves once real workflows are implemented.
          Several parts of the schema were redesigned as the product moved from a simple validation flow toward a
          broader workspace architecture.
        </p>
      </div>
    </section>

    <!-- Back -->
    <section class="mt-24 border-t border-neutral-200 pt-8">
      <NuxtLink to="/projects" class="text-sm font-medium text-red-800 transition hover:text-black">
        ← View all projects
      </NuxtLink>
    </section>
  </div>
</template>
