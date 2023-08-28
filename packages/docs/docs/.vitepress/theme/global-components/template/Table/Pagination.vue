<template>
  <div class="center" style="width: 100%;">
    <VsTable>
      <template #thead>
        <VsTr>
          <VsTh> Name </VsTh>
          <VsTh> Email </VsTh>
          <VsTh> Id </VsTh>
        </VsTr>
      </template>
      <template #tbody>
        <VsTr :key="i" v-for="(tr, i) in users" >
          <VsTd>
            {{ tr.name }}
          </VsTd>
          <VsTd>
            {{ tr.email }}
          </VsTd>
          <VsTd>
            {{ tr.id }}
          </VsTd>
        </VsTr>
      </template>
      <template #footer><VsPagination v-model="page" :length="5" /></template>
    </VsTable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsTable, VsTh, VsTr, VsTd, VsPagination } from 'vuesax-ts'

const page = ref(1)

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    website: 'hildegard.org'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    website: 'anastasia.net'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    website: 'ramiro.info'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    website: 'kale.biz'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    website: 'demarco.info'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    website: 'ola.org'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    website: 'elvis.io'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    website: 'jacynthe.com'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    website: 'conrad.com'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    website: 'ambrose.net'
  }
]
</script>
