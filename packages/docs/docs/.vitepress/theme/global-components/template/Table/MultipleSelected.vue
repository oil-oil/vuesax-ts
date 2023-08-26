<template>
  <div>
    <VsTable v-mode="selected">
      <template #thead>
        <VsTr>
          <VsTh>
            <VsCheckbox
              :indeterminate="selected.length === users.length"
              :checked="selected.length === users.length"
              @change="selected = selected.length === 0 ? users : []"
            />
          </VsTh>
          <VsTh> Name </VsTh>
          <VsTh> Email </VsTh>
          <VsTh> Id </VsTh>
        </VsTr>
      </template>
      <template #tbody>
        <VsTr
          :key="i"
          v-for="(tr, i) in users"
          :data="tr"
          :isSelected="selected.includes(tr)"
        >
          <VsTd checkbox>
            <VsCheckbox :value="{ tr }" :checked="selected.includes(tr)" />
          </VsTd>
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
    </VsTable>
    <span class="data">
      <pre>
    {{ selected ? users : 'Select an item in the table' }}
          </pre
      >
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { VsTable, VsCheckbox, VsTh, VsTr, VsTd } from 'vuesax-ts'

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

const selected = ref<typeof users>([])
</script>
