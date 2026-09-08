<script setup>
useSeoMeta({
  title: 'Reddit Lead Generation — Akash Saini',
  description:
    'An automated Reddit intelligence and lead-generation pipeline using RSS, Gmail, Ollama, PostgreSQL, background workers, and a Nuxt dashboard.',
});
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-16 sm:py-24">
    <!-- Hero -->
    <section class="max-w-3xl">
      <NuxtLink to="/projects" class="text-sm text-neutral-500 transition hover:text-black"> ← Projects </NuxtLink>

      <p class="mt-10 text-sm font-medium uppercase tracking-widest text-red-800">AI Automation · Data Pipeline</p>

      <h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Reddit Lead Generation</h1>

      <p class="mt-6 text-xl leading-8 text-neutral-600">
        An automated pipeline that discovers Reddit conversations, scores opportunities with local LLMs, analyzes
        patterns, and turns relevant signals into actionable leads.
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <span
          v-for="tech in [
            'Node.js',
            'RSS',
            'Gmail',
            'Ollama',
            'PostgreSQL',
            'Supabase',
            'Nuxt',
            'PM2',
            'Background Workers',
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
          href="https://lead-finder-wine.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-lg bg-[#8B1E1E] px-4 py-2.5 text-sm font-medium text-white">
          Live Project ↗
        </a>

        <a
          href="https://github.com/741915akkash/idea-validator/blob/main/Agent-Design-Doc.md"
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
        <p>
          I built this system to automatically find useful conversations on Reddit instead of manually searching through
          communities for potential customers or opportunities.
        </p>

        <p>
          The system collects Reddit content from multiple sources, stores the raw data, uses local LLMs to score and
          analyze posts, and exposes the resulting information through a dashboard.
        </p>

        <p>
          As the system evolved, it became a larger event-driven processing pipeline with separate ingestion, scoring,
          analysis, job processing, cleanup, and frontend services.
        </p>
      </div>
    </section>

    <!-- Architecture -->
    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Architecture</p>

      <h2 class="mt-3 text-3xl font-semibold tracking-tight">A pipeline rather than a single AI script</h2>

      <div class="mt-8 overflow-x-auto rounded-2xl bg-neutral-950 p-8 font-mono text-sm leading-8 text-neutral-200">
        <pre>
Reddit Sources
     │
     ├── RSS Feeds
     │
     └── F5Bot → Gmail
             │
             ↓
        Ingestion Layer
             │
             ↓
       PostgreSQL / Supabase
             │
             ↓
        Job / Queue System
             │
       ┌─────┴─────┐
       ↓           ↓
   Ollama       Analysis
   Scoring      Workers
       │           │
       └─────┬─────┘
             ↓
       Structured Data
             │
             ↓
        Nuxt Dashboard
             │
             ↓
     Leads / Applications /
     Resume & Networking
       Packets</pre
        >
      </div>
    </section>

    <!-- Ingestion -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">01 · Ingestion</p>

        <h2 class="mt-3 text-2xl font-semibold tracking-tight">Collecting signals from Reddit</h2>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>The first version uses Reddit RSS feeds to continuously synchronize posts from configured subreddits.</p>

        <p>
          I also built a second ingestion path using F5Bot alerts delivered through Gmail. The service authenticates
          with Gmail, reads incoming alerts, extracts the Reddit information, and can fetch the Reddit post body when
          required.
        </p>

        <p>
          This separation means the downstream processing system does not need to care where a Reddit signal originally
          came from.
        </p>
      </div>
    </section>

    <!-- Scoring -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">02 · AI Scoring</p>

        <h2 class="mt-3 text-2xl font-semibold tracking-tight">Filtering noise before deeper analysis</h2>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>
          Reddit produces a large amount of content, so sending everything through expensive downstream processing would
          be wasteful.
        </p>

        <p>
          I added an Ollama-based scoring stage that evaluates unprocessed posts and assigns a relevance score before
          they move further through the pipeline.
        </p>

        <p>
          The scorer is isolated from ingestion and analysis, allowing the AI processing stage to run independently from
          the systems collecting new data.
        </p>

        <div class="rounded-2xl bg-neutral-100 p-6 font-mono text-sm leading-7 text-neutral-700">
          <pre>
New Reddit Post
      ↓
  Store Raw Data
      ↓
  Check Scored?
      ↓
   Ollama Score
      ↓
  Store Score
      ↓
Relevant Post → Analysis
Low Relevance → Ignore / defer</pre
          >
        </div>
      </div>
    </section>

    <!-- Analysis -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">03 · Analysis</p>

        <h2 class="mt-3 text-2xl font-semibold tracking-tight">Turning posts into structured intelligence</h2>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>The analysis layer is split into independent modules rather than one large prompt.</p>

        <div class="grid gap-3 sm:grid-cols-2">
          <div
            v-for="item in [
              'Post analysis',
              'Pain clustering',
              'ICP discovery',
              'Keyword performance',
              'Subreddit performance',
            ]"
            :key="item"
            class="rounded-xl border border-neutral-200 p-4 text-sm font-medium">
            {{ item }}
          </div>
        </div>

        <p>
          Each analysis module follows a similar pattern: query the relevant data, construct the analysis prompt, run
          the LLM, and save the structured result.
        </p>

        <p>This made it possible to add new analytical dimensions without rewriting the entire pipeline.</p>
      </div>
    </section>

    <!-- Workers -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">04 · Workers</p>

        <h2 class="mt-3 text-2xl font-semibold tracking-tight">Separating ingestion from processing</h2>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>
          As processing became heavier, I moved work into dedicated background workers rather than making ingestion
          perform everything synchronously.
        </p>

        <p>
          Jobs can be claimed, processed, completed, or failed. Different handlers perform different types of work,
          including scoring, post-analysis, ICP analysis, keyword analysis, pain analysis, and subreddit analysis.
        </p>

        <p>PM2 is used to keep the long-running Node.js processes running and restart them when necessary.</p>
      </div>
    </section>

    <!-- Job Pipeline -->
    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Job processing</p>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(item, index) in [
            {
              title: 'Capture',
              text: 'Collect a Reddit signal or job posting.',
            },
            {
              title: 'Normalize',
              text: 'Convert incoming data into a consistent internal representation.',
            },
            {
              title: 'Queue',
              text: 'Create processing work that can be claimed by a worker.',
            },
            {
              title: 'Process',
              text: 'Run scoring, parsing, analysis, validation, and persistence.',
            },
          ]"
          :key="item.title"
          class="rounded-2xl border border-neutral-200 p-6">
          <span class="text-sm text-red-800"> 0{{ index + 1 }} </span>

          <h3 class="mt-4 font-semibold">
            {{ item.title }}
          </h3>

          <p class="mt-2 text-sm leading-6 text-neutral-600">
            {{ item.text }}
          </p>
        </div>
      </div>
    </section>

    <!-- Evolution -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Evolution</p>

        <h2 class="mt-3 text-2xl font-semibold tracking-tight">From Reddit leads to a broader job pipeline</h2>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>
          The original system was focused on discovering potential leads from Reddit. I later extended the same
          processing ideas into a job ingestion and screening pipeline.
        </p>

        <p>
          The newer pipeline captures job postings, detects their source, normalizes the data, extracts technologies,
          analyzes companies, evaluates salary information, validates structured AI output, and stores the resulting job
          analysis.
        </p>

        <p>This eventually connected to application tracking and automated resume and networking packet generation.</p>
      </div>
    </section>

    <!-- Dashboard -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Dashboard</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>The pipeline has a Nuxt-based frontend for inspecting processed data and filtering results.</p>

        <p>
          Separate frontend applications exist for the Reddit dashboard and the broader job-search workflow, with Nitro
          API routes providing access to the underlying Supabase data.
        </p>
      </div>
    </section>

    <!-- Engineering Decisions -->
    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Engineering decisions</p>

      <div class="mt-8 grid gap-6 sm:grid-cols-2">
        <div
          v-for="item in [
            {
              title: 'Independent services',
              text: 'Ingestion, scoring, analysis, cleanup, and job processing can evolve independently.',
            },
            {
              title: 'Queue-based processing',
              text: 'Heavy AI work is separated from data collection so one slow model call does not block ingestion.',
            },
            {
              title: 'Local LLMs',
              text: 'Ollama allows scoring and analysis to run locally, reducing dependence on external model APIs during development.',
            },
            {
              title: 'Structured persistence',
              text: 'AI results are stored as application data rather than remaining trapped inside model responses.',
            },
          ]"
          :key="item.title"
          class="rounded-2xl border border-neutral-200 p-7">
          <h2 class="text-lg font-semibold">
            {{ item.title }}
          </h2>

          <p class="mt-3 leading-7 text-neutral-600">
            {{ item.text }}
          </p>
        </div>
      </div>
    </section>

    <!-- What I learned -->
    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">What I learned</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>
          The main lesson was that AI automation becomes much more useful when it is treated as a systems problem rather
          than a prompt-engineering problem.
        </p>

        <p>
          Reliable ingestion, queues, retries, persistence, validation, worker isolation, and observability are just as
          important as the model call itself.
        </p>

        <p>
          This project also gave me practical experience designing long-running Node.js workers and gradually
          decomposing a growing automation into smaller services.
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
