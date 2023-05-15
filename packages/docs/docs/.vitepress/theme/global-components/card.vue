<template>
  <div class="card">
    <div class="text">
      <slot></slot>
    </div>

    <div v-if="slots.example" class="example" :class="{ 'mobile': theme.mobileActive }">
      <slot name="example" />
    </div>


    <div v-if="slots.template || slots.script || slots.style" class="slotcode">
      <codex :codesandbox="props.codesandbox" :codepen="props.codepen">
        <template v-if="slots.template" #template>
          <slot name="template" />
        </template>
        <template v-if="slots.script" #script>
          <slot name="script" />
        </template>
        <template v-if="slots.style" #style>
          <slot name="style" />
        </template>
      </codex>
    </div>
  </div>
</template>
<script setup lang='ts'>
import codex from './codex.vue'
import { useData } from 'vitepress';
import { useSlots } from 'vue';
const slots = useSlots()
const { theme } = useData()
const props = defineProps<{
  codesandbox: string,
  codepen?: any
}>()
</script>
<style scoped>
.card .text {
  padding-top: 120px;
}

.card {
  border-radius: 20px;
  overflow: hidden;
  margin: 20px 0px;
  margin-top: 20px;
  margin-bottom: -50px;
  width: 100%;
}

.card:last-of-type {
  margin-bottom: 0px;
}

.card>.text ul {
  margin-left: 40px;
  padding-left: 0px;
}

.card>.text ul li p {
  padding-left: 5px !important;
}

.card .text>img {
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-top: 10px;
  display: block;
  border-radius: 20px;
}

.card .example {
  position: relative;
  z-index: 0;
  padding: 10px;
  margin: auto;
  margin-top: 10px;
  border-radius: 5px 20px 0px 0px;
  border-bottom: 0px solid rgba(0, 0, 0, 0.03);
  background: var(--vs-theme-layout);
  position: relative;
  overflow: hidden;
  transition: all 0.25s ease;
  width: 100%;
  height: auto;
}

.card .example:after {
  transition: all 0.25s ease;
  width: 100%;
  height: 100%;
  content: '';
  position: absolute;
  border: 8px solid var(--vs-theme-bg2);
  box-sizing: border-box;
  top: 0px;
  left: 0px;
  border-radius: 25px;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
}

.card .example:before {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  width: 60px;
  height: 25px;
  content: '';
  position: absolute;
  background: var(--vs-theme-bg2);
  box-sizing: border-box;
  top: 0px;
  left: 50%;
  transform: translate(-50%);
  border-radius: 0px 0px 8px 8px;
  transition: all 0.25s ease;
}

.card .example.mobile {
  width: 260px;
  height: 520px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 25px;
  padding: 30px 20px;
  overflow: auto;
}

.card .example.mobile:after {
  opacity: 1;
  visibility: visible;
}

.card .example.mobile:before {
  opacity: 1;
  visibility: visible;
}

.slotcode {
  position: relative;
  z-index: 0;
}

.card .example.mobile~.slotcode .code {
  border-radius: 20px;
  background: transparent;
}

.card .text h2,
.card .text h3,
.card .text h4,
.card .text h5,
.card .text h6 {
  padding: 15px 20px;
  margin: 0px;
  border-bottom: 0px;
  padding-bottom: 10px;
  transition: all 0.25s ease;
  z-index: 200;
  position: relative;
}

.card .text h2:hover,
.card .text h3:hover,
.card .text h4:hover,
.card .text h5:hover,
.card .text h6:hover {
  padding-left: 40px;
}

.card .text h2 {
  padding-top: 120px;
}

.card .text p {
  padding: 5px 20px;
  margin: 0px;
  font-size: 0.85rem;
  z-index: 200;
  position: relative;
}

.card .text li {
  font-size: 0.85rem;
}

@media (max-width: 500px) {
  .card .text {
    padding: 10px;
  }

  .card .text h2 {
    font-size: 1.3rem;
    padding-top: 80px;
    padding-left: 10px;
    padding-bottom: 0px;
  }

  .card .text p {
    padding-left: 10px;
    padding-top: 10px;
  }
}
</style>
