<template>
  <div class="center">
    <VsButton @click="active = !active"> Alert </VsButton>
    <VsButton flat @click="active2 = !active2"> Confirm </VsButton>
    <VsButton border @click="active3 = !active3"> Prompt </VsButton>
    <VsModal width="550px" v-model="active">
      <template #header>
        <h4 class="no-margin">Welcome to <b>Vuesax</b></h4>
      </template>

      <div class="con-content">
        <p>
          Vuesax is a relatively new framework with a refreshing design and in
          the latest trends, vuesax based on vuejs which means that we go hand
          in hand with one of the most popular javascript frameworks in the
          world and with a huge community with which you will have all the help
          and documentation to create and make your project
        </p>
      </div>

      <template #footer>
        <div class="con-footer">
          <VsButton @click="active = false" transparent> Ok </VsButton>
        </div>
      </template>
    </VsModal>
    <VsModal width="550px" v-model="active2">
      <template #header>
        <h4 class="no-margin">Welcome to <b>Vuesax</b></h4>
      </template>

      <div class="con-content">
        <p>
          Vuesax is a relatively new framework with a refreshing design and in
          the latest trends, vuesax based on vuejs which means that we go hand
          in hand with one of the most popular javascript frameworks in the
          world and with a huge community with which you will have all the help
          and documentation to create and make your project
        </p>
      </div>

      <template #footer>
        <div class="con-footer">
          <VsButton @click="active2 = false" transparent> Ok </VsButton>
          <VsButton @click="active2 = false" color="dark" transparent>
            Cancel
          </VsButton>
        </div>
      </template>
    </VsModal>
    <VsModal width="300px" v-model="active3">
      <template #header>
        <h4 class="no-margin">Welcome what is your <b>Name</b></h4>
      </template>

      <div class="con-content">
        <VsInput v-model="name" placeholder="Name" block></VsInput>
      </div>

      <template #footer>
        <div class="con-footer">
          <VsButton @click="active3 = false" transparent> Ok </VsButton>
          <VsButton @click="active3 = false" color="dark" transparent>
            Cancel
          </VsButton>
        </div>
      </template>
    </VsModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsModal, VsButton, VsInput } from 'vuesax-ts'

const active = ref(false)
const active2 = ref(false)
const active3 = ref(false)
const name = ref('')
</script>

<style lang="scss" scoped>
.con-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .vs-button {
    margin: 0px;
    .vs-button__content {
      padding: 10px 30px;
    }
    ~ .vs-button {
      margin-left: 10px;
    }
  }
}
.no-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
  padding-bottom: 0px;
}
.con-content {
  width: 100%;
  p {
    font-size: 0.8rem;
    padding: 0px 10px;
  }
  .vs-checkbox-label {
    font-size: 0.8rem;
  }
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  .new {
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: 0.7rem;
    a {
      color: getColor('primary');
      margin-left: 6px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .vs-button {
    margin: 0px;
  }
}
</style>
