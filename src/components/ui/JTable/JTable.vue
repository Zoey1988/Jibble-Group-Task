<template>
  <div class="table-wrapper">
    <table>
      <JTableHead :columns="columns" />
      <JTableBody v-bind="$props">
        <template v-for="slot in Object.keys($slots)" #[slot]="{ item }">
          <slot :name="slot" :item="item" />
        </template>
      </JTableBody>
    </table>
  </div>
</template>

<script setup lang="ts">
import JTableHead from "./JTableHead.vue";
import JTableBody from "./JTableBody.vue";

import { Movie } from "@/models/Movie";

defineProps<{ columns: string[]; rows: Movie[]; isBusy: boolean }>();
</script>

<style scoped>
.table-wrapper {
  overflow: auto;
  border-radius: 8px;
  border: 1px solid #dddddd;
}
table {
  width: 100%;
  border-collapse: collapse;
  min-width: 500px;
}
</style>
