<template>
  <div class="code">
    <div :class="{ 'copied': check }" class="noti-code">
      <i class='bx bx-check'></i> Code copied
    </div>
    <header class="header-codex">
      <ul>
        <li title="Codepen" v-if="props.codepen" class="con-link">
          <i class='bx bxl-codepen'></i>
        </li>

        <li title="Codesandbox" v-if="props.codesandbox">
          <svg t="1514359261842" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg" p-id="9197" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px"
            height="15px">
            <path
              d="M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"
              p-id="9198"></path>
          </svg>
        </li>

        <li title="Copy code" :class="{ 'copied': check }" @click="copy">
          <i v-if="!check" class='bx bx-copy'></i>
          <i v-else class='bx bx-check'></i>
        </li>

        <!-- <li class="con-api-link">
          <a href="#vs-api">
            <!API
            <i class='bx bx-list-ul' ></i>
          </a>
        </li> -->

        <li :title="active ? 'hide code' : 'View code'" :class="{ 'active': active }" class="not-a con-link"
          @click="toggleCode">

          <i v-if="!active" class='bx bx-code-alt'></i>

          <i v-else class='bx bx-hide'></i>
        </li>
      </ul>
    </header>
    <transition v-on:before-enter="beforeEnter!" v-on:enter="enter!" v-on:leave="leave!">
      <div ref="codex" v-show="active" class="con-code">
        <ul ref="ul" class="ul-codes">
          <li v-if="slots.template" :class="{ 'active': activeSlot == 0 }" @click="activeSlot = 0">Template</li>
          <li v-if="slots.script" :class="{ 'active': activeSlot == 1 }" @click="activeSlot = 1">Script</li>
          <li v-if="slots.style" :class="{ 'active': activeSlot == 2 }" @click="activeSlot = 2">
            Style
          </li>
          <li v-if="Object.keys(slots).length > 1" :class="{ 'active': activeSlot == 3 }" @click="activeSlot = 3">All</li>
        </ul>
        <div class="con-codes">

          <transition v-on:before-enter="beforeEntercodes!" v-on:enter="entercodes!" v-on:leave="leavecodes!">
            <div ref="slot0" key="0" v-if="activeSlot == 0" class="slot-template slots">
              <slot name="template" />
              <footer @click="toggleCode" :title="active ? 'Hide code' : 'View code'" class="footer-code">
                <i class='bx bx-hide'></i>
              </footer>
            </div>
          </transition>

          <transition v-on:before-enter="beforeEntercodes!" v-on:enter="entercodes!" v-on:leave="leavecodes!">
            <div ref="slot1" key="1" v-if="activeSlot == 1" class="slot-script slots">
              <slot name="script" />

              <footer @click="toggleCode" :title="active ? 'Hide code' : 'View code'" class="footer-code">
                <i class='bx bx-hide'></i>
              </footer>
            </div>
          </transition>

          <transition v-on:before-enter="beforeEntercodes!" v-on:enter="entercodes!" v-on:leave="leavecodes!">
            <div ref="slot2" key="2" v-if="activeSlot == 2" class="slot-style slots">
              <slot name="style" />

              <footer @click="toggleCode" :title="active ? 'Hide code' : 'View code'" class="footer-code">
                <i class='bx bx-hide'></i>
              </footer>
            </div>
          </transition>

          <Transition @before-enter="beforeEntercodes!" @enter="entercodes!" @leave="leavecodes!">
            <div ref="slot3" key="3" v-if="activeSlot == 3" class="slot-all slots">
              <slot name="template" />
              <slot name="script" />
              <slot name="style" />

              <footer @click="toggleCode" :title="active ? 'Hide code' : 'View code'" class="footer-code">
                <i class='bx bx-hide'></i>
              </footer>
            </div>
          </Transition>
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup lang="ts">
import { ref, useSlots } from 'vue'
const slots = useSlots()
const active = ref(false)
const check = ref(false)
const activeSlot = ref(0)
const props = defineProps<{
  codesandbox: any,
  codepen?: any,
}>()
const codex = ref()
// watch:{
//   '$vsTheme.openCode': function (val) {
//     this.active = val
//     localStorage.openCode = val
//   },
//   activeSlot() {
//     this.$nextTick(() => {
//       let ul = this.$refs.ul.scrollHeight
//       let h = this.$refs['slot'+this.activeSlot].scrollHeight
//       this.$refs.codex.style.height = (h + ul) - 1 + 'px'
//     })
//   }
// }
// created() {
//   Vue.observable(this.$site.themeConfig)
// },
// mounted() {
//   this.$vsTheme.openCode = (localStorage.openCode == 'true')
// },
const toggleCode = () => {
  active.value = !active.value
}
// const openCodepen = (url:string)=>{
//   window.open(url)
// }
// const openCodesandbox =(url:string)=>{
//   document.body.style.overflow = 'hidden'
//       codesandbox.value.url = codesandbox.value
// }
// const clipboard = async (text:string)=>{
//   const aux = document.createElement("textarea")
//   aux.value = text
//   aux.className = "vs-clipboard"
//   document.body.appendChild(aux);
//       aux.focus();
//       aux.select();
//       // document.execCommand("copy");
//       await navigator.clipboard.writeText(text)
//       document.body.removeChild(aux);
// }
const copy = () => {
  // let slot = 'template'
  // if(activeSlot.value === 0){
  //   let text = slots.template
  // }else if(activeSlot.value === 1){
  //   slot = 'script'
  //   let text = slots.script
  // }

  //     if(activeSlot.value == 1) {
  //       slot = 'script'
  //     } else if (activeSlot.value == 2) {
  //       slot = 'style'
  //     }
  //     // let text = slots.[slot].elm.innerText
  //     if(slots){
  //       let t = slots.[slot]
  //     if (activeSlot.value == 3) {
  //       t = `
  //         ${props.slots['template'] ? props.slots['template'][0].elm.innerText.trim() : ''}
  //         ${this.slots['script'] ? this.slots['script'][0].elm.innerText.trim() : ''}
  //         ${this.slots['style'] ? this.slots['style'][0].elm.innerText.trim() : ''}

  //       `
  //     }
  //     clipboard(text)
  check.value = true
  setTimeout(() => {
    check.value = false
  }, 3000);
}

// }
// animation
const beforeEnter = (el: HTMLElement) => {
  el.style.height = "0"
}
const enter = (el: HTMLElement, done: () => {}) => {
  let h = el.scrollHeight
  el.style.height = h - 1 + 'px'
  codex.value.style.height = h + 15 + 'px'
  done()
}
const leave = (el: HTMLElement) => {
  el.style.height = '0px'
}
const beforeEntercodes = (el: HTMLElement) => {
  el.style.height = "0"
  el.style.opacity = "0"
  el.style.position = 'absolute'
}
const entercodes = (el: HTMLElement, done: () => {}) => {
  let h = el.scrollHeight
  el.style.position = 'relative'
  el.style.height = h - 1 + 'px'
  codex.value.style.height = h + 50 + 'px'
  el.style.opacity = "1"
  done()
}
const leavecodes = (el: HTMLElement) => {
  el.style.height = '0px'
  el.style.opacity = "0"
  el.style.position = 'absolute'
}

</script>
<style scoped >
@media (max-width: 500px) {

  div[class*="language-"] pre,
  div[class*="language-"] pre[class*="language-"] {
    padding-left: 5px;
    padding-right: 5px;
  }
}

.noti-code {
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-width: 500px;
  background: var(--vs-theme-color);
  left: 50%;
  transform: translate(-50%, 100%);
  padding: 10px 20px;
  text-align: center;
  color: var(--vs-theme-layout);
  border-radius: 20px 20px 0px 0px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease;
  z-index: 50;
}

.noti-code i {
  position: absolute;
  left: 0px;
  top: 0px;
  font-size: 20px;
  width: 45px;
  height: 45px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.noti-code.copied {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0%);
}

.footer-code {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  color: #fff;
  cursor: pointer;
  transition: all 0.25s ease;
}

.footer-code:hover {
  opacity: 0.4;
}

.slot-all>div:nth-last-child(2) pre {
  margin-bottom: 0px;
}

.slot-all>div:last-child div[class*="language-"] {
  border-radius: 0px 0px 20px 20px;
}

.slot-all>div:last-child div[class*="language-"] pre {
  margin-bottom: 0px !important;
}

.con-codes {
  position: relative;
  width: 100%;
}


.slots {
  transition: all 0.25s ease;
  width: 100%;
  overflow: hidden;
  top: 0px;
  left: 0px;
}

.slots div {
  width: 100%;
}

.slots div pre {
  width: 100%;
}

.slots>div:last-child div[class*="language-"] {
  border-radius: 0px 0px 20px 20px;
}

.ul-codes {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  margin: 0px;
}

.ul-codes li {
  list-style: none;
  padding: 10px;
  font-size: 0.75rem;
  opacity: 0.4;
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;
  color: #fff;
  user-select: none;
}

.ul-codes li:after {
  content: '';
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%);
  height: 2px;
  width: 0%;
  background: #fff;
  transition: all 0.25s ease;
}

.ul-codes li:hover {
  opacity: 1;
}

.ul-codes li.active {
  opacity: 1;
}

.ul-codes li.active:after {
  width: 100%;
}

.code {
  background: var(--vs-theme-layout);
  z-index: 300;
  position: relative;
  padding-bottom: 10px;
  transition: all 0.25s ease;
}

.input-transparent {
  position: absolute;
  z-index: 0;
  opacity: 0;
  bottom: 0px;
  right: 0px;
}

.con-code {
  display: block;
  transition: all 0.25s ease;
  background: var(--vs-theme-code2);
  border-radius: 20px;
  width: calc(100% - 20px);
  margin: 0px 10px;
}

.con-code div[class*="language-"] {
  border-radius: 0px;
}

.con-code pre {
  margin-top: 0px !important;
}

.header-codex {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-codex ul {
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
  justify-content: center;
  width: 100%;
  padding: 0px 4px;
  align-items: stretch;
  padding-top: 10px;
}

.header-codex ul li {
  list-style: none;
  color: var(--vs-theme-color);
  opacity: 0.6;
  padding: 3px 10px;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 12px;
  background: transparent;
  outline: none !important;
}

.header-codex ul li.copied {
  transform: scale(1.3);
  opacity: 1 !important;
}

.header-codex ul li.copied i {
  color: #46c93a !important;
}

.header-codex ul li:nth-last-child(3) {
  position: relative;
  padding-right: 15px;
  margin-right: 5px;
}

.header-codex ul li:nth-last-child(3):after {
  content: '';
  position: absolute;
  right: 0px;
  height: 60%;
  top: 20%;
  width: 1px;
  display: block;
}

.header-codex ul li.active {
  color: #2564ff !important;
  opacity: 1;
  border-radius: 12px 12px 0px 0px;
  background: var(--vs-theme-code2);
}

.header-codex ul li.active i {
  color: #fff !important;
}

.header-codex ul li svg,
.header-codex ul li i {
  max-width: 18px;
  fill: var(--vs-theme-color) !important;
}

.header-codex ul li:hover {
  opacity: 1;
}

.header-codex ul li:not(.not-a) svg {
  transition: all 0.25s ease;
  pointer-events: none;
}

@media (max-width: 500px) {
  .code .con-code {
    width: 100%;
    margin: 0px;
  }
}
</style>

<style>
.con-codes div[class*=language-] {
  background-color: var(--vs-theme-code);
  position: relative;

}

.con-codes div[class*=language-] pre {
  position: relative;
  margin: 0;
  padding: 20px;
  line-height: 1.6;
}

.con-codes div[class*=language-] pre .highlighted {
  position: relative;
  display: inline-block;
  width: 110%;
  background-color: hsla(0, 0%, 100%, .05);
  border-left: 6px solid hsla(0, 0%, 100%, .2);
}

/* .con-codes div[class*=language-] pre .highlighted::after {
  content: "";
  height: 10px;
  width: 20px;
  position: absolute;
  left: 0;
  background-color: hsla(0, 0%, 100%, .05);
  border-left: 6px solid hsla(0, 0%, 100%, .2);
} */

.con-codes div[class*=language-] button {
  display: none;
}

.con-codes div[class*=language-]>span {
  position: absolute;
  top: .8em;
  right: 1em;
  font-size: .75rem;
  color: hsla(0, 0%, 100%, .4);
}
</style>
