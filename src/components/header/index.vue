<template>
  <v-app-bar height="56" class="#2c3e50">
    <v-spacer></v-spacer>
    <v-container class="d-none d-md-flex justify-end align-center gap-4">
      <router-link to="/about" class="mx-2 text-white">About</router-link>
      <router-link to="/CV" class="mx-2 text-white">CV</router-link>
      <router-link to="/projects" class="mx-2 text-white">Projects</router-link>
      <router-link to="/contact" class="mx-2 text-white">Contact</router-link>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
a {
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
}
</style>
