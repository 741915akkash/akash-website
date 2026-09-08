<script setup>
useSeoMeta({
  title: 'AI Agent Platform — Akash Saini',
  description:
    'A custom AI agent runtime with tools, artifacts, workspace context, execution policies, and persistent knowledge.',
});
</script>

<template>
  <div class="mx-auto max-w-5xl px-6 py-16 sm:py-24">
    <section class="max-w-3xl">
      <NuxtLink to="/projects" class="text-sm text-neutral-500 hover:text-black"> ← Projects </NuxtLink>

      <p class="mt-10 text-sm font-medium uppercase tracking-widest text-red-800">AI Infrastructure</p>

      <h1 class="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">AI Agent Platform</h1>

      <p class="mt-6 text-xl leading-8 text-neutral-600">
        A custom execution layer for AI agents with runtime control, tool calling, workspace context, structured
        artifacts, and persistent knowledge.
      </p>

      <div class="mt-8 flex flex-wrap gap-2">
        <span
          v-for="tech in [
            'Node.js',
            'PostgreSQL',
            'OpenAI',
            'Agent Runtime',
            'Tool Calling',
            'Artifacts',
            'Workspaces',
            'Nuxt',
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
          href="https://github.com/741915akkash/idea-validator/blob/main/Agent-Design-Doc.md"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium transition hover:border-red-900">
          GitHub Code ↗
        </a>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">The idea</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>
          I wanted to understand what it takes to build an actual agent system, rather than simply sending a prompt to
          an LLM and calling the result an agent.
        </p>

        <p>
          The platform separates reasoning from execution. Agents decide what needs to happen, the runtime controls
          execution, tools perform deterministic actions, and artifacts become reusable workspace knowledge.
        </p>
      </div>
    </section>

    <section class="mt-24 border-t border-neutral-200 pt-12">
      <p class="text-sm font-medium uppercase tracking-widest text-red-800">Core architecture</p>

      <div class="mt-8 overflow-x-auto rounded-2xl bg-neutral-950 p-8 font-mono text-sm leading-8 text-neutral-200">
        <pre>
Workspace
    ↓
Goal / Workflow
    ↓
Agent Plan
    ↓
Agent
    ↓
LLM
    ↓
┌───────────────┐
│ tool OR finish│
└───────┬───────┘
        ↓
     Runtime
        ↓
      Tools
        ↓
 External Systems

        ↓

Artifacts + Tasks
        ↓
 PostgreSQL
        ↓
Workspace Knowledge</pre
        >
      </div>
    </section>

    <section class="mt-24 grid gap-6 sm:grid-cols-2">
      <div
        v-for="item in [
          {
            title: 'Runtime',
            text: 'Owns the execution loop, protocol validation, iteration limits, tool execution, runtime state, errors, and execution metrics.',
          },
          {
            title: 'Agents',
            text: 'Own reasoning responsibilities. An agent receives workspace context and produces structured output without directly executing tools or accessing the database.',
          },
          {
            title: 'Tools',
            text: 'Stateless capabilities with explicit input and output contracts. Examples include browser, search, RSS, and calculator tools.',
          },
          {
            title: 'Artifacts',
            text: 'Structured pieces of workspace knowledge produced by agents and persisted with lifecycle and revision information.',
          },
          {
            title: 'Workspace',
            text: 'Provides the context boundary. Agents consume approved knowledge and can contribute new knowledge back to the workspace.',
          },
          {
            title: 'Registries',
            text: 'Agents and tools are discovered through registries rather than being hard-coded into the runtime execution path.',
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
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Runtime loop</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>Each run creates runtime state and repeatedly asks the LLM for the next action.</p>

        <p>
          The model must return a structured protocol response. When the action is a tool request, the runtime validates
          the request, executes the registered tool, stores the result, and continues the conversation.
        </p>

        <p>When the model finishes, the runtime validates the structured output before the result is returned.</p>

        <div class="rounded-2xl bg-neutral-100 p-6 font-mono text-sm leading-7 text-neutral-700">
          create state<br />
          → ask LLM<br />
          → validate response<br />
          → execute tools<br />
          → append results<br />
          → continue<br />
          → finish
        </div>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Design principle</p>
      </div>

      <div class="md:col-span-2">
        <blockquote class="text-3xl font-semibold leading-tight tracking-tight">
          Runtime executes.<br />
          Agents think.<br />
          Tools act.<br />
          Artifacts remember.<br />
          Humans decide.
        </blockquote>
      </div>
    </section>

    <section class="mt-24 grid gap-12 border-t border-neutral-200 pt-12 md:grid-cols-3">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">What I learned</p>
      </div>

      <div class="space-y-5 leading-7 text-neutral-600 md:col-span-2">
        <p>
          Building an agent system made the distinction between an LLM call and an agent much clearer. The interesting
          engineering work is around execution, contracts, state, tools, persistence, and failure handling.
        </p>

        <p>
          I also learned that persistent knowledge needs its own model. Treating every LLM response as ephemeral
          conversation makes it difficult to build systems that improve over time.
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
