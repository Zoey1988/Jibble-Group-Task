<template>
  <tbody>
    <JTableRow v-for="row in customRows" :key="row.imdbId">
      <td v-for="column in columns" :key="column">
        <JSkeleton v-if="isBusy" />
        <slot v-else :name="`cell(${column})`" :item="row">
          {{ row[column] }}
        </slot>
      </td>
    </JTableRow>
  </tbody>
</template>

<script setup lang="ts">
import { computed } from "vue";

import JTableRow from "./JTableRow.vue";
import JSkeleton from "../JSkeleton.vue";

interface Movie {
  Title: string;
  year: string;
  imdbId: string;
}

const props =
  defineProps<{ rows: Movie[]; columns: string[]; isBusy: boolean }>();
const customRows = computed(() => (props.isBusy ? 10 : props.rows));
</script>
