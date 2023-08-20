<template>
  <div class="center" style="width: 100%">
    <VsAlert v-model:page="page">
      <template #title> Vuesax Framework </template>
      <template #page-1>
        Pagina 1 - esta pagina es un slot y aquí adentro puedes agregar ya sea
        texto, elementos html o componentes
      </template>
      <template #page-2>
        Pagina 2 - En esta otra pagina puedes poner también lo que necesites y
        es dinámico osea que puedes agregar cuantas paginas necesites
      </template>
      <template #page-3>
        Pagina 3 - esta es la ultima pagina de el ejemplo
      </template>
    </VsAlert>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsAlert } from 'vuesax-ts'

const page = ref(1)
</script>
