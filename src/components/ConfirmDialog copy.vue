<script setup>
const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:isDialogVisible", "confirm"]);

const isDialogVisible = computed({
  get() {
    return props.isDialogVisible;
  },
  set(val) {
    emit("update:isDialogVisible", val);
  },
});
</script>

<template>
  <!-- 👉 Confirm Dialog -->
  <v-dialog v-model="isDialogVisible" max-width="400" persistent>
    <v-card>
      <v-card-text>
        <section class="flex flex-col justify-center align-center gap-2">
          <v-icon size="100" class="my-4" color="red-darken-1"
            >mdi-alert-circle
          </v-icon>
          <h1 class="text-xl font-semibold text-grey-darken-3">
            {{ props.title }}
          </h1>
          <p>{{ props.text }}</p>
        </section>
      </v-card-text>

      <template v-slot:actions>
        <v-btn color="grey" @click="isDialogVisible = false"> ยกเลิก </v-btn>
        <v-btn @click="isDialogVisible = false"> ตกลง </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
