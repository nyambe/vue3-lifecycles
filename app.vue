i<template>
  <div class="container">
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtLink to="/">Inicio</NuxtLink> |
    <NuxtLink to="/ejemplo">Ejemplo cambio de ruta</NuxtLink> |
    <NuxtLink to="/before-update">Before Update</NuxtLink> |
    <NuxtLink to="/before-unmount">Before Unmount</NuxtLink> |
    <NuxtPage />
  </div>
</template>
<script setup>
const title = 'Vue 3 Lifecycles: Guía completa'
const description = 'Los “lifecycles” o “ciclos de vida” en Vue.js son una serie de etapas por las que pasa un componente desde su creación hasta su destrucción'
const image = 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*41xUFKGnL-p-Gwl3BhanKg.png'
useSeoMeta({
  title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: image,
  twitterCard: 'summary_large_image',
})

</script>
