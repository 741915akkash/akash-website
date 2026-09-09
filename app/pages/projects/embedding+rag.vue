<script setup>
useSeoMeta({
  title: 'Embeddings + RAG — Akash Saini',
  description: 'An embeddings and retrieval pipeline using OpenAI embeddings and PostgreSQL with pgvector.',
});
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-16 sm:py-24">
    <section class="max-w-3xl">
      <NuxtLink to="/projects" class="text-sm text-neutral-500 hover:text-black"> ← Projects </NuxtLink>

      <p class="mt-10 text-sm font-medium uppercase tracking-widest text-red-800">AI / Retrieval</p>

      <h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Embeddings + RAG</h1>

      <p class="mt-6 text-xl leading-8 text-neutral-700">
        A semantic retrieval system that turns structured research knowledge into reusable context for AI-powered
        workflows.
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <span
          v-for="tech in [
            'OpenAI Embeddings',
            'text-embedding-3-small',
            'PostgreSQL',
            'pgvector',
            'Node.js',
            'Semantic Search',
          ]"
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
          href="https://github.com/741915akkash/idea-validator/tree/main/server/services/interviewEngine"
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

      <div class="space-y-5 leading-7 text-neutral-700 md:col-span-2">
        <p>
          I built a retrieval layer so previously generated and validated knowledge could be reused instead of asking
          the model to rediscover the same information every time.
        </p>

        <p>
          Text is converted into vector embeddings and stored alongside the structured knowledge. Queries can then find
          semantically similar information using PostgreSQL and pgvector.
        </p>
      </div>
    </section>

    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Retrieval flow</p>

      <div class="mt-8 overflow-x-auto rounded-2xl bg-neutral-950 p-8 font-mono text-sm leading-8 text-neutral-200">
        <pre>
Research / Structured Knowledge
            ↓
        Text Representation
            ↓
     OpenAI Embeddings API
            ↓
       Vector Embedding
            ↓
     PostgreSQL + pgvector
            ↓
       Similarity Search
            ↓
    Confidence / Level Filter
            ↓
      Best Matching Knowledge
            ↓
        AI Workflow</pre
        >
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Embeddings</p>

        <h2 class="mt-3 text-2xl font-semibold tracking-tight">Turning meaning into searchable vectors</h2>
      </div>

      <div class="space-y-5 leading-7 text-neutral-700 md:col-span-2">
        <p>
          The system uses OpenAI's
          <code class="rounded bg-neutral-100 px-1.5 py-0.5 text-sm"> text-embedding-3-small </code>
          model to convert text into a numerical representation.
        </p>

        <p>
          The resulting embedding is stored in PostgreSQL using the pgvector extension, allowing semantic similarity
          queries to happen alongside the application's relational data.
        </p>

        <pre class="overflow-x-auto rounded-2xl bg-neutral-100 p-6 text-sm leading-7 text-neutral-700">
const response = await openai.embeddings.create({
  model: 'text-embedding-3-small',
  input: text
})

const embedding = response.data[0].embedding</pre
        >
      </div>
    </section>

    <section class="mt-24 grid gap-6 sm:grid-cols-3">
      <div
        v-for="item in [
          {
            title: 'Vector search',
            text: 'Similarity is calculated directly inside PostgreSQL using pgvector.',
          },
          {
            title: 'Structured data',
            text: 'Retrieved knowledge remains connected to its structured application data.',
          },
          {
            title: 'Confidence filtering',
            text: 'Retrieval can restrict results by confidence and knowledge level before selecting the best match.',
          },
        ]"
        :key="item.title"
        class="rounded-2xl border border-neutral-200 p-7">
        <h2 class="font-semibold">{{ item.title }}</h2>
        <p class="mt-3 text-sm leading-6 text-neutral-700">
          {{ item.text }}
        </p>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Why PostgreSQL?</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-700 md:col-span-2">
        <p>
          Keeping vector search inside PostgreSQL meant the semantic layer could live beside the application's existing
          relational data rather than introducing a completely separate storage system.
        </p>

        <p>
          This also made it possible to combine semantic similarity with application-level constraints such as
          confidence scores and knowledge levels.
        </p>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">What I learned</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-700 md:col-span-2">
        <p>
          RAG is not just “put text into a vector database.” The useful part is designing what should become knowledge,
          how it is represented, how it is filtered, and how the retrieved result fits into the larger application
          workflow.
        </p>

        <p>This project became one of the building blocks for the broader workspace and agent architecture.</p>
      </div>
    </section>

    <section class="mt-24 border-t border-neutral-200 pt-8">
      <NuxtLink to="/projects" class="text-sm font-medium text-red-800 hover:text-black">
        ← View all projects
      </NuxtLink>
    </section>
  </div>
</template>
