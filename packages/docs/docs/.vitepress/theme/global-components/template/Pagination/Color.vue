<template>
  <div class="center con-pagination">
    <div class="con-radio">
      <VsRadio color="success" v-model="color" name="success">
        Success
      </VsRadio>
      <VsRadio color="danger" v-model="color" value="danger"> Danger </VsRadio>
      <VsRadio color="warn" v-model="color" value="warn"> Warning </VsRadio>
      <VsRadio color="dark" v-model="color" value="dark"> Dark </VsRadio>
      <VsRadio color="#7d33ff" v-model="color" value="#7d33ff"> HEX </VsRadio>
      <VsRadio
        color="rgb(59, 222, 200)"
        v-model="color"
        value="rgb(59,222,200)"
      >
        RGB
      </VsRadio>
    </div>
    <VsPagination :color="color" v-model="page" :length="20" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { VsRadio, VsPagination, Color } from 'vuesax-ts'

const page = ref(1)
const color = ref<Color>('success')

</script>
<style lang="scss">
.con-pagination {
  .con-radio {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .vs-radio-content {
      margin: 10px;
    }
  }
  .vs-pagination-content {
    margin: 10px 0px;
  }
}
</style>
