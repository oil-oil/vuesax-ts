<template>
  <VsTable>
    <template #header>
      <VsInput v-model="search" border placeholder="Search" block />
    </template>
    <template #thead>
      <VsTr>
        <VsTh sort @sort="(sortType: SortType) => onSort(sortType, 'id')">
          Id
        </VsTh>
        <VsTh sort @sort="(sortType: SortType) => onSort(sortType, 'name')">
          Name
        </VsTh>
        <VsTh sort @sort="(sortType: SortType) => onSort(sortType, 'username')">
          Username
        </VsTh>
        <VsTh sort @sort="(sortType: SortType) => onSort(sortType, 'email')">
          Email
        </VsTh>
        <VsTh sort @sort="(sortType: SortType) => onSort(sortType, 'email')">
          Website
        </VsTh>
      </VsTr>
    </template>
    <template #tbody>
      <VsTr :key="tr.id" v-for="tr in users">
        <VsTd>
          {{ tr.id }}
        </VsTd>
        <VsTd>
          {{ tr.name }}
        </VsTd>
        <VsTd>
          {{ tr.username }}
        </VsTd>
        <VsTd>
          {{ tr.email }}
        </VsTd>
        <VsTd>
          {{ tr.website }}
        </VsTd>
      </VsTr>
    </template>
  </VsTable>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import { VsInput, VsTable, VsTh, VsTr, VsTd } from 'vuesax-ts'

const usersData = [
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

type SortType = 'asc' | 'desc' | null
type FieldType = keyof (typeof usersData)[number]

const users = ref(usersData)
const search = ref('')
const sort = reactive<{ sortType: SortType; fieldType: FieldType }>({
  sortType: null,
  fieldType: 'id'
})

watchEffect(() => {
  const { fieldType, sortType } = sort
  let filterData = [...usersData]
  if (search.value) {
    filterData = filterData.filter((item) => {
      let isMatch = false
      Object.entries(item).forEach(([_, value]) => {
        if (String(value).includes(search.value)) {
          isMatch = true
        }
      })
      return isMatch
    })
  }

  filterData = filterData.sort((a, b) => {
    if (typeof a[fieldType] === 'string') {
      const compareResult = (a?.[fieldType] as string).localeCompare(
        b[fieldType] as string
      )
      if (sortType === 'asc') {
        return compareResult
      }
      if (sortType === 'desc') {
        return -compareResult
      }
    }
    if (sortType === 'asc') {
      return (a[fieldType] as number) - (b[fieldType] as number)
    }
    if (sortType === 'desc') {
      return (b[fieldType] as number) - (a[fieldType] as number)
    }
    return 1
  })

  users.value = filterData
})

const onSort = (sortType: SortType, fieldType: FieldType) => {
  sort.fieldType = fieldType
  sort.sortType = sortType
}
</script>
