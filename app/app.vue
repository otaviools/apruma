<script setup lang="ts">
useHead({
  titleTemplate: (titulo) => (titulo ? `${titulo} · Apruma` : 'Apruma · Conta a ideia. A gente apruma.'),
})

useSeoMeta({
  description: useAppConfig().marca.descricao,
  ogSiteName: 'Apruma',
  ogType: 'website',
  ogLocale: 'pt_BR',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage :transition="{ name: 'pagina', mode: 'out-in' }" />
  </NuxtLayout>
</template>
