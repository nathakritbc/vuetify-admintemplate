<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

definePage({
  meta: {
    // public: true,
    layout: "muiAdminLayout",
  },
});

const handleChangePageTodo = () => {
  router.push("/todo");
};
</script>

<template>
  <div class="w-full">
    <h2>mui name</h2>
    <br />
    <v-btn @click="handleChangePageTodo">Todo</v-btn>
    <br />
    <v-card
      v-for="item in 60"
      :key="item"
      prepend-icon="$vuetify"
      subtitle="The #1 Vue UI Library"
      class="w-full"
    >
      <template v-slot:title>
        <span class="font-weight-black">Welcome to Vuetify</span>
      </template>

      <v-card-text class="bg-surface-light pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
        at placeat totam, magni doloremque veniam neque porro libero rerum unde
        voluptatem!
      </v-card-text>
    </v-card>
  </div>
</template>
