<script setup>
const route = useRoute();

if (route.fullPath.includes('akash-website-three.vercel.app')) {
  await navigateTo('/', {
    redirectCode: 301,
  });
} else {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
  });
}
</script>
