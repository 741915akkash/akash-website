export default defineNuxtRouteMiddleware((to) => {
  const brokenDomain = 'akash-website-three.vercel.app';

  if (to.fullPath.includes(brokenDomain)) {
    return navigateTo('/', {
      redirectCode: 301,
      replace: true,
    });
  }
});
