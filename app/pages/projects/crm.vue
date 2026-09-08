<script setup>
useSeoMeta({
  title: 'CRM — Akash Saini',
  description:
    'A custom CRM built with Nuxt, Node.js, PostgreSQL, pipelines, activities, tasks, and outreach sequences.',
});
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-16 sm:py-24">
    <section class="max-w-3xl">
      <NuxtLink to="/projects" class="text-sm text-neutral-500 hover:text-black"> ← Projects </NuxtLink>

      <p class="mt-10 text-sm font-medium uppercase tracking-widest text-red-800">Full-Stack Product</p>

      <h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">CRM</h1>

      <p class="mt-6 text-xl leading-8 text-neutral-600">
        A custom CRM for managing contacts, pipelines, stages, activities, tasks, notes, and outreach sequences.
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <span
          v-for="tech in ['Nuxt', 'Vue', 'Node.js', 'PostgreSQL', 'REST APIs', 'Sequences', 'Background Jobs']"
          :key="tech"
          class="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-600">
          {{ tech }}
        </span>
      </div>
    </section>

    <!-- Project Links -->
    <section>
      <div class="mt-8 flex flex-wrap gap-3">
        <a
          href="https://www.golaunchscall.com/crm"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-lg bg-[#8B1E1E] px-4 py-2.5 text-sm font-medium text-white">
          Live Project (Make account) ↗
        </a>

        <a
          href="https://github.com/741915akkash/idea-validator/tree/main/server/api/crm"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium transition hover:border-red-900">
          GitHub Code ↗
        </a>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Overview</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>
          I built a CRM as part of GoLaunchScall to manage the people and organizations involved in customer discovery
          and outreach.
        </p>

        <p>
          Rather than treating contacts as a simple list, the system models pipelines, stages, activities, tasks, notes,
          sources, and automated outreach sequences.
        </p>

        <p>
          The result is a reusable workflow for moving a contact from initial discovery through qualification and
          follow-up.
        </p>
      </div>
    </section>

    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Core workflow</p>

      <div class="mt-8 overflow-x-auto rounded-2xl bg-neutral-950 p-8 font-mono text-sm leading-8 text-neutral-200">
        <pre>
Contact
   ↓
Pipeline
   ↓
Stage
   ↓
Activities / Notes / Tasks
   ↓
Outreach Sequence
   ↓
Sequence Steps
   ↓
Follow-up</pre
        >
      </div>
    </section>

    <section class="mt-24 grid gap-6 sm:grid-cols-2">
      <div
        v-for="item in [
          {
            title: 'Contacts & leads',
            text: 'Centralized records for people and companies, with associated sources and activity history.',
          },
          {
            title: 'Pipelines',
            text: 'Contacts can move through configurable pipelines and stages rather than being locked into one fixed workflow.',
          },
          {
            title: 'Activities',
            text: 'Calls, interactions, notes, and other activity provide a timeline around each relationship.',
          },
          {
            title: 'Tasks',
            text: 'Follow-up work can be attached to the CRM workflow so important actions do not disappear into separate notes.',
          },
          {
            title: 'Sequences',
            text: 'Outreach sequences are represented as reusable sequences containing ordered steps.',
          },
          {
            title: 'Evolving data model',
            text: 'The CRM schema evolved from quiz-scoped configuration toward reusable user-level and pipeline-level CRM configuration.',
          },
        ]"
        :key="item.title"
        class="rounded-2xl border border-neutral-200 p-7">
        <h2 class="text-lg font-semibold">{{ item.title }}</h2>
        <p class="mt-3 leading-7 text-neutral-600">
          {{ item.text }}
        </p>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Data model</p>

        <h2 class="mt-3 text-2xl font-semibold tracking-tight">Modeling workflows instead of screens</h2>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>
          One of the more interesting parts of the CRM was deciding which concepts deserved their own persistent
          entities.
        </p>

        <p>
          Pipelines and stages define workflow state. Activities and notes provide history. Tasks represent future work.
          Sequences and sequence steps model repeatable outreach.
        </p>

        <p>This separation keeps the UI from becoming the source of truth for business state.</p>
      </div>
    </section>

    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Architecture</p>

      <div class="mt-8 overflow-x-auto rounded-2xl bg-neutral-950 p-8 font-mono text-sm leading-8 text-neutral-200">
        <pre>
Nuxt / Vue
    ↓
CRM UI + State
    ↓
Nitro API
    ↓
Access / Validation
    ↓
PostgreSQL
    ↓
CRM Entities

Contacts
Pipelines
Stages
Activities
Tasks
Sequences
Sequence Steps</pre
        >
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">What I learned</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>
          Building a CRM showed me how quickly apparently simple CRUD features become workflow and data-model problems.
        </p>

        <p>
          The important engineering decisions were around relationships, ownership, lifecycle state, configuration
          boundaries, and how the model should evolve as the product's use cases expanded.
        </p>

        <p>
          It also gave me practical experience building product infrastructure that is reusable across multiple
          workflows instead of creating one-off screens.
        </p>
      </div>
    </section>

    <section class="mt-24 border-t border-neutral-200 pt-8">
      <NuxtLink to="/projects" class="text-sm font-medium text-red-800 hover:text-black">
        ← View all projects
      </NuxtLink>
    </section>
  </div>
</template>
