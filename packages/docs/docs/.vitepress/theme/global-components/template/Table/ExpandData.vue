<template>
  <VsTable>
    <template #thead>
      <VsTr>
        <VsTh> Name </VsTh>
        <VsTh> Email </VsTh>
        <VsTh> Id </VsTh>
      </VsTr>
    </template>
    <template #tbody>
      <VsTr
        :key="i"
        v-for="(tr, i) in users"
        :expand="expand === tr.id"
        @click="expand = expand === tr.id ? undefined : tr.id"
      >
        <VsTd>
          {{ tr.name }}
        </VsTd>
        <VsTd>
          {{ tr.email }}
        </VsTd>
        <VsTd>
          {{ tr.id }}
        </VsTd>
        <template #expand>
          <div class="expand-content">
            <div class="container">
              <VsAvatar>
                <img :src="`/avatars/avatar-${i + 1}.png`" alt="" />
              </VsAvatar>
              <p>
                {{ tr.name }}
              </p>
            </div>
            <div class="container">
              <VsButton flat icon>
                <i class="bx bx-lock-open-alt"></i>
              </VsButton>
              <VsButton flat> Send Email </VsButton>
              <VsButton border color="danger"> Remove User </VsButton>
            </div>
          </div>
        </template>
      </VsTr>
    </template>
  </VsTable>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsTable, VsAvatar, VsButton, VsTh, VsTr, VsTd } from 'vuesax-ts'

const expand = ref<number>()

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

<style scoped lang="scss">
.expand-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
