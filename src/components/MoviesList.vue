<template>
  <div v-if="hasError">Sorry, please try again.</div>
  <div v-else-if="!isLoading && !moviesList.length">No movies found!</div>
  <template v-else>
    <JTable
      :rows="moviesList"
      :columns="['Title', 'Year', 'imdbID', 'actions']"
      :is-busy="isLoading"
    >
      <template #cell(actions)="{ item }">
        <button @click="updateFavirotes(item.imdbID)" class="movie-star-button">
          <span v-if="stars.includes(item.imdbID)" class="filled-star"
            >&#x02605;</span
          >
          <span v-else>&#x02606;</span>
        </button>
      </template>
    </JTable>
  </template>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import JTable from "./ui/JTable/JTable.vue";

import { Movie } from "@/models/Movie";

defineProps<{
  moviesList: Movie[];
  isLoading: boolean;
  hasError: boolean;
}>();

const initial = localStorage.getItem("bookmarks");

const stars: Ref<number[]> = ref(initial !== null ? JSON.parse(initial) : []);

const updateFavirotes = (movie: number): void => {
  if (stars.value.includes(movie)) {
    stars.value = stars.value.filter((item) => item !== movie);
  } else {
    stars.value = [...stars.value, movie];
  }
  localStorage.setItem("bookmarks", JSON.stringify(stars.value));
};
</script>

<style scoped>
.movie-star-button {
  background-color: transparent;
  font-size: 25px;
  outline: 0;
  border: 0;
  padding: 0;
}
.filled-star {
  color: tomato;
}
</style>
