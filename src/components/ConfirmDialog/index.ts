import { ref } from "vue";
// const props = defineProps({
//   isDialogVisible: {
//     type: Boolean,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   text: {
//     type: String,
//     required: true,
//   },
// });

const isConfirmDialogVisible: Ref<boolean> = ref(false)
const titleComfirmDialog: Ref<string> = ref("")
const textComfirmDialog: Ref<string> = ref("")
const confirm: Ref<boolean> = ref(false)

const handleConfirm = () => {
  confirm.value = true
  isConfirmDialogVisible.value = false
}

const handleCancel = () => {
  confirm.value = false
  isConfirmDialogVisible.value = false
}

export {
  isConfirmDialogVisible,
  titleComfirmDialog,
  textComfirmDialog,
  confirm, handleConfirm,
  handleCancel
}
