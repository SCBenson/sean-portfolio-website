<template>
  <v-app color="primary">
    <v-main class="main-wrapper">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>

</script>

<style>
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
