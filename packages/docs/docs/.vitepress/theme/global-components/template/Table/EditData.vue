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
      <VsTr :key="i" v-for="(tr, i) in users">
        <VsTd edit @click="() => showNameModal(tr.name, i)">
          {{ tr.name }}
        </VsTd>
        <VsTd edit @click="() => showEmailModal(tr.email, i)">
          {{ tr.email }}
        </VsTd>
        <VsTd>
          {{ tr.id }}
        </VsTd>
      </VsTr>
    </template>
  </VsTable>
</template>

<script setup lang="ts">
import { computed, h, reactive, ref } from 'vue'
import {
  VsTable,
  VsTh,
  VsTr,
  VsTd,
  VsInput,
  useModal,
  ModalHookProps
} from 'vuesax-ts'

const users = ref([
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
])

const modalData = reactive({ name: '', email: '' })
const currentModal = reactive<{ index: number; type: 'name' | 'email' }>({
  index: 0,
  type: 'name'
})
const nameModalProps = computed<ModalHookProps>(() => ({
  title: 'Edit Name',
  content: h(VsInput, {
    style: 'width:100%',
    modelValue: modalData.name,
    'onUpdate:modelValue': (e: string) => {
      modalData.name = e
    },
    autofocus: true
  }),
  showCancel: true,
  showConfirm: true,
  onConfirm(close) {
    users.value[currentModal.index][currentModal.type] =
      modalData[currentModal.type]
    close()
  }
}))

const emailModalProps = computed<ModalHookProps>(() => ({
  title: 'Edit Email',
  content: h(VsInput, {
    style: 'width:100%',
    modelValue: modalData.email,
    'onUpdate:modelValue': (e: string) => {
      modalData.email = e
    },
    autofocus: true
  }),
  showCancel: true,
  showConfirm: true,
  onCancel(close) {
    close()
  },
  onConfirm(close) {
    users.value[currentModal.index][currentModal.type] =
      modalData[currentModal.type]
    close()
  }
}))

const nameModal = useModal(nameModalProps)

const emailModal = useModal(emailModalProps)

const showNameModal = (currentName: string, index: number) => {
  modalData.name = currentName
  nameModal.open()
  currentModal.index = index
  currentModal.type = 'name'
}

const showEmailModal = (currentEmail: string, index: number) => {
  modalData.email = currentEmail
  emailModal.open()
  currentModal.index = index
  currentModal.type = 'email'
}
</script>
