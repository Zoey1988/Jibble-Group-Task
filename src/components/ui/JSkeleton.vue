<template>
  <div class="skeleton" />
</template>

<style scoped>
.skeleton {
  width: 50px;
  height: 15px;
  background-color: #ccc;
  opacity: 1;
  border-radius: 5px;
  animation: loading 2s infinite;
}
@keyframes loading {
  0%,
  10% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  90%,
  100% {
    opacity: 1;
  }
}
</style>
