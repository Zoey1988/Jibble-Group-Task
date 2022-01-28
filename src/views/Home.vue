<template>
  <h1 class="page-header">Movies List</h1>
  <SearchFilter v-model="titleSearch" />
  <MoviesList
    :movies-list="moviesList"
    :is-loading="isLoading"
    :has-error="hasError"
  />
  <JPagination
    v-if="totalPages > 1 && !isLoading"
    v-model="page"
    :total-pages="totalPages"
  />
</template>

<script setup lang="ts">
import { watchEffect, ref, watch } from "vue";
import axios from "axios";

import SearchFilter from "@/components/SearchFilter.vue";
import MoviesList from "@/components/MoviesList.vue";
import JPagination from "@/components/ui/JPagination/JPagination.vue";

import { getUrlQueryParams, setUrlQueryParams } from "@/utils";

import { Params } from "@/models/Params";

const API_URL = "https://jsonmock.hackerrank.com/api/movies/search/";

const params: Params = getUrlQueryParams();
const initialTitle = params.title || "";
const initialPage = Number(params.page || 1);

const moviesList = ref([]);
const totalPages = ref(1);
const page = ref(initialPage);
const titleSearch = ref(initialTitle);
const isLoading = ref(false);
const hasError = ref(false);

watch(titleSearch, () => {
  page.value = 1;
});

watchEffect(async () => {
  try {
    isLoading.value = true;
    const { data } = await axios({
      url: API_URL,
      params: {
        page: page.value,
        Title: titleSearch.value,
      },
    });
    moviesList.value = data.data;
    totalPages.value = data.total_pages;
    hasError.value = false;

    setUrlQueryParams({ title: titleSearch.value, page: page.value });
  } catch (err) {
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped>
.page-header {
  display: inline-block;
  padding-bottom: 6px;
  border-bottom: 5px solid tomato;
}
</style>
