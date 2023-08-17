<template>
  <div class="center">
    <VsButton @click="active = !active">active</VsButton>
    <VsModal :showClose="false" v-model="active">
      <template #header>
        <h4 class="not-margin">Welcome to <b>Vuesax</b></h4>
      </template>

      <div class="con-form">
        <VsInput v-model="input1" placeholder="Email">
          <template #icon> @ </template>
        </VsInput>
        <VsInput type="password" v-model="input2" placeholder="Password">
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </VsInput>
        <div class="flex">
          <VsCheckbox v-model="checkbox1">Remember me</VsCheckbox>
          <a href="#">Forgot Password?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer">
          <VSButton block> Sign In </VSButton>

          <div class="new">New Here? <a href="#">Create New Account</a></div>
        </div>
      </template>
    </VsModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsButton, VsModal, VsCheckbox, VsInput } from 'vuesax-ts'

const active = ref(false)
const input1 = ref('')
const input2 = ref('')
const checkbox1 = ref('')
</script>

<style lang="scss" scoped>
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.con-form {
  width: 100%;
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-size: 0.8rem;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }
  .vs-checkbox-label {
    font-size: 0.8rem;
  }
}

:deep(.vs-input-content) {
  margin: 10px 0px;
  width: 100%;
  .vs-input {
    width: 100%;
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
