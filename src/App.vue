<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
button {
  cursor: pointer;
}
input,
button {
  padding: 8px 10px;
  border: 1px solid #ccc;
}
</style>
<style scoped>
.container {
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
}
</style>
