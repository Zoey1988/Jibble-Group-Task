<template>
  <thead class="table-thead">
    <JTableRow>
      <th v-for="item in columns" :key="item">
        {{ item }}
      </th>
    </JTableRow>
  </thead>
</template>

<script setup lang="ts">
import JTableRow from "./JTableRow.vue";

defineProps<{ columns: string[] }>();
</script>

<style scoped>
.table-thead {
  border-bottom: 2px solid #dddddd;
}
</style>
