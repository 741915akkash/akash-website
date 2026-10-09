<script setup>
useSeoMeta({
  title: 'About — Akash Saini',
  description: 'About Akash Saini, Full-stack developer and startup builder.',
});

function openContact() {
  const email = 'iakashsaini9@gmail.com';
  const subject = "Let's work together";

  if (window.innerWidth <= 768) {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  } else {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;

    window.open(gmailUrl, '_blank');
  }
}
</script>

<template>
  <section class="mx-auto max-w-3xl px-6 py-20">
    <p class="text-sm font-medium uppercase tracking-widest text-red-800">About</p>

    <h1 class="mt-3 text-4xl font-semibold tracking-tight">I like understanding how things work</h1>

    <div class="mt-8 space-y-6 text-md leading-8 text-neutral-900">
      <p>I'm a full-stack developer and startup builder.</p>

      <p>I work across frontend, backend, infrastructure, and AI systems.</p>

      <p>I mainly use JavaScript/TypeScript, Node.js, Vue/Nuxt, PostgreSQL, LLMs, RAG, and automation.</p>

      <p>
        I started a consulting business and built products for different problems. And learned lead generation, sales,
        and copywriting along the way
      </p>

      <p><strong>I take the problem and make it happen as fast as possible.</strong></p>

      <p>interested in early-stage teams with high ownership.</p>

      <p>I want to work closely with founders and users.</p>

      <p>
        <strong>I learn quickly, move fast, and turn problems into working systems.</strong>
      </p>
    </div>

    <div class="mt-12">
      <h2 class="mt-3 text-4xl font-semibold tracking-tight">How I Learn</h2>

      <div class="mt-6 space-y-6 text-md leading-8 text-neutral-900">
        <p>(developed naturally after reading dozens of books)</p>

        <p>download the pdf from libgen or anna archive</p>

        <p>always have contents open in chrome sidebar</p>

        <p>read some parts to get familiar (jump from chapter to chapter)</p>

        <p>read the part which i need right now</p>

        <p>use chatgpt when required</p>

        <p>much faster than watching any video or course</p>
      </div>
    </div>
    <div class="mt-12">
      <h2 class="mt-3 text-4xl font-semibold tracking-tight">How I Work</h2>

      <div class="mt-6 space-y-6 text-md leading-8 text-neutral-900">
        <p>I work every day.</p>

        <p>take break when needed or when overwhelmed</p>

        <p>switch between JavaScript/TypeScript and Python depending on what the problem requires.</p>

        <p>learn what I need while building.</p>

        <p>go deeper when something is worth understanding.</p>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section>
    <div class="mx-auto max-w-5xl px-6 pt-10 pb-24">
      <div class="rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-12 text-center sm:px-12">
        <h2 class="text-3xl font-semibold tracking-tight">Worth your time? Let’s talk</h2>

        <p class="mx-auto mt-4 text-xl max-w-xl leading-7 text-neutral-700">Send me a quick email.</p>

        <button
          type="button"
          @click="openContact()"
          class="mt-8 inline-flex rounded-lg bg-[#8B1E1E] px-6 py-3 text-sm font-medium text-white">
          Get in touch
        </button>
      </div>
    </div>
  </section>
</template>
