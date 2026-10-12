<script setup>
useHead({
  script: [
    {
      innerHTML: `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "ywc0lix40e");
      `,
      type: 'text/javascript',
    },
  ],
});
</script>

<template>
  <div class="min-h-screen">
    <SiteHeader />

    <main>
      <NuxtPage />
    </main>

    <SiteFooter />
  </div>
</template>
