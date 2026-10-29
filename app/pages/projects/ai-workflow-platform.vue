<script setup>
useSeoMeta({
  title: 'AI Workflow Platform — Akash Saini',
  description:
    'An AI workflow platform for creating, executing, and improving workflows using natural language, tools, and AI agents.',
});

const technologies = [
  'Python',
  'FastAPI',
  'LangGraph',
  'PostgreSQL',
  'LLM Integration',
  'Tool Calling',
  'Workflow Engine',
  'Automation',
];

const capabilities = [
  {
    title: 'Workflow Builder',
    text: 'Turn natural-language instructions into structured workflows with steps, dependencies, inputs, outputs, and execution rules.',
  },
  {
    title: 'Workflow Runtime',
    text: 'Execute workflow steps in a controlled environment, track execution state, handle failures, and resume interrupted runs.',
  },
  {
    title: 'AI Agents',
    text: 'Use agents for tasks that require reasoning, research, decisions, or adapting to information discovered during execution.',
  },
  {
    title: 'Tools & Integrations',
    text: 'Connect workflows to external APIs, search, databases, files, and other services through reusable tools.',
  },
  {
    title: 'Workflow Templates',
    text: 'Start with reusable workflows for market research, customer discovery, lead generation, and product validation.',
  },
  {
    title: 'Natural-Language Editing',
    text: 'Modify existing workflows through conversation. Ask the system to add steps, change conditions, or adjust how a workflow operates.',
  },
];
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-16 sm:py-24">
    <section class="max-w-3xl">
      <NuxtLink to="/projects" class="text-sm text-neutral-500 hover:text-black"> ← Projects </NuxtLink>

      <p class="mt-10 text-sm font-medium uppercase tracking-widest text-red-800">
        AI Infrastructure · Workflow Automation
      </p>

      <h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">AI Workflow Platform (work in progress)</h1>

      <p class="mt-6 text-xl leading-8 text-neutral-700">
        A platform where users can describe what they want to accomplish, generate workflows with AI, execute them using
        tools and agents, and improve them through natural-language instructions.
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
          href="https://github.com/741915akkash/idea-validator/tree/main/agent-service"
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
          AI can already generate workflow definitions and automation scripts. The challenge is turning those
          definitions into reliable systems that people can run, inspect, and improve over time.
        </p>

        <p>
          I want to build a platform that combines reusable workflow templates with a natural-language interface for
          creating custom workflows. Users should be able to describe an outcome rather than manually configure every
          step.
        </p>

        <p>
          The platform is designed around a distinction between workflows and agents: workflows control the overall
          process, while agents handle individual tasks that require reasoning and adaptation.
        </p>
      </div>
    </section>

    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Core architecture</p>

      <div class="mt-8 overflow-x-auto rounded-2xl bg-neutral-950 p-8 font-mono text-sm leading-8 text-neutral-200">
        <pre>
User Goal
    ↓
AI Workflow Builder
    ↓
Workflow Definition
    ↓
Validation + Permissions
    ↓
Workflow Runtime
    ↓
┌─────────────────────────┐
│ Execute Next Step       │
│                         │
│ Agent / Tool / Condition│
└────────────┬────────────┘
             ↓
       Execution State
             ↓
      Next Step or Finish
             ↓
     Results + Artifacts
             ↓
       Workspace Data
             ↓
     PostgreSQL / Storage

User Feedback
    ↓
Workflow Revision
    ↓
Updated Definition</pre
        >
      </div>
    </section>

    <section class="mt-24 grid gap-6 sm:grid-cols-2">
      <div v-for="item in capabilities" :key="item.title" class="rounded-2xl border border-neutral-200 p-7">
        <h2 class="text-lg font-semibold">{{ item.title }}</h2>
        <p class="mt-3 leading-7 text-neutral-700">
          {{ item.text }}
        </p>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Execution model</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-700 md:col-span-2">
        <p>
          A workflow is represented as structured data rather than an unstructured sequence of instructions. Each step
          has a defined purpose, inputs, outputs, and execution behavior.
        </p>

        <p>
          The runtime validates the workflow, checks permissions, executes steps, persists results, and determines what
          happens next. AI agents are used where reasoning is needed, while deterministic tools handle predictable
          operations.
        </p>

        <div class="rounded-2xl bg-neutral-100 p-6 font-mono text-sm leading-7 text-neutral-700">
          receive goal<br />
          → generate workflow<br />
          → validate definition<br />
          → execute next step<br />
          → persist state and results<br />
          → continue or pause<br />
          → complete workflow
        </div>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Design principle</p>
      </div>

      <div class="md:col-span-2">
        <blockquote class="text-3xl font-semibold leading-tight tracking-tight">
          Users define outcomes.<br />
          AI builds workflows.<br />
          Runtime controls execution.<br />
          Tools perform actions.<br />
          Feedback improves workflows.
        </blockquote>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">What I'm exploring</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-700 md:col-span-2">
        <p>
          The central engineering challenge is making AI-generated workflows reliable, editable, and observable rather
          than treating them as disposable outputs from a language model.
        </p>

        <p>
          I'm exploring how to combine workflow orchestration, agent execution, reusable templates, persistent state,
          and human approval into one modular platform.
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
