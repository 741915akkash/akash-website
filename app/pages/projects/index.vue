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

      <p class="mt-5 text-lg leading-8 text-neutral-700">
        Products, AI systems, automation workflows, and experiments built across the stack.
      </p>
    </div>

    <div class="mt-12 grid gap-6 sm:grid-cols-2">
      <ProjectCard
        title="Go Launch Scall"
        description="A product platform I built from idea through implementation, including full-stack product workflows, AI, RAG, CRM, and automation."
        to="/projects/go-launch-scall" />

      <ProjectCard
        title="CRM"
        description="A full-stack CRM with contacts, pipelines, stages, custom fields, tasks, notes, activity, and outreach sequences."
        to="/projects/crm" />

      <ProjectCard
        title="Embeddings + RAG"
        description="An AI retrieval workflow using embeddings and vector search to provide relevant context to AI systems."
        to="/projects/embedding+rag" />

      <ProjectCard
        title="Reddit Lead Generation"
        description="An automated pipeline from Reddit ingestion through LLM scoring, lead analysis, and dashboard presentation."
        to="/projects/reddit-lead-generation" />

      <ProjectCard
        title="Next.js Dashboard"
        description="A dashboard built with Next.js to apply an existing full-stack skillset to the React ecosystem."
        to="/projects/nextjs-dashboard" />

      <CurrentProjectCard
        title="Outreach CRM"
        description="Developing a self-hostable CRM for contacts, pipelines, outreach, and secure AI agent integration."
        to="/projects/outreach-crm-next" />

      <CurrentProjectCard
        title="AI Workflow Platform"
        description="Building AI-powered workflows that turn natural-language goals into executable processes using agents and tools."
        to="/projects/ai-workflow-platform" />
    </div>
  </section>
</template>
