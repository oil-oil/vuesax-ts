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
        <VsTr :key="i" v-for="(tr, i) in users" >
          <VsTd edit @click="()=>showNameModal(tr.name)">
            {{ tr.name }}
          </VsTd>
          <VsTd edit @click="()=>showEmailModal(tr.email)">
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
  import { h, ref } from 'vue';
import { VsInput } from 'vuesax-ts';
import { VsTable, VsTh, VsTr, VsTd, useModal } from 'vuesax-ts'
  
const name = ref("")
const email = ref("")
  const nameModal = useModal({
    title:"Edit Name",
    content:h(VsInput,{style:"width:100%",modelValue:name.value,"onUpdate:modelValue":(e:string)=>{
        name.value = e
    }})
  })

  const emailModal = useModal({
    title:"Edit Email",
    content:h(VsInput,{style:"width:100%",modelValue:email.value,"onUpdate:modelValue":(e:string)=>{
        email.value = e
    }})
  })

 const showNameModal = (currentName:string) => {
    name.value = currentName
    nameModal.open()
    
 }
 const showEmailModal = (currentEmail:string) => {
    email.value = currentEmail
    emailModal.open()
 }

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
  