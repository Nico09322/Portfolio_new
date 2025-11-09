<script setup>
import { ref, provide, onMounted } from 'vue'
import Navbar from '~/components/Navbar.vue'

const scrollHome = ref(null)
const scrollAbout = ref(null)
const scrollProject = ref(null)
const scrollKontakt = ref(null)

let lenis = null

onMounted(async () => {
  // Nur client-seitig importieren
  const { default: Lenis } = await import('@studio-freight/lenis')
  
  lenis = new Lenis({
    smooth: true,
    autoRaf: false,
    lerp: 0.2
  })

  provide('lenis', lenis)
  provide('scrollHome', scrollHome)
  provide('scrollAbout', scrollAbout)
  provide('scrollProject', scrollProject)
  provide('scrollKontakt', scrollKontakt)

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})
</script>

<template>
  <div class="relative min-h-screen">
    <Navbar />
    <slot />
  </div>
</template>

