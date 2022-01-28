<template>
  <div
    class="pagination-item"
    :class="{ 'pagination-item-active': currentPage === page }"
    @click="$emit('goToPage')"
  >
    {{ page }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ page: number; currentPage: number }>();

defineEmits<{
  (e: "goToPage", value: number): void;
}>();
</script>

<style scoped>
.pagination-item {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: #eee;
  color: #333;
  font-size: 11px;
}
.pagination-item-active {
  background-color: tomato;
}
</style>
