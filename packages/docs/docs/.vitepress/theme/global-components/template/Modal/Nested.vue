<template>
  <div class="center">
    <VsButton @click="visible = !visible"> Open Dialog 1 </VsButton>
    <VsModal overflow-hidden v-model="visible">
      <template #header>
        <h3>Nested dialogs</h3>
      </template>
      <div class="con-content">
        <VsButton @click="visible2 = !visible2"> Open Dialog 2 </VsButton>
      </div>
    </VsModal>
    <VsModal v-model="visible2">
      <template #header>
        <h4 class="not-margin">Welcome to <b>Vuesax</b></h4>
      </template>

      <div class="con-form">
        <VsInput v-model="email" placeholder="Email">
          <template #icon> @ </template>
        </VsInput>
        <VsInput type="password" v-model="password" placeholder="Password">
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </VsInput>
        <div class="flex">
          <VsCheckbox v-model="remember">Remember me</VsCheckbox>
          <a href="#">Forgot Password?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <VsButton block> Sign In </VsButton>

          <div class="new">New Here? <a href="#">Create New Account</a></div>
        </div>
      </template>
    </VsModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsModal, VsButton, VsInput, VsCheckbox } from 'vuesax-ts'

const visible = ref(false)
const visible2 = ref(false)
const email = ref('')
const password = ref('')
const remember = ref(false)
</script>

<style lang="scss" scoped>
.con-content {
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin: 20px 0px;
    position: relative;
    display: block;
    font-size: 0.9rem;
  }
}
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

.footer-dialog {
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
