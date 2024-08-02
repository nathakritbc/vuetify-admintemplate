<script setup>
import {
  isConfirmDialogVisible,
  titleComfirmDialog,
  textComfirmDialog,
  handleConfirm,
  handleCancel,
} from "./index";
</script>

<template>
  <!-- 👉 Confirm Dialog -->
  <v-dialog v-model="isConfirmDialogVisible" max-width="500" persistent>
    <v-card>
      <v-card-text>
        <section class="flex flex-col justify-center align-center gap-2">
          <v-icon size="100" class="my-6" color="warning"
            >mdi-alert-circle
          </v-icon>
          <h1 class="text-3xl font-semibold text-grey-darken-3 mt-3">
            {{ titleComfirmDialog }}
          </h1>
          <p class="mt-2">{{ textComfirmDialog }}</p>
        </section>
      </v-card-text>

      <template v-slot:actions>
        <v-btn color="grey" @click="handleCancel"> ยกเลิก </v-btn>
        <v-btn color="primary" @click="handleConfirm"> ตกลง </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
