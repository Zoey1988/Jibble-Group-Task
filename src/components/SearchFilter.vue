<template>
  <form
    class="search-form"
    @submit.prevent="$emit('update:modelValue', search)"
  >
    <input
      v-model="search"
      placeholder="Search by title"
      class="search-form-input"
    />

    <button type="submit" class="submit-button">search</button>
    <button v-if="modelValue" class="reset-button" @click="resetSearch">
      {{ modelValue }}
      <span>&#10799;</span>
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ modelValue: string }>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const search = ref(props.modelValue);

const resetSearch = () => {
  emit("update:modelValue", "");
  search.value = "";
};
</script>

<style scoped>
.search-form {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.search-form-input {
  border-radius: 5px 0 0 5px;
}
.submit-button {
  border-radius: 0 5px 5px 0;
}
.reset-button {
  padding: 4px;
  margin-left: 10px;
  background-color: tomato;
  border-radius: 5px;
}
</style>
