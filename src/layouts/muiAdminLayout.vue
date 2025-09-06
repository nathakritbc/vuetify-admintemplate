<script lang="ts" setup>
import { useTheme, useDisplay } from "vuetify";
import { ref, watchEffect } from "vue";

const theme = useTheme();
const drawer = ref(true);
const rail: Ref<boolean> = ref(false);

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

// Material Design 3 navigation items
const navigationItems = ref([
  {
    title: "Home",
    icon: "mdi-home",
    to: "/",
    active: true,
  },
  {
    title: "Get started",
    icon: "mdi-view-grid",
    to: "/getting-started",
  },
  {
    title: "Develop",
    icon: "mdi-code-braces",
    to: "/develop",
    active: true,
  },
  {
    title: "Foundations",
    icon: "mdi-square",
    to: "/foundations",
  },
  {
    title: "Styles",
    icon: "mdi-palette",
    to: "/styles",
  },
  {
    title: "Components",
    icon: "mdi-plus-circle",
    to: "/components",
  },
  {
    title: "Blog",
    icon: "mdi-star",
    to: "/blog",
  },
]);

const location = ref("end");

const items = [
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
];
</script>
<template>
  <v-app class="h-screen overflow-hidden">
    <v-layout class="h-full">
      <v-navigation-drawer
        :location="$vuetify.display.smAndDown ? 'right' : 'left'"
        v-model="drawer"
        :rail="rail"
        expand-on-hover
        :temporary="$vuetify.display.smAndDown"
        :permanent="$vuetify.display.mdAndUp"
        class="border-right"
        color="white"
        width="80"
      >
        <div
          class="w-full py-3 flex flex-col gap-4 items-center h-full overflow-y-auto overflow-x-hidden"
        >
          <div
            class="mx-1 pa-3 flex flex-col justify-center gap-1 items-center cursor-pointer rounded-lg bg-purple-400 active:bg-purple-500"
          >
            <v-icon icon="mdi-magnify" size="24" />
          </div>

          <div
            class="mx-1 flex flex-col justify-center gap-1 items-center"
            v-for="item in navigationItems"
            :key="item.title"
          >
            <div
              class="hover:bg-[red] rounded-lg px-3 py-1 transition-colors duration-200 ease-in-out"
            >
              <v-icon
                :icon="item.icon"
                size="24"
                color="surface-variant"
                class="cursor-pointer"
              />
            </div>
            <span class="text-[10px] font-medium text-nowrap">
              {{ item.title }}
            </span>
          </div>

          <v-menu :location="location" open-on-hover>
            <template v-slot:activator="{ props }">
              <div
                v-bind="props"
                class="mx-1 mt-2 flex flex-col justify-center gap-1 items-center"
              >
                <v-icon icon="mdi-theme-light-dark" size="24" />
              </div>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-navigation-drawer>

      <!-- Main Content Area -->
      <v-main class="bg-surface overflow-y-auto h-full">
        <div class="w-full max-w-xl m-2">
          <router-view />
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>
.bg-primary-container {
  background-color: rgb(var(--v-theme-primary-container)) !important;
  color: rgb(var(--v-theme-on-primary-container)) !important;
}

.text-medium-emphasis {
  opacity: 0.6;
}

.rounded-xl {
  border-radius: 16px !important;
}

.rounded-lg {
  border-radius: 12px !important;
}
</style>
