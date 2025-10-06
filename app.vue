<script setup>
import Lenis from 'lenis';

// 1. Refs und Lenis-Instanz hier erstellen
const scrollHome = ref(null);
const scrollAbout = ref(null);
const scrollProject = ref(null);
const scrollKontakt = ref(null);

const lenis = new Lenis({
  smooth: true,
  autoRaf: false,
  lerp: 0.2
});

// 2. Allen Kind-Komponenten (Navbar und Pages) zur Verfügung stellen
provide('lenis', lenis);
provide('scrollHome', scrollHome);
provide('scrollAbout', scrollAbout);
provide('scrollProject', scrollProject);
provide('scrollKontakt', scrollKontakt);

onMounted(() => {
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>