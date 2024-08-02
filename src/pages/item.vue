<script setup lang="ts">
import axios, { AxiosResponse } from "axios";
import { message } from "ant-design-vue";
import {
  isConfirmDialogVisible,
  titleComfirmDialog,
  textComfirmDialog,
  confirm,
} from "@/components/ConfirmDialog/index";
definePage({
  meta: {
    // public: true,
    layout: "dashboardLayout",
  },
});
const headers: any = [
  {
    title: "Actions",
    key: "actions",
    sortable: false,
    width: "100px",
    align: "start",
  },
  {
    title: "Id",
    key: "id",
    sortable: true,
    width: "100px",
    align: "start",
  },
  {
    title: "Name",
    key: "name",
    sortable: false,
    width: "",
    align: "start",
  },
];

interface IItem {
  id: number;
  namr: string;
  description: string;
}

const listData: Ref<IItem[]> = ref([]);
const items: Ref<IItem[]> = computed(() => listData.value);
const deleteId: Ref<number> = ref(0);
const searchText: Ref<string> = ref("");

const openDialog = (id: number) => {
  isConfirmDialogVisible.value = true;
  titleComfirmDialog.value = "ยืนยันการลบ";
  textComfirmDialog.value = "คุณต้องการลบข้อมูลใช่หรือไม่?";
  deleteId.value = id;
};

const removeData = async () => {
  try {
    const { status } = await axios.delete(
      `http://localhost:8000/api/items/${deleteId.value}`
    );
    if (status !== 200) {
      message.error("ลบข้อมูลไม่สําเร็จ");
      confirm.value = false;
      return false;
    }
    listData.value = listData.value.filter(
      (item: IItem) => item.id !== deleteId.value
    );
    message.success("ลบข้อมูลเรียบร้อย");
    confirm.value = false;
  } catch (error) {
    confirm.value = false;
    console.error(error);
    message.error("ลบข้อมูลไม่สําเร็จ");
  }
};

watch(
  () => confirm.value,
  (newValue: boolean) => {
    if (newValue) {
      removeData();
    }
  }
);

const fetchAll = async () => {
  try {
    const { data, status }: AxiosResponse<IItem[]> = await axios.get(
      "http://localhost:8000/api/items"
    );
    if (status === 200 && data.length) {
      listData.value = data;
      return listData.value;
    }
    message.error("ไม่สามารถ fetch ข้อมูลได้");
    return false;
  } catch (error) {
    console.error(error);
  }
};

onBeforeMount(() => {
  fetchAll();
});
</script>

<template>
  <section class="flex align-center justify-between">
    <h1 class="text-3xl font-semibold">Items List</h1>
    <v-btn prepend-icon="mdi-plus">เพิ่มรายการ</v-btn>
  </section>
  <v-card class="my-6">
    <v-card-text>
      <section class="flex align-center">
        <v-text-field
          v-model="searchText"
          clearable
          append-inner-icon="mdi-magnify"
          density="compact"
          label="Search"
          variant="outlined"
          hide-details
          single-line
        ></v-text-field>
      </section>
      <v-data-table :headers="headers" :items="items" :search="searchText">
        <!-- actions -->
        <template #item.actions="{ item }">
          <section class="flex align-center justify-center">
            <v-menu transition="scale-transition">
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  variant="text"
                  color="blue-grey-darken-1"
                  icon="mdi-dots-horizontal"
                ></v-btn>
              </template>

              <v-list>
                <v-list-item @click="">
                  <template v-slot:append>
                    <v-icon icon="mdi-eye"></v-icon>
                  </template>
                  <v-list-item-title>ดูข้อมูล</v-list-item-title>
                </v-list-item>
                <v-list-item @click="">
                  <template v-slot:append>
                    <v-icon icon="mdi-pencil"></v-icon>
                  </template>
                  <v-list-item-title>แก้ไข</v-list-item-title>
                </v-list-item>
                <v-list-item @click="openDialog(item.id)">
                  <template v-slot:append>
                    <v-icon icon="mdi-delete"></v-icon>
                  </template>
                  <v-list-item-title>ลบ</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </section>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>

  <!-- 👉 Confirm Dialog -->
  <!-- <ConfirmDialog
    v-model:isDialogVisible="isConfirmDialogVisible"
    title="คุณต้องการลบข้อมูลหรือไม่?"
    text="Are you sure you want to delete this item!"
  /> -->
</template>
