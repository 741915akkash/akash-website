<script setup>
useSeoMeta({
  title: 'Next.js Dashboard — Akash Saini',
  description:
    'A full-stack dashboard application built with Next.js, TypeScript, Tailwind CSS, server-side data access, and customer and invoice workflows.',
});
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-16 sm:py-24">
    <!-- Hero -->
    <section class="max-w-3xl">
      <NuxtLink to="/projects" class="text-sm text-neutral-500 transition hover:text-black"> ← Projects </NuxtLink>

      <p class="mt-10 text-sm font-medium uppercase tracking-widest text-red-800">Full-Stack Web Application</p>

      <h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Next.js Dashboard (demo)</h1>

      <p class="mt-6 text-xl leading-8 text-neutral-600">
        A responsive business dashboard built with Next.js App Router, TypeScript, Tailwind CSS, server-side data
        access, and CRUD workflows.
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <span
          v-for="tech in [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'App Router',
            'Server Actions',
            'PostgreSQL',
          ]"
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
          href="https://nextjs-dashboard-one-ochre-53.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-lg bg-[#8B1E1E] px-4 py-2.5 text-sm font-medium text-white">
          Live Project ↗
        </a>

        <a
          href="https://github.com/741915akkash/nextjs-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium transition hover:border-red-900">
          GitHub Code ↗
        </a>
      </div>
    </section>

    <!-- Overview -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Overview</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>This project is a business dashboard application built with Next.js and the App Router.</p>

        <p>
          It contains a dashboard overview, revenue visualization, latest invoices, customer management, invoice
          management, search, pagination, authentication UI, and loading states.
        </p>

        <p>
          The project was particularly useful for getting hands-on experience with the Next.js application architecture
          and the distinction between UI components, route-level pages, server-side data access, and server actions.
        </p>
      </div>
    </section>

    <!-- Architecture -->
    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Architecture</p>

      <h2 class="mt-3 text-3xl font-semibold tracking-tight">Next.js App Router structure</h2>

      <div class="mt-8 overflow-x-auto rounded-2xl bg-neutral-950 p-8 font-mono text-sm leading-8 text-neutral-200">
        <pre>
Next.js App Router
        │
        ├── Dashboard Layout
        │      │
        │      ├── Overview
        │      ├── Customers
        │      └── Invoices
        │
        ├── UI Components
        │      ├── Tables
        │      ├── Forms
        │      ├── Charts
        │      ├── Search
        │      └── Pagination
        │
        ├── Server Actions
        │
        └── Data Layer
               │
               ↓
            Database</pre
        >
      </div>
    </section>

    <!-- Dashboard -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Dashboard</p>

        <h2 class="mt-3 text-2xl font-semibold tracking-tight">Building a real application shell</h2>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>The dashboard is organized around a persistent layout with navigation and separate application sections.</p>

        <p>
          The overview page combines summary cards, revenue information, and recent invoice data into a single
          operational view.
        </p>

        <p>
          Loading skeletons are also used for asynchronous sections so the interface can provide immediate visual
          feedback while data is being prepared.
        </p>
      </div>
    </section>

    <!-- Customers -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Customers</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>
          Customer management is implemented as a dedicated dashboard section with a reusable table component and
          supporting data layer.
        </p>

        <p>
          The project separates customer data definitions from presentation, making the UI components responsible for
          rendering while the data layer handles retrieval and transformation.
        </p>
      </div>
    </section>

    <!-- Invoices -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Invoices</p>

        <h2 class="mt-3 text-2xl font-semibold tracking-tight">CRUD workflow</h2>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>The invoice section demonstrates a more complete application workflow than a read-only dashboard.</p>

        <p>
          It includes invoice tables, status indicators, pagination, breadcrumbs, create forms, edit forms, and action
          controls.
        </p>

        <div class="rounded-2xl bg-neutral-100 p-6 font-mono text-sm leading-7 text-neutral-700">
          Invoice list
          <br />
          ↓
          <br />
          Search / Pagination
          <br />
          ↓
          <br />
          Create / Edit
          <br />
          ↓
          <br />
          Server Action
          <br />
          ↓
          <br />
          Persisted data
        </div>
      </div>
    </section>

    <!-- Components -->
    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Component architecture</p>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in [
            {
              title: 'Dashboard UI',
              text: 'Cards, charts, latest invoices, navigation, and responsive side navigation.',
            },
            {
              title: 'Customer UI',
              text: 'Reusable customer table and supporting data components.',
            },
            {
              title: 'Invoice UI',
              text: 'Tables, forms, buttons, status indicators, pagination, and breadcrumbs.',
            },
            {
              title: 'Search',
              text: 'A dedicated search component connected to the application data flow.',
            },
            {
              title: 'Loading states',
              text: 'Skeleton components and route-level loading UI for asynchronous content.',
            },
            {
              title: 'Shared utilities',
              text: 'Centralized definitions and utility functions shared across application features.',
            },
          ]"
          :key="item.title"
          class="rounded-2xl border border-neutral-200 p-6">
          <h2 class="font-semibold">
            {{ item.title }}
          </h2>

          <p class="mt-3 text-sm leading-6 text-neutral-600">
            {{ item.text }}
          </p>
        </div>
      </div>
    </section>

    <!-- Server-side -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Server-side architecture</p>

        <h2 class="mt-3 text-2xl font-semibold tracking-tight">Keeping data operations separate from UI</h2>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>The application separates the UI layer from data retrieval and mutation logic.</p>

        <p>
          Server-side actions handle application mutations while the data module contains database-facing operations.
          Route handlers are also used for dedicated query and seed endpoints.
        </p>

        <p>
          This structure keeps database operations out of individual visual components and makes the application easier
          to reason about.
        </p>
      </div>
    </section>

    <!-- Responsive -->
    <section class="mt-24 grid gap-6 sm:grid-cols-3">
      <div
        v-for="item in [
          {
            title: 'Responsive UI',
            text: 'Dashboard navigation and content adapt to different screen sizes.',
          },
          {
            title: 'Type safety',
            text: 'TypeScript is used throughout the application for stronger contracts between data and UI.',
          },
          {
            title: 'Reusable components',
            text: 'Common dashboard elements are extracted into focused components rather than duplicated across pages.',
          },
        ]"
        :key="item.title"
        class="rounded-2xl border border-neutral-200 p-7">
        <h2 class="font-semibold">
          {{ item.title }}
        </h2>

        <p class="mt-3 text-sm leading-6 text-neutral-600">
          {{ item.text }}
        </p>
      </div>
    </section>

    <!-- What I learned -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">What I learned</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>
          This project gave me practical experience with Next.js's App Router and its approach to structuring full-stack
          React applications.
        </p>

        <p>
          More importantly, it helped me understand how route structure, layouts, server-side data access, mutations,
          loading states, and reusable components fit together into one application.
        </p>

        <p>It also gave me a concrete foundation for working with the Next.js stack used in modern startup products.</p>
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
