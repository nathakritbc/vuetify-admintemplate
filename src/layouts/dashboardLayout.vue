<script lang="ts" setup>
// import { useTheme, useDisplay } from "vuetify";
import { useDisplay } from "vuetify";
// import Breadcrumbs from "@/components/Breadcrumbs/index.vue";
// const theme = useTheme();
const drawer = ref(true);
const { smAndDown, md } = useDisplay();
const rail: Ref<boolean> = ref(false);
// const toggleTheme = () => {
//   theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
// };
const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2 aaaaaaa " },
]);
watchEffect(() => {
  if (smAndDown.value) {
    drawer.value = false;
  }
  if (md.value) {
    rail.value = true;
  }
});
</script>
<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer
        :location="$vuetify.display.smAndDown ? 'right' : 'left'"
        v-model="drawer"
        :rail="rail"
        expand-on-hover
        :temporary="$vuetify.display.smAndDown"
        :permanent="$vuetify.display.mdAndUp"
        @click="rail = false"
      >
        <template v-slot:prepend>
          <v-list-item
            class="border-b py-3 cursor-pointer"
            lines="two"
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            subtitle="Logged in"
            title="Jane Smith"
          ></v-list-item>
        </template>
        <v-list density="compact" nav class="">
          <v-list-item
            to="/page1"
            prepend-icon="mdi-home-city"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            to="/item"
            prepend-icon="mdi-account"
            title="My Account"
            value="account"
          ></v-list-item>
          <v-menu :location="$vuetify.display.smAndDown ? 'end' : 'start'">
            <template v-slot:activator="{ props }">
              <v-list-item
                prepend-icon="mdi-account"
                v-bind="props"
                title="My Account"
                value="Dropdown"
                :append-icon="
                  $vuetify.display.smAndDown
                    ? 'mdi-chevron-down'
                    : 'mdi-chevron-right'
                "
              ></v-list-item>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="
                  {
                  }
                "
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list>

        <template v-slot:append>
          <v-list density="compact" nav class="border-t">
            <v-list-item
              prepend-icon="mdi-logout"
              title="Logout"
              value="logout"
            ></v-list-item>
          </v-list>
        </template>
      </v-navigation-drawer>
      <v-app-bar :elevation="2" v-if="$vuetify.display.mdAndUp">
        <template v-slot:prepend>
          <v-app-bar-nav-icon @click="rail = !rail"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>Application Bar</v-app-bar-title>
      </v-app-bar>
      <v-bottom-navigation grow v-if="$vuetify.display.smAndDown">
        <v-btn value="recent">
          <v-icon>mdi-history</v-icon>
          <span>Time</span>
        </v-btn>
        <v-btn value="favorites">
          <v-icon>mdi-heart</v-icon>
          <span>Favorites</span>
        </v-btn>
        <v-btn value="nearby" @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
          <span>Menu</span>
        </v-btn>
      </v-bottom-navigation>
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>
