<template>
  <v-app color="primary">
    <v-main class="main-wrapper">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useCursor } from '@/composables/useCursor'
useCursor()
</script>

<style>

* {
  cursor: none !important;
}

body {
  transition: background 0.5s ease-in-out;
}

body, .about-container {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(26, 26, 46, 0.3);
  pointer-events: none;
  z-index: 1;
}

.about-container > * {
  position: relative;
  z-index: 2;
}

.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease, scale 0.2s ease, opacity 0.2s ease;
  mix-blend-mode: difference;
}

.custom-cursor.hover {
  transform: translate(-50%, -50%) scale(1.5);
  border-width: 2px;
}

.custom-cursor.click {
  transform: translate(-50%, -50%) scale(0.8);
}

html, body{
  overflow: hidden;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app{
  height: 100vh;
  overflow: hidden;
}
</style>

<style scoped>
.main-wrapper {
  height: 100vh;
  overflow: hidden;
  padding: 0;
}
</style>
