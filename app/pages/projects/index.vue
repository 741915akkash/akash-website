<script setup>
useSeoMeta({
  title: 'Projects — Akash Saini',
  description: 'Selected products, AI systems, and engineering projects built by Akash Saini.',
});
</script>

<template>
  <section class="mx-auto max-w-5xl px-6 py-20">
    <div class="max-w-2xl">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Projects</p>

      <h1 class="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Things I've built.</h1>

      <p class="mt-5 text-lg leading-8 text-neutral-600">
        Products, AI systems, automation workflows, and experiments built across the stack.
      </p>
    </div>

    <div class="mt-12 grid gap-6 sm:grid-cols-2">
      <ProjectCard
        title="Go Launch Scall"
        description="A product platform built from idea through implementation."
        to="/projects/go-launch-scall" />

      <ProjectCard
        title="AI Agent Platform"
        description="A custom runtime for AI agents, tool calling, context, and execution."
        to="/projects/ai-agent-platform" />

      <ProjectCard
        title="Embeddings + RAG"
        description="Embeddings and retrieval infrastructure for AI workflows."
        to="/projects/embedding+rag" />

      <ProjectCard
        title="CRM"
        description="A full-stack CRM with pipelines, tasks, activity, and outreach."
        to="/projects/crm" />

      <ProjectCard
        title="Reddit Lead Generation"
        description="Automated Reddit ingestion, LLM scoring, and lead analysis."
        to="/projects/reddit-lead-generation" />

      <ProjectCard
        title="Next.js Dashboard"
        description="A dashboard built to expand into the React and Next.js ecosystem."
        to="/projects/nextjs-dashboard" />
    </div>
  </section>
</template>
