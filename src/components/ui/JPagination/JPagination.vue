<template>
  <div class="pagination-wrapper">
    <JPaginationCell
      v-if="modelValue > 3"
      :page="1"
      :current-page="modelValue"
      @goToPage="updateModelValue(1)"
    />

    <div v-if="modelValue > 4">...</div>

    <JPaginationCell
      v-for="index in showingPages"
      :key="index"
      :page="index"
      :current-page="modelValue"
      @goToPage="updateModelValue(index)"
    />
    <div v-if="totalPages - modelValue > 3">...</div>

    <JPaginationCell
      v-if="totalPages - modelValue > 2"
      :page="totalPages"
      :current-page="modelValue"
      @goToPage="updateModelValue(totalPages)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import JPaginationCell from "./JPaginationCell.vue";

const props = defineProps<{ modelValue: number; totalPages: number }>();

const emit = defineEmits<{
  (e: "update:modelValue", value: number): void;
}>();

const showingPages = computed<number[]>(() => {
  const currentPage = props.modelValue;
  let res = [];
  const start = currentPage - 2 > 1 ? currentPage - 2 : 1;
  const end =
    currentPage + 2 < props.totalPages ? currentPage + 2 : props.totalPages;

  for (var i = start; i <= end; i++) {
    res.push(i);
  }
  return res;
});

const updateModelValue = (value: number): void => {
  emit("update:modelValue", value);
};
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
}
</style>
