<template>
  <div class="center">
    <VsToolTip>
      <VsButton gradient> What is Vuesax? </VsButton>
      <template #tooltip>
        <div class="content-tooltip">
          <h4>What is Vuesax?</h4>
          <p>Vuesax is a framework of UI components created with Vuejs</p>
        </div>
      </template>
    </VsToolTip>
    <VsToolTip bottom shadow notHover v-model="activeTooltip1">
      <VsButton color="danger" @click="activeTooltip1 = !activeTooltip1">
        Click Delete User
      </VsButton>
      <template #tooltip>
        <div class="content-tooltip">
          <h4 class="center">Confirm</h4>
          <p>
            You are sure to delete this user, by doing so you cannot recover the
            data
          </p>
          <footer>
            <VsButton
              color="danger"
              @click="activeTooltip1 = false"
              danger
              block
            >
              Delete
            </VsButton>
            <VsButton @click="activeTooltip1 = false" transparent dark block>
              Cancel
            </VsButton>
          </footer>
        </div>
      </template>
    </VsToolTip>
    <VsToolTip shadow interactivity>
      <VsAvatar>
        <img src="/avatars/avatar-5.png" alt="" />
      </VsAvatar>
      <template #tooltip>
        <div class="content-tooltip">
          <div class="body">
            <div class="text">
              Cosed Tasks
              <span> 89 </span>
            </div>
            <VsAvatar
              circle
              size="80"
              @click="activeTooltip1 = !activeTooltip1"
            >
              <img src="/avatars/avatar-5.png" alt="" />
            </VsAvatar>
            <div class="text">
              Open Tasks
              <span> 8 </span>
            </div>
          </div>
          <footer>
            <vs-button circle icon border>
              <i class="bx bxs-share-alt"></i>
            </vs-button>
            <vs-button circle> Message </vs-button>
            <vs-button circle icon border>
              <i class="bx bx-like"></i>
            </vs-button>
          </footer>
        </div>
      </template>
    </VsToolTip>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VsToolTip, VsButton, VsAvatar } from 'vuesax-ts'

const activeTooltip1 = ref(false)
</script>

<style scoped lang="scss">
.content-tooltip {
  h4 {
    margin: 0;
    padding: 8px;
  }
  p {
    margin: 0;
    padding: 0 8px 5px 8px;
  }
  .body {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .text {
      display: flex;
      flex-direction: column;
      padding: 10px;
      span {
        font-weight: bold;
        margin-top: 4px;
      }
    }
    .vs-avatar-content {
      margin: -30px 15px 0 15px;
      border: 3px solid #e8e8e8;
      box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
    }
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
