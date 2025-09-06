<script setup>
definePage({
  meta: {
    layout: "muiAdminLayout",
  },
});
</script>

<template>
  <div>Todo</div>
  <br />
  <h1>Todo new 1</h1>
  <br />

  <div>
    <li v-for="item in 10" :key="item">
      <h1 :key="item">Todo new {{ item }}</h1>
    </li>
  </div>
</template>

<style lang="scss" scoped></style>
