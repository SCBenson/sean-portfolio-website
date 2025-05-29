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


.custom-cursor {
  content: '';
  position: fixed;
  top: var(--cursor-y, 0);
  left: var(--cursor-x, 0);
  width: 20px;
  height: 20px;
  background-color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease;
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
