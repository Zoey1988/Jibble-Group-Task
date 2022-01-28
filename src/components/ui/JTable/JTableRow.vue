<template>
  <tr class="table-row">
    <slot></slot>
  </tr>
</template>

<style scoped>
.table-row {
  height: 50px;
  text-align: left;
}
.table-row :deep(td),
tr :deep(th) {
  padding: 0 8px;
}

.table-row:nth-child(even) {
  background-color: #eeeeee;
}
</style>
