<template>
  <v-app-bar height="56" color="primary" flat>
    <v-container>
      <v-btn class="menu-items">Menu</v-btn>
    </v-container>
    <v-spacer>
    </v-spacer>
    <v-container class="d-none d-md-flex justify-end align-center gap-4">
      
      <span class="menu-items">Time</span>
      <v-btn class="menu-items">Mail</v-btn>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.menu-items{
  font-size: 10px;
  font-weight: 400;
}
</style>
