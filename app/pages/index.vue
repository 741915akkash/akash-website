<script setup>
useSeoMeta({
  title: 'Akash Saini — Full-stack developer · AI · Startup Builder',
  description: 'Full-stack developer and startup builder building AI-powered products, agent systems, and automation.',
});
</script>

<template>
  <div>
    <!-- Contact Strip -->

    <section class="border-b border-neutral-200">
      <div
        class="mx-auto grid max-w-5xl grid-cols-2 items-center justify-items-center gap-y-2 px-6 py-3 text-xs font-semibold sm:flex sm:justify-center sm:gap-10 sm:text-sm">
        <a href="tel:+917419257564" class="text-neutral-700 transition hover:text-[#8B1E1E]"> +91 7419257564 </a>

        <a href="mailto:iakashsaini9@gmail.com" class="text-neutral-700 transition hover:text-[#8B1E1E]">
          iakashsaini9@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/741915-akash-saini/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-neutral-700 transition hover:text-[#8B1E1E]">
          LinkedIn
        </a>

        <a
          href="https://github.com/741915akkash/idea-validator"
          target="_blank"
          rel="noopener noreferrer"
          class="text-neutral-700 transition hover:text-[#8B1E1E]">
          GitHub
        </a>
      </div>
    </section>

    <!-- Hero -->
    <section class="mx-auto max-w-5xl px-6 pb-24 pt-24 sm:pt-32">
      <div class="max-w-3xl">
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">
          Full-stack developer · AI · Startup Builder
        </p>

        <h1 class="mt-5 text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
          I build and ship AI-powered products end-to-end.
        </h1>

        <p class="mt-7 max-w-2xl text-lg leading-8 text-neutral-700">
          I work across frontend, backend, databases, infrastructure, and AI systems — turning ideas into working
          products.
        </p>

        <div class="mt-9 flex flex-wrap gap-3">
          <NuxtLink to="/projects" class="rounded-lg bg-[#8B1E1E] px-5 py-3 text-sm font-medium text-white">
            View Projects
          </NuxtLink>

          <a
            href="/Akash-Saini-Resume.pdf"
            download
            class="rounded-lg border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 transition hover:border-[#721919] hover:text-[#721919]">
            Download Resume
          </a>
        </div>
      </div>
    </section>

    <!-- What I Build -->
    <section class="border-y border-neutral-200">
      <div class="mx-auto max-w-5xl px-6 py-20">
        <div class="max-w-2xl">
          <p class="text-sm font-medium uppercase tracking-widest text-red-800">What I build</p>

          <h2 class="mt-3 text-3xl font-semibold tracking-tight">From product idea to working system.</h2>
        </div>

        <div class="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 class="font-semibold">Full-Stack Products</h3>
            <p class="mt-2 leading-7 text-neutral-700">Frontend, APIs, databases, product workflows, and deployment.</p>
          </div>

          <div>
            <h3 class="font-semibold">AI Systems</h3>
            <p class="mt-2 leading-7 text-neutral-700">
              LLM integrations, embeddings, RAG, AI workflows, and automation.
            </p>
          </div>

          <div>
            <h3 class="font-semibold">Agent Systems</h3>
            <p class="mt-2 leading-7 text-neutral-700">
              Tool calling, execution loops, context, persistence, and reusable agent infrastructure.
            </p>
          </div>

          <div>
            <h3 class="font-semibold">Automation</h3>
            <p class="mt-2 leading-7 text-neutral-700">
              Background workers, scheduled workflows, integrations, and data-processing pipelines.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology -->
    <section>
      <div class="mx-auto max-w-5xl px-6 py-20">
        <div class="max-w-2xl">
          <p class="text-sm font-medium uppercase tracking-widest text-red-800">Technology</p>

          <h2 class="mt-3 text-3xl font-semibold tracking-tight">Comfortable across the stack.</h2>

          <p class="mt-5 leading-7 text-neutral-700">
            I learn new technologies by building with them. My focus is understanding the underlying engineering
            problems, not being tied to one framework.
          </p>
        </div>

        <div class="mt-10 space-y-4 text-sm">
          <div class="flex gap-4">
            <span class="w-36 shrink-0 font-medium">Frontend</span>
            <span class="text-neutral-700"> Nuxt.js/Vue · Next.js/React· Tailwind CSS · Axios </span>
          </div>

          <div class="flex gap-4">
            <span class="w-36 shrink-0 font-medium">Backend</span>
            <span class="text-neutral-700"> Node.js · Express.js · REST APIs </span>
          </div>

          <div class="flex gap-4">
            <span class="w-36 shrink-0 font-medium">Database</span>
            <span class="text-neutral-700"> PostgreSQL · Supabase </span>
          </div>

          <div class="flex gap-4">
            <span class="w-36 shrink-0 font-medium">AI & Agent Systems</span>
            <span class="text-neutral-700">
              OpenAI API · Ollama · Agent Loops · Tool Calling · Agent Memory · pgvector
            </span>
          </div>

          <div class="flex gap-4">
            <span class="w-36 shrink-0 font-medium">Automation & Runtime</span>
            <span class="text-neutral-700"> PM2 · RSS Pipelines · Background Workers </span>
          </div>

          <div class="flex gap-4">
            <span class="w-36 shrink-0 font-medium">Cloud & DevOps</span>
            <span class="text-neutral-700">
              AWS · Docker · Terraform · Git · GitHub · Linux · WSL2 · Vercel · Railway
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="border-y border-neutral-200">
      <div class="mx-auto max-w-5xl px-6 py-20">
        <div class="flex items-end justify-between gap-6">
          <div>
            <p class="text-sm font-medium uppercase tracking-widest text-red-800">Selected projects</p>

            <h2 class="mt-3 text-3xl font-semibold tracking-tight">Things I've actually built.</h2>
          </div>

          <NuxtLink to="/projects" class="hidden text-sm font-medium text-neutral-700 hover:text-black sm:block">
            View all →
          </NuxtLink>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2">
          <ProjectCard
            title="Go Launch Scall"
            description="A product platform I built from idea through implementation, including full-stack product workflows, AI, RAG, CRM, and automation."
            to="/projects/go-launch-scall" />

          <ProjectCard
            title="AI Agent Platform"
            description="A custom agent runtime for tool calling, execution loops, workspace context, persistent knowledge, and artifacts."
            to="/projects/ai-agent-platform" />

          <ProjectCard
            title="Embeddings + RAG"
            description="An AI retrieval workflow using embeddings and vector search to provide relevant context to AI systems."
            to="/projects/embedding+rag" />

          <ProjectCard
            title="CRM"
            description="A full-stack CRM with contacts, pipelines, stages, custom fields, tasks, notes, activity, and outreach sequences."
            to="/projects/crm" />

          <ProjectCard
            title="Reddit Lead Generation"
            description="An automated pipeline from Reddit ingestion through LLM scoring, lead analysis, and dashboard presentation."
            to="/projects/reddit-lead-generation" />

          <ProjectCard
            title="Next.js Dashboard"
            description="A dashboard built with Next.js to apply an existing full-stack scallset to the React ecosystem."
            to="/projects/nextjs-dashboard" />
        </div>
      </div>
    </section>

    <!-- How I Work -->
    <section>
      <div class="mx-auto max-w-5xl px-6 py-20">
        <div class="max-w-2xl">
          <p class="text-sm font-medium uppercase tracking-widest text-red-800">How I work</p>

          <h2 class="mt-3 text-3xl font-semibold tracking-tight">How I approach engineering.</h2>
        </div>

        <div class="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 class="font-semibold">Independent Ownership</h3>
            <p class="mt-2 leading-7 text-neutral-700">
              I like owning problems from idea through implementation and deployment rather than working only on
              isolated pieces.
            </p>
          </div>

          <div>
            <h3 class="font-semibold">Fast Learner</h3>
            <p class="mt-2 leading-7 text-neutral-700">
              When I encounter unfamiliar technology, I prefer building something real with it and learning through
              implementation.
            </p>
          </div>

          <div>
            <h3 class="font-semibold">Systems Thinking</h3>
            <p class="mt-2 leading-7 text-neutral-700">
              I think about how frontend, backend, data, infrastructure, and AI components work together as one system.
            </p>
          </div>

          <div>
            <h3 class="font-semibold">0→1 Product Development</h3>
            <p class="mt-2 leading-7 text-neutral-700">
              I bias toward getting a working product shipped, learning from it, and improving it rather than
              over-planning the first version.
            </p>
          </div>

          <div>
            <h3 class="font-semibold">Problem Solver</h3>
            <p class="mt-2 leading-7 text-neutral-700">
              I enjoy breaking ambiguous problems into smaller systems and figuring out the implementation as I go.
            </p>
          </div>

          <div>
            <h3 class="font-semibold">Shipping Mindset</h3>
            <p class="mt-2 leading-7 text-neutral-700">
              I'm comfortable researching, experimenting, debugging, and finding a path forward without needing every
              step predefined.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Experience -->
    <section class="border-y border-neutral-200">
      <div class="mx-auto max-w-5xl px-6 py-20">
        <p class="text-sm font-medium uppercase tracking-widest text-red-800">Experience</p>

        <h2 class="mt-3 text-3xl font-semibold tracking-tight">Where I've worked.</h2>

        <div class="mt-12 space-y-10">
          <ExperienceItem
            company="Go Launch Scall"
            role="Founder"
            period="May 2024 — Present"
            description="Building and shipping full-stack products, AI systems, CRM workflows, and automation." />

          <ExperienceItem
            company="Nora Nora"
            role="DevOps Engineer"
            period="March 2023 — April 2024"
            description="AWS, Linux, Docker, Terraform, and infrastructure." />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section>
      <div class="mx-auto max-w-5xl px-6 py-24">
        <div class="rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-12 text-center sm:px-12">
          <h2 class="text-3xl font-semibold tracking-tight">Looking for an early-stage engineer?</h2>

          <p class="mx-auto mt-4 max-w-xl leading-7 text-neutral-700">
            I’m looking for a team where I can take ownership, build end-to-end, move quickly, and help turn ideas into
            shipped products.
          </p>

          <a
            href="mailto:iakashsaini9@gmail.com"
            class="mt-8 inline-flex rounded-lg bg-[#8B1E1E] px-6 py-3 text-sm font-medium text-white">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
