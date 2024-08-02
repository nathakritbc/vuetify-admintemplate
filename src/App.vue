<script lang="ts" setup>
import ConfirmDialog from "./components/ConfirmDialog/index.vue";
</script>

<template>
  <v-app>
    <v-main>
      <router-view />
      <ConfirmDialog />
    </v-main>
  </v-app>
</template>
