<script setup>
useSeoMeta({
  title: 'Outreach CRM — Akash Saini',
  description:
    'A self-hostable outreach CRM with contact management, sales pipelines, tasks, outreach sequences, role-based permissions, and AI agent integration.',
});

const technologies = [
  'Next.js',
  'TypeScript',
  'PostgreSQL',
  'REST APIs',
  'Authentication',
  'RBAC',
  'AI Agents',
  'Docker',
];

const modules = [
  {
    title: 'Contact Management',
    text: 'Manage contacts and companies, organize customer information, and maintain a unified record of interactions and notes.',
  },
  {
    title: 'Sales Pipelines',
    text: 'Track opportunities through customizable pipelines and stages, with custom fields and a clear view of progress.',
  },
  {
    title: 'Tasks & Activities',
    text: 'Create tasks, record notes, and track activities to keep outreach organized and make follow-ups easier.',
  },
  {
    title: 'Outreach Sequences',
    text: 'Organize repeatable outreach workflows, manage follow-up steps, and track activity across prospects.',
  },
  {
    title: 'Team Permissions',
    text: 'Support owner, admin, and member roles with explicit permissions for managing users and accessing CRM capabilities.',
  },
  {
    title: 'AI Agent Access',
    text: 'Allow AI agents to work with CRM data through explicitly permitted operations, with access controlled by the application.',
  },
];
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-16 sm:py-24">
    <section class="max-w-3xl">
      <NuxtLink to="/projects" class="text-sm text-neutral-500 hover:text-black"> ← Projects </NuxtLink>

      <p class="mt-10 text-sm font-medium uppercase tracking-widest text-red-800">SaaS · CRM · Automation</p>

      <h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Outreach CRM -- Next.js (work in progress)</h1>

      <p class="mt-6 text-xl leading-8 text-neutral-700">
        A self-hostable CRM for managing contacts, pipelines, activities, and outreach, designed with team permissions
        and AI agent integration as part of the architecture.
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <span
          v-for="tech in technologies"
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
          href="https://github.com/741915akkash/outreach-crm-next"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-lg bg-[#8B1E1E] px-4 py-2.5 text-sm font-medium text-white">
          GitHub Code ↗
        </a>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">The idea</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-700 md:col-span-2">
        <p>
          I wanted to build a CRM that brings contact management, pipeline tracking, and outreach into one system
          without making the product unnecessarily complex.
        </p>

        <p>
          The initial design supports one workspace per installation, individual user accounts, and explicit roles. This
          keeps the deployment model straightforward while allowing a team to collaborate with different levels of
          access.
        </p>

        <p>
          A key design consideration is AI agent access. Agents should use controlled application interfaces and receive
          only the permissions they need rather than having unrestricted access to the database.
        </p>
      </div>
    </section>

    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Core architecture</p>

      <div class="mt-8 overflow-x-auto rounded-2xl bg-neutral-950 p-8 font-mono text-sm leading-8 text-neutral-200">
        <pre>
Users / AI Agents
        ↓
Authentication
        ↓
Authorization + Permissions
        ↓
Application API
        ↓
┌───────────────────────────┐
│ Contacts                  │
│ Companies                 │
│ Pipelines + Stages        │
│ Tasks + Notes + Activities│
│ Outreach Sequences        │
└─────────────┬─────────────┘
              ↓
       PostgreSQL
              ↓
       Persistent Data

Background Workers
        ↓
Scheduled Jobs / Integrations</pre
        >
      </div>
    </section>

    <section class="mt-24 grid gap-6 sm:grid-cols-2">
      <div v-for="item in modules" :key="item.title" class="rounded-2xl border border-neutral-200 p-7">
        <h2 class="text-lg font-semibold">{{ item.title }}</h2>
        <p class="mt-3 leading-7 text-neutral-700">
          {{ item.text }}
        </p>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Access model</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-700 md:col-span-2">
        <p>
          The initial deployment represents one company or team. Each human user has an individual account and a defined
          role, while AI agents receive explicit permissions for the operations they can perform.
        </p>

        <p>
          Authorization belongs in the application layer, not just the user interface. Every protected operation must
          validate the requesting identity and permissions before accessing or changing CRM data.
        </p>

        <div class="rounded-2xl bg-neutral-100 p-6 font-mono text-sm leading-7 text-neutral-700">
          authenticate request<br />
          → identify user or agent<br />
          → check permissions<br />
          → validate operation<br />
          → read or update CRM data<br />
          → record relevant activity
        </div>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Design principle</p>
      </div>

      <div class="md:col-span-2">
        <blockquote class="text-3xl font-semibold leading-tight tracking-tight">
          Multi Tenant SaaS.<br />
          Multi workspace per installation.<br />
          One identity per user.<br />
          Explicit permissions for agents.<br />
          Structured data at the core.<br />
          Automation where it adds value.
        </blockquote>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">What I'm exploring</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-700 md:col-span-2">
        <p>
          The interesting challenge is designing a CRM that remains simple for people while exposing safe, predictable
          interfaces for automation and AI agents.
        </p>

        <p>
          I'm focusing on a clear data model, role-based access control, maintainable application boundaries, and a
          foundation that can support more advanced workflows over time.
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
