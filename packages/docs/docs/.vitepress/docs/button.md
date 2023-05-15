---
PROPS:
  - name: color
    type: String
    values: primary, success, danger, warning, dark, RGB, HEX
    description: Change the color of the component and some of its sub components.
    default: primary
    link: /api/color
    usage: '#color'
    code: >
            <Vsbutton
              color="success"
            >
              Success
            </Vsbutton>
  # _______________________________________
  - name: style button
    type: Prop
    values: flat, border, gradient, transparent, dashed, shadow, relief, floating
    description: Change the style of the component and its states.
    default: null
    link: null
    usage: '#flat'
    code: >
            <Vsbutton
              flat
              >
              Flat
            </Vsbutton>
  # _______________________________________
  - name: active
    type: Boolean
    values: true, false
    description: Determine if the component is active and change its style to that state.
    default: false
    link: null
    usage: '#default'
    code: >
            <Vsbutton active >
              Default
            </Vsbutton>
  # _______________________________________
  - name: upload
    type: Boolean
    values: true, false
    description: Determine if the component has the upload status active by changing the style and adding the animation.
    default: false
    link: null
    usage: '#upload'
    code: >
            <Vsbutton upload >
              <i class='bx bxs-wallet'></i> Wallet
            </Vsbutton>
  # _______________________________________
  - name: to
    type: String
    values: url - vue-router
    description: Add the functionality of vue-router to the button, clicking it will redirect to the last route.
    default: false
    link: null
    usage: '#to-href'
    code: >
            <Vsbutton to="/" >
              Example prop - to
            </Vsbutton>
  # _______________________________________
  - name: href
    type: String
    values: href - link
    description: Add an href of an external link to add the functionality by clicking on the component.
    default: false
    link: null
    usage: '#to-href'
    code: >
            <Vsbutton href="https://lusaxweb.github.io/vuesax/" >
              Example prop - url
            </Vsbutton>
  # _______________________________________
  - name: blank
    type: Boolean
    values: true, false
    description: as in an html element `a` determines whether a new window is opened or the current one is replaced.
    default: false
    link: null
    usage: '#to-href'
    code: >
            <Vsbutton blank href="https://lusaxweb.github.io/vuesax/" >
              Example prop - url
            </Vsbutton>
  # _______________________________________
  - name: icon
    type: Boolean
    values: true, false
    description: Determine if the component contains only one icon, by adding this property the component has an equal width and height.
    default: false
    link: null
    usage: '#icon'
    code: >
            <Vsbutton icon >
              <i class='bx bx-home-alt'></i>
            </Vsbutton>
  # _______________________________________
  - name: circle
    type: Boolean
    values: true, false
    description: Change the border radius to give a circle style.
    default: false
    link: null
    usage: '#circle'
    code: >
            <Vsbutton icon circle >
              <i class='bx bx-home-alt'></i>
            </Vsbutton>
  # _______________________________________
  - name: square
    type: Boolean
    values: true, false
    description: Change the border radius to give a rectangle style.
    default: false
    link: null
    usage: '#square'
    code: >
            <Vsbutton icon square > // <------
              <i class='bx bx-home-alt'></i>
            </Vsbutton>
  # _______________________________________
  - name: block
    type: Boolean
    values: true, false
    description: Change the width of the component to the possible total determined by the parent element.
    default: false
    link: null
    usage: '#block'
    code: >
            <Vsbutton block >
              <i class='bx bxs-paint-roll' ></i> Edit Theme
            </Vsbutton>
  # _______________________________________
  - name: animationType
    type: Boolean
    values: true, false
    description: Change the type of animation, this property only works if you have the <code> slot </code> animate.
    default: false
    link: null
    usage: '#animate'
    code: >
            <Vsbutton flat color="success" animation-type="vertical" >
              Message
              <template v-slot:animate >
                <i class='bx bx-mail-send' ></i> Send
              </template>
            </Vsbutton>
  # _______________________________________
  - name: animateInactive
    type: Boolean
    values: true, false
    description: Determine if the animation is active for the user when hovering.
    default: false
    link: null
    usage: '#toggle'
    code: >
            <Vsbutton :animate-inactive="successFace" @click="handleClickFace" :loading="loadingFace" color="facebook">
              <i class='bx bxl-facebook-square' ></i>
              {{ successFace ? 'Logout' : 'Facebook' }}
              <template v-slot:animate >
                <i class='bx bx-user' ></i> Login
              </template>
            </Vsbutton>
  # _______________________________________
SLOTS:
  - name: animate
    type: slot
    values: null
    description: Slot To add the element that will be displayed in the animation.
    default: null
    link: null
    code: >
          <Vsbutton >
            Home
            <template v-slot:animate >
              <i class='bx bx-home-alt' ></i>
            </template>
          </Vsbutton>
    usage: '#animated'
  # _______________________________________
NEWS:
  - loading
  - upload
  - block
  - animate
  - floating
  - social
  - group
  - toggle
  - to-href
---

# Button

<card codesandbox="https://codesandbox.io/embed/reverent-shape-pmyk2?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue">

## Default

<docs-warn />

The buttons are a fundamental part of any project, with vuesax you can add a great button with a single line of code

the buttons have all the states as active, focus, hover, to make its implementation simpler and speed up the work
<script setup>
import {reactive} from 'vue'
const active = reactive({
  default: 0,
  flat:0,
  border:0,
  gradient:0,
  relief:0,
  transparent:0,
  shadow:0,
  color:0,
  icon:0,
  iconText:0,
  circle:0,
  square:0,
  size:0,
  loading:0,
  upload:0,
})
const toggle = reactive({
  sending: false,
  success: false,

  loadingFace: false,
  successFace: false,
})
const handleClick = ()=> {
  toggle.sending = true

  setTimeout(() => {
  toggle.sending = false
  toggle.success = !this.success
  }, 2000);
}
const handleClickFace = ()=> {
  toggle.loadingFace = true

  setTimeout(() => {
    toggle.loadingFace = false
    toggle.successFace = !toggle.successFace
  }, 2000);
}
</script>
<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
}
.toggle span{
    display:flex;
    align-items:center;
    justify-content:center;
}

.toggle i.bx:not(.bx-check) {
  padding-right: 5px;
  font-size: 1.1rem;
}

</style>

<template #example>
  <div class="center">
    <VsButton
      :active="active.default === 0"
      @click="active.default = 0"
    >
      Active
    </VsButton>
    <VsButton
      :active="active.default === 1"
      @click="active.default = 1"
    >
      Default
    </VsButton>
    <VsButton
    disabled>
      Disabled
    </VsButton>
  </div>
</template>

<template #template>

  ```html
    <template>
      <div>
        <Vsbutton
          :active="active.default === 0"
          @click="active.default = 0"
        >
          Active
        </Vsbutton>
        <Vsbutton
          :active="active.default === 1"
          @click="active.default = 1"
        >
          Default
        </Vsbutton>
        <Vsbutton disabled >Disabled</Vsbutton>
      </div>
    </template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import {reactive} from 'vue'
    const active = reactive({
      default: 0,
    })
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/charming-maxwell-ms0xf?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark">

## Flat

You can change the full style towards *flat* of a button with the `flat` property that its value is a `boolean`, so just adding it will change the styles

<template #example>
  <div class="center">
    <VsButton
      flat
      :active="active.flat === 0"
      @click="active.flat = 0"
    >
      Active
    </VsButton>
    <VsButton
      flat
      :active="active.flat === 1"
      @click="active.flat = 1"
    >
      Default
    </VsButton>
    <VsButton
    flat
    disabled>
      Disabled
    </VsButton>
  </div>
</template>

<template #template>

  ```html{4}
<template>
  <div class="center">
    <VsButton
      flat
      :active="active.flat === 0"
      @click="active.flat = 0"
    >
      Active
    </VsButton>
    <VsButton
      flat
      :active="active.flat === 1"
      @click="active.flat = 0"
    >
      Default
    </VsButton>
    <VsButton
    flat
    disabled>
      Disabled
    </VsButton>
  </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import {reactive} from 'vue'
    const active = reactive({
      flat: 0,
    })
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-border-zc0td?fontsize=14&hidenavigation=1&theme=dark">

## Border

You can change the full style towards *border* of a button with the `border` property that its value is a `boolean` so just adding it will change the styles

<template #example>
  <div class="center">
  <VsButton
      border
      :active="active.border === 0"
      @click="active.border = 0"
    >
   Active
  </VsButton>
  <VsButton
      border
      :active="active.border === 1"
      @click="active.border = 1"
    >
   Default
  </VsButton>
  <VsButton
      border
      disabled
    >
   Disabled
  </VsButton>
 </div>
</template>

<template #template>

  ```html{4}
    <template>
  <div class="center">
  <VsButton
      border
      :active="active.border === 0"
      @click="active.border = 0"
    >
   Active
  </VsButton>
  <VsButton
      border
      :active="active.border === 1"
      @click="active.border = 1"
    >
   Default
  </VsButton>
  <VsButton
      border
      disabled
    >
   Disabled
  </VsButton>
 </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      border: 0,
    })
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-gradient-7en0i?fontsize=14&hidenavigation=1&theme=dark">

## Gradient

You can change the full style towards *Gradient* of a button with the `gradient` property that its value is a `boolean`, so just adding it will change the styles

:::tip Gradient Auto Color
  Gradient colors are automatically generated by the `color` property which in this example is the`primary` color
:::

<template #example>
  <div class="center">
    <VsButton
      gradient
      :active="active.gradient === 0"
      @click="active.gradient = 0"
    >
      Active
    </VsButton>
    <VsButton
      gradient
      :active="active.gradient === 1"
      @click="active.gradient = 1"
    >
      Default
    </VsButton>
    <VsButton
      gradient
      disabled
    >
      Disabled
    </VsButton>
  </div>
</template>

<template #template>

  ```html{4}
    <template>
  <div class="center">
    <VsButton
      gradient
      :active="active.gradient === 0"
      @click="active.gradient = 0"
    >
      Active
    </VsButton>
    <VsButton
      gradient
      :active="active.gradient === 1"
      @click="active.gradient = 1"
    >
      Default
    </VsButton>
    <VsButton
      gradient
      disabled
    >
      Disabled
    </VsButton>
  </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      gradient: 0,
    })
    </script>
  ```

</template>


</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-relief-7dfh7?fontsize=14&hidenavigation=1&theme=dark">

## Relief

Change the style of the button to a relief aspect with the `relief` property, the property is a `boolean` so you can add it without any value.

<template #example>
   <div class="center">
    <VsButton
      relief
      :active="active.relief === 0"
      @click="active.relief = 0"
    >
      Active
    </VsButton>
    <VsButton
      relief
      :active="active.relief === 1"
      @click="active.relief = 1"
    >
      Default
    </VsButton>
    <VsButton
      relief
      disabled
    >
      Disabled
    </VsButton>
  </div>
</template>

<template #template>

  ```html{4}
  <template>
   <div class="center">
    <VsButton
      relief
      :active="active.relief === 0"
      @click="active.relief = 0"
    >
      Active
    </VsButton>
    <VsButton
      relief
      :active="active.relief === 1"
      @click="active.relief = 1"
    >
      Default
    </VsButton>
    <VsButton
      relief
      disabled
    >
      Disabled
    </VsButton>
  </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      relief: 0,
    })
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-transparent-4t6d6?fontsize=14&hidenavigation=1&theme=dark">

## Transparent

Change the style of the button with the `transparent` property, the property is a `boolean` so you can add it without any value.

<template #example>
  <div class="center">
    <VsButton
      transparent
      :active="active.transparent === 0"
      @click="active.transparent = 0"
    >
      Active
    </VsButton>
    <VsButton
      transparent
      :active="active.transparent === 1"
      @click="active.transparent = 1"
    >
      Default
    </VsButton>
    <VsButton
      transparent
      disabled
    >
      Disabled
    </VsButton>
  </div>
</template>

<template #template>

  ```html{4}
    <template>
      <div>
        <Vsbutton
          transparent
          :active="active.transparent === 0"
          @click="active.transparent = 0"
        >
          Active
        </Vsbutton>
        <Vsbutton
          transparent
          :active="active.transparent === 1"
          @click="active.transparent = 1"
        >
          Default
        </Vsbutton>
        <Vsbutton
          transparent
          disabled
        >
          Disabled
        </Vsbutton>
      </div>
    </template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      transparent: 0,
    })
    </script>
  ```

</template>


</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-shadow-ufx6y?fontsize=14&hidenavigation=1&theme=dark">

## Shadow

Change the style of the button with the `shadow` property, the property is a `boolean` so you can add it without any value.

<template #example>
   <div class="center">
    <VsButton
      shadow
      :active="active.shadow === 0"
      @click="active.shadow = 0"
    >
      Active
    </VsButton>
    <VsButton
      shadow
      :active="active.shadow === 1"
      @click="active.shadow = 1"
    >
      Default
    </VsButton>
    <VsButton
      shadow
      disabled
    >
      Disabled
    </VsButton>
  </div>
</template>

<template #template>

  ```html{4}
<template>
   <div class="center">
    <VsButton
      shadow
      :active="active.shadow === 0"
      @click="active.shadow = 0"
    >
      Active
    </VsButton>
    <VsButton
      shadow
      :active="active.shadow === 1"
      @click="active.shadow = 1"
    >
      Default
    </VsButton>
    <VsButton
      shadow
      disabled
    >
      Disabled
    </VsButton>
  </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      shadow: 0,
    })
    </script>
  ```

</template>


</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-colors-gje98?fontsize=14&hidenavigation=1&theme=dark">

## Color

Change the color of the Button component with the `color` property and the color value for example (**#fff**, **rgba (100,10,5)** or the **main colors of vuesax**), this will only affect the component and its value can be dynamic

<utils-color />

<template #example>
    <div class="center">
    <VsButton
      :active="active.color === 0"
      @click="active.color = 0"
    >
      Default
    </VsButton>
    <VsButton
      success
      flat
      :active="active.color === 1"
      @click="active.color = 1"
    >
      Success
    </VsButton>
    <VsButton
      danger
      border
      :active="active.color === 2"
      @click="active.color = 2"
    >
      Danger
    </VsButton>
    <VsButton
      warn
      gradient
      :active="active.color === 3"
      @click="active.color = 3"
    >
      Warn
    </VsButton>
    <VsButton
        dark
        shadow
        :active="active.color === 4"
        @click="active.color = 4"
      >
        Dark
      </VsButton>
      <VsButton
        color="#7d33ff"
        relief
        :active="active.color === 5"
        @click="active.color = 5"
      >
          HEX
      </VsButton>
      <VsButton
        color="rgb(59,222,200)"
        gradient
        :active="active.color === 6"
        @click="active.color = 6"
      >
        RGB
      </VsButton>
  </div>
</template>

<template #template>

  ```html{10}
<template>
    <div class="center">
    <VsButton
      :active="active.color === 0"
      @click="active.color = 0"
    >
      Default
    </VsButton>
    <VsButton
      shadow
      success
      flat
      :active="active.color === 1"
      @click="active.color = 1"
    >
      Success
    </VsButton>
    <VsButton
      danger
      border
      :active="active.color === 2"
      @click="active.color = 2"
    >
      Danger
    </VsButton>
    <VsButton
      warn
      gradient
      :active="active.color === 3"
      @click="active.color = 3"
    >
      Warn
    </VsButton>
    <VsButton
        dark
        shadow
        :active="active.color === 4"
        @click="active.color = 4"
      >
        Dark
      </VsButton>
      <VsButton
        color="#7d33ff"
        relief
        :active="active.color === 5"
        @click="active.color = 5"
      >
          HEX
      </VsButton>
      <VsButton
        color="rgb(59,222,200)"
        gradient
        :active="active.color === 6"
        @click="active.color = 6"
      >
        RGB
      </VsButton>
  </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      color: 0,
    })
    </script>
  ```

</template>


</card>

<card>

## Icon

If you need an icon-only button use the `icon` property, the property is a `boolean` so you can add it without any value.

This property makes the button have a specific size making it the same width and height, do not use when it is icon and text

<div>
  <div>
    <div class="warning custom-block">
      <p class="custom-block-title">
        Iconos por defecto
      </p>
      <p>
        Vuesax no usa ninguna librería o fuente de iconos por defecto, con esto damos la libertad de usar la que prefieras Todos los componentes que usen en algún lugar un icono por defecto como el de close en un <b>Alert</b> o un <b>Popup</b> va a ser un <b>svg</b> para no tener que instalar ningún tipo de fuente externa, y se podrá sustituir con un <code>slot="icon"</code> por el icono de su preferencia
      </p>
    </div>
    <div class="tip custom-block">
      <p class="custom-block-title">
        Vuesax Docs Icons
      </p>
      <p>
        Estos documentos y los ejemplos usan la libreria de componentes <a target="_blank" href="https://boxicons.com/">boxicons</a>, no es obligatoria o necesaria para el uso de Vuesax pero la recomendamos por su amplia gama de iconos y como complementan visualmente el framework
      </p>
    </div>
  </div>
</div>

<template #example>
    <div class="center">
    <VsButton
      icon
      :active="active.icon === 0"
      @click="active.icon = 0"
    >
      <i class='bx bx-home-alt'></i>
    </VsButton>
    <VsButton
      icon
        color="success"
        flat
        :active="active.icon === 1"
        @click="active.icon = 1"
    >
      <i class='bx bxs-phone-call'></i>
    </VsButton>
    <VsButton
      icon
        color="danger"
        border
        :active="active.icon === 2"
        @click="active.icon = 2"
    >
      <i class='bx bxs-heart'></i>
    </VsButton>
    <VsButton
      icon
      color="warn"
      gradient
      :active="active.icon === 3"
      @click="active.icon = 3"
    >
      <i class='bx bxs-bell-ring'></i>
    </VsButton>
    <VsButton
      icon
        color="#7d33ff"
        relief
        :active="active.icon === 4"
        @click="active.icon = 4"
    >
      <i class='bx bxs-paper-plane'></i>
    </VsButton>
    <VsButton
      icon
        color="rgb(59,222,200)"
        gradient
        :active="active.icon == 6"
        @click="active.icon = 6"
    >
      <i class='bx bxs-purchase-tag'></i>
    </VsButton>
 
  </div>
</template>

<template #template>

  ```html{4}
<template #example>
    <div class="center">
    <VsButton
      icon
      :active="active.icon === 0"
      @click="active.icon = 0"
    >
      <i class='bx bx-home-alt'></i>
    </VsButton>
    <VsButton
      icon
        color="success"
        flat
        :active="active.icon === 1"
        @click="active.icon = 1"
    >
      <i class='bx bxs-phone-call'></i>
    </VsButton>
    <VsButton
      icon
        color="danger"
        border
        :active="active.icon === 2"
        @click="active.icon = 2"
    >
      <i class='bx bxs-heart'></i>
    </VsButton>
    <VsButton
      icon
      color="warn"
      gradient
      :active="active.icon === 3"
      @click="active.icon = 3"
    >
      <i class='bx bxs-bell-ring'></i>
    </VsButton>
    <VsButton
      icon
        color="#7d33ff"
        relief
        :active="active.icon === 4"
        @click="active.icon = 4"
    >
      <i class='bx bxs-paper-plane'></i>
    </VsButton>
    <VsButton
      icon
        color="rgb(59,222,200)"
        gradient
        :active="active.icon == 6"
        @click="active.icon = 6"
    >
      <i class='bx bxs-purchase-tag'></i>
    </VsButton>
 
  </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      icon: 0,
    })
    </script>
  ```

</template>


</card>

<card>

## Icon - Text

If you need a button with text and icon you can do them by adding them in the `slot` default.

<template #example>
    <div class="center">
      <VsButton
        :active="active.iconText === 0"
        @click="active.iconText = 0"
      >
        <i class="bx bx-home-alt"></i> Home
      </VsButton>
      <VsButton
        success
        flat
        :active="active.iconText === 1"
        @click="active.iconText = 1"
      >
        <i class="bx bxs-phone-call"></i> Call
      </VsButton>
      <VsButton
        danger
        border
        :active="active.iconText === 2"
        @click="active.iconText = 2"
      >
        <i class="bx bxs-heart"></i> Like
      </VsButton>
      <VsButton
        warn
        gradient
        :active="active.iconText === 3"
        @click="active.iconText = 3"
      >
        <i class="bx bxs-bell-ring"></i> Notifications
      </VsButton>
      <VsButton
        color="#7d33ff"
        relief
        :active="active.iconText === 5"
        @click="active.iconText = 5"
      >
        <i class="bx bxs-paper-plane"></i> Send
      </VsButton>
      <VsButton
        color="rgb(59,222,200)"
        gradient
        :active="active.iconText === 6"
        @click="active.iconText = 6"
      >
        <i class="bx bxs-purchase-tag"></i> Save
      </VsButton>
    </div>
</template>

<template #template>

  ```html{7}
<template #example>
    <div class="center">
      <VsButton
        :active="active.iconText === 0"
        @click="active.iconText = 0"
      >
        <i class="bx bx-home-alt"></i> Home
      </VsButton>
      <VsButton
        success
        flat
        :active="active.iconText === 1"
        @click="active.iconText = 1"
      >
        <i class="bx bxs-phone-call"></i> Call
      </VsButton>
      <VsButton
        danger
        border
        :active="active.iconText === 2"
        @click="active.iconText = 2"
      >
        <i class="bx bxs-heart"></i> Like
      </VsButton>
      <VsButton
        warn
        gradient
        :active="active.iconText === 3"
        @click="active.iconText = 3"
      >
        <i class="bx bxs-bell-ring"></i> Notifications
      </VsButton>
      <VsButton
        color="#7d33ff"
        relief
        :active="active.iconText === 5"
        @click="active.iconText = 5"
      >
        <i class="bx bxs-paper-plane"></i> Send
      </VsButton>
      <VsButton
        color="rgb(59,222,200)"
        gradient
        :active="active.iconText === 6"
        @click="active.iconText = 6"
      >
        <i class="bx bxs-purchase-tag"></i> Save
      </VsButton>
    </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      iconText: 0,
    })
    </script>
  ```

</template>


</card>

<card>

## Circle

You can completely round the corners with the `circle` property, the property is a `boolean` so you can add it without any value.

<template #example>
    <div class="center">
    <VsButton
      circle
      :active="active.circle === 0"
      @click="active.circle = 0"
    >
      Home
    </VsButton>
    <VsButton
      circle
      icon
      success
      flat
      :active="active.circle === 1"
      @click="active.circle = 1"
    >
      <i class="bx bxs-phone-call"></i>
    </VsButton>
    <VsButton
      circle
      danger
      border
      :active="active.circle === 2"
      @click="active.circle = 2"
    >
      <i class="bx bxs-heart"></i> Like
    </VsButton>
    <VsButton
      circle
      color="warn"
      gradient
      :active="active.circle === 3"
      @click="active.circle = 3"
    >
      Notifications <i class="bx bxs-bell-ring"></i>
    </VsButton>
    <VsButton
      circle
      icon
      color="#7d33ff"
      relief
      :active="active.circle === 5"
      @click="active.circle = 5"
    >
      <i class="bx bxs-paper-plane"></i>
    </VsButton>
    <VsButton
      circle
      icon
      color="rgb(59,222,200)"
      gradient
      :active="active.circle === 6"
      @click="active.circle = 6"
    >
      <i class="bx bxs-purchase-tag"></i>
    </VsButton>
  </div>
</template>

<template #template>

  ```html{4}
    <template #example>
    <div class="center">
    <VsButton
      circle
      :active="active.circle === 0"
      @click="active.circle = 0"
    >
      Home
    </VsButton>
    <VsButton
      circle
      icon
      success
      flat
      :active="active.circle === 1"
      @click="active.circle = 1"
    >
      <i class="bx bxs-phone-call"></i>
    </VsButton>
    <VsButton
      circle
      danger
      border
      :active="active.circle === 2"
      @click="active.circle = 2"
    >
      <i class="bx bxs-heart"></i> Like
    </VsButton>
    <VsButton
      circle
      color="warn"
      gradient
      :active="active.circle === 3"
      @click="active.circle = 3"
    >
      Notifications <i class="bx bxs-bell-ring"></i>
    </VsButton>
    <VsButton
      circle
      icon
      color="#7d33ff"
      relief
      :active="active.circle === 5"
      @click="active.circle = 5"
    >
      <i class="bx bxs-paper-plane"></i>
    </VsButton>
    <VsButton
      circle
      icon
      color="rgb(59,222,200)"
      gradient
      :active="active.circle === 6"
      @click="active.circle = 6"
    >
      <i class="bx bxs-purchase-tag"></i>
    </VsButton>
  </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      circle: 0,
    })
    </script>
  ```

</template>


</card>

<card>

## Square

You can make all the corners completely straight with the `Square` property, the property is a `boolean` so you can add it without any value.

<template #example>
  <div class="center">
    <VsButton
      square
      :active="active.square === 0"
      @click="active.square = 0"
    >
      Home
    </VsButton>
    <VsButton
      square
      icon
      success
      flat
      :active="active.square === 1"
      @click="active.square = 1"
    >
      <i class="bx bxs-phone-call"></i>
    </VsButton>
    <VsButton
      square
      danger
      border
      :active="active.square === 2"
      @click="active.square = 2"
    >
      <i class="bx bxs-heart"></i> Like
    </VsButton>
    <VsButton
      square
      warn
      gradient
      :active="active.square === 3"
      @click="active.square = 3"
    >
      Notifications <i class="bx bxs-bell-ring"></i>
    </VsButton>
    <VsButton
      square
      icon
      color="#7d33ff"
      relief
      :active="active.square === 5"
      @click="active.square = 5"
    >
      <i class="bx bxs-paper-plane"></i>
    </VsButton>
    <VsButton
      square
      icon
      color="rgb(59,222,200)"
      gradient
      :active="active.square === 6"
      @click="active.square = 6"
    >
      <i class="bx bxs-purchase-tag"></i>
    </VsButton>
  </div>
</template>

<template #template>

  ```html{4}
    <template #example>
  <div class="center">
    <VsButton
      square
      :active="active.square === 0"
      @click="active.square = 0"
    >
      Home
    </VsButton>
    <VsButton
      square
      icon
      success
      flat
      :active="active.square === 1"
      @click="active.square = 1"
    >
      <i class="bx bxs-phone-call"></i>
    </VsButton>
    <VsButton
      square
      danger
      border
      :active="active.square === 2"
      @click="active.square = 2"
    >
      <i class="bx bxs-heart"></i> Like
    </VsButton>
    <VsButton
      square
      warn
      gradient
      :active="active.square === 3"
      @click="active.square = 3"
    >
      Notifications <i class="bx bxs-bell-ring"></i>
    </VsButton>
    <VsButton
      square
      icon
      color="#7d33ff"
      relief
      :active="active.square === 5"
      @click="active.square = 5"
    >
      <i class="bx bxs-paper-plane"></i>
    </VsButton>
    <VsButton
      square
      icon
      color="rgb(59,222,200)"
      gradient
      :active="active.square === 6"
      @click="active.square = 6"
    >
      <i class="bx bxs-purchase-tag"></i>
    </VsButton>
  </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      square: 0,
    })
    </script>
  ```

</template>


</card>

<card>

## Size

Change the size of the entire button including padding, font-size and border with the `size` property

values:

- xl
- l
- default
- small
- mini

<template #example>
  <div class="center">
    <VsButton
      size="xl"
      :active="active.size === 0"
       @click="active.size = 0"
    >
      XLarge
    </VsButton>
    <VsButton
      size="large"
      :active="active.size === 1"
      @click="active.size = 1"
    >
      Large
    </VsButton>
    <VsButton
      :active="active.size === 2"
      @click="active.size = 2"
    >
      Default
    </VsButton>
    <VsButton
      size="small"
      :active="active.size === 3"
      @click="active.size = 3"
    >
      Small
    </VsButton>
    <VsButton
      size="mini"
      :active="active.size === 4"
      @click="active.size = 4"
    >
      Mini
    </VsButton>
  </div>
</template>

<template #template>

  ```html{4}
    <template>
  <div class="center">
    <VsButton
      size="xl"
      :active="active.size === 0"
       @click="active.size = 0"
    >
      XLarge
    </VsButton>
    <VsButton
      size="large"
      :active="active.size === 1"
      @click="active.size = 1"
    >
      Large
    </VsButton>
    <VsButton
      :active="active.size === 2"
      @click="active.size = 2"
    >
      Default
    </VsButton>
    <VsButton
      size="small"
      :active="active.size === 3"
      @click="active.size = 3"
    >
      Small
    </VsButton>
    <VsButton
      size="mini"
      :active="active.size === 4"
      @click="active.size = 4"
    >
      Mini
    </VsButton>
  </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      size: 0,
    })
    </script>
  ```

</template>


</card>

<card>

## Loading <Badge text="New"/>

Now you can add a loading status with the `loading` property, the property is a `boolean` so you can add it without any value.

<template #example>
  <div class="center">
    <VsButton
      loading
      :active="active.loading === 0"
      @click="active.loading = 0"
    >
      Home
    </VsButton>
    <VsButton
      loading
      icon
      success
      flat
      :active="active.loading === 1"
      @click="active.loading = 1"
    >
      <i class="bx bxs-phone-call"></i>
    </VsButton>
    <VsButton
      loading
      danger
      border
      :active="active.loading === 2"
      @click="active.loading = 2"
    >
      <i class="bx bxs-heart"></i> Like
    </VsButton>
    <VsButton
      loading
      warn
      gradient
      :active="active.loading === 3"
      @click="active.loading = 3"
    >
      Notifications <i class="bx bxs-bell-ring"></i>
    </VsButton>
    <VsButton
      loading
      icon
      color="#7d33ff"
      relief
      :active="active.loading === 4"
      @click="active.loading = 4"
    >
      <i class="bx bxs-paper-plane"></i>
    </VsButton>
    <VsButton
      loading
      icon
      color="rgb(59,222,200)"
      gradient
      :active="active.loading === 4"
      @click="active.loading = 4"
    >
      <i class="bx bxs-purchase-tag"></i>
    </VsButton>
  </div>
</template>

<template #template>

  ```html{4}
<template>
  <div class="center">
    <VsButton
      loading
      :active="active.loading === 0"
      @click="active.loading = 0"
    >
      Home
    </VsButton>
    <VsButton
      loading
      icon
      success
      flat
      :active="active.loading === 1"
      @click="active.loading = 1"
    >
      <i class="bx bxs-phone-call"></i>
    </VsButton>
    <VsButton
      loading
      danger
      border
      :active="active.loading === 2"
      @click="active.loading = 2"
    >
      <i class="bx bxs-heart"></i> Like
    </VsButton>
    <VsButton
      loading
      warn
      gradient
      :active="active.loading === 3"
      @click="active.loading = 3"
    >
      Notifications <i class="bx bxs-bell-ring"></i>
    </VsButton>
    <VsButton
      loading
      icon
      color="#7d33ff"
      relief
      :active="active.loading === 4"
      @click="active.loading = 4"
    >
      <i class="bx bxs-paper-plane"></i>
    </VsButton>
    <VsButton
      loading
      icon
      color="rgb(59,222,200)"
      gradient
      :active="active.loading === 4"
      @click="active.loading = 4"
    >
      <i class="bx bxs-purchase-tag"></i>
    </VsButton>
  </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      loading: 0,
    })
    </script>
  ```

</template>


</card>

<card>

## Upload <Badge text="New"/>

Now you can add a status of sending or uploading data to the server with the `upload` property, the property is a `boolean` so you can add it without any value.

<template #example>
  <div class="center">
    <VsButton
      upload
      :active="active.upload === 0"
      @click="active.upload = 0"
    >
      Home
    </VsButton>
    <VsButton
      upload
      icon
      success
      flat
      :active="active.upload === 1"
      @click="active.upload = 1"
    >
      <i class="bx bxs-phone-call"></i>
    </VsButton>
    <VsButton
      upload
      danger
      border
      :active="active.upload === 2"
      @click="active.upload = 2"
    >
      <i class="bx bxs-heart"></i> Like
    </VsButton>
    <VsButton
      upload
      warn
      gradient
      :active="active.upload === 3"
      @click="active.upload = 3"
    >
      Notifications <i class="bx bxs-bell-ring"></i>
    </VsButton>
    <VsButton
      upload
      dark
      transparent
      :active="active.upload === 4"
      @click="active.upload = 4"
    >
      Dark
    </VsButton>
    <VsButton
      upload
      icon
      color="#7d33ff"
      relief
      :active="active.upload === 5"
      @click="active.upload = 5"
    >
      <i class="bx bxs-paper-plane"></i>
    </VsButton>
    <VsButton
      upload
      icon
      color="rgb(59,222,200)"
      gradient
      :active="active.upload === 6"
      @click="active.upload = 6"
    >
      <i class="bx bxs-purchase-tag"></i>
    </VsButton>
  </div>
</template>

<template #template>

  ```html{4}
<template>
  <div class="center">
    <VsButton
      upload
      :active="active.upload === 0"
      @click="active.upload = 0"
    >
      Home
    </VsButton>
    <VsButton
      upload
      icon
      success
      flat
      :active="active.upload === 1"
      @click="active.upload = 1"
    >
      <i class="bx bxs-phone-call"></i>
    </VsButton>
    <VsButton
      upload
      danger
      border
      :active="active.upload === 2"
      @click="active.upload = 2"
    >
      <i class="bx bxs-heart"></i> Like
    </VsButton>
    <VsButton
      upload
      warn
      gradient
      :active="active.upload === 3"
      @click="active.upload = 3"
    >
      Notifications <i class="bx bxs-bell-ring"></i>
    </VsButton>
    <VsButton
      upload
      dark
      transparent
      :active="active.upload === 4"
      @click="active.upload = 4"
    >
      Dark
    </VsButton>
    <VsButton
      upload
      icon
      color="#7d33ff"
      relief
      :active="active.upload === 5"
      @click="active.upload = 5"
    >
      <i class="bx bxs-paper-plane"></i>
    </VsButton>
    <VsButton
      upload
      icon
      color="rgb(59,222,200)"
      gradient
      :active="active.upload === 6"
      @click="active.upload = 6"
    >
      <i class="bx bxs-purchase-tag"></i>
    </VsButton>
  </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import { reactive } from 'vue'
    const active = reactive({
      upload: 0,
    })
    </script>
  ```

</template>


</card>

<card>

## Block <Badge text="New"/>

You can make the button have the full width allowed with the `block` property, the property is a `boolean` so you can add it without any value.

<template #example>
  <div class="center" style="
    max-width: 400px;
    margin: auto;
    ">
    <VsButton
      block
    >
      <i class='bx bxs-paint-roll' ></i> Edit Theme
    </VsButton>
  </div>
</template>

<template #template>

  ```html{4}
<template #example>
  <div class="center">
    <VsButton
      block
    >
      <i class='bx bxs-paint-roll' ></i> Edit Theme
    </VsButton>
  </div>
</template>
  ```

</template>

</card>

<card>

## Animate <Badge text="New"/>

You can create an animation to the component by adding the ``#"animate" `and the content will be the one that appears when the component is animated

You can also change the type of animation with the `animation-type` property and the allowed values ​​are (`vertical`, `scale`,`rotate`)

<template #example>
  <div class="center">
    <VsButton>
      Home
      <template #animate >
        <i class='bx bx-home-alt' ></i>
      </template>
    </VsButton>
    <VsButton
      flat
      success
      animation-type="vertical"
    >
      Message
      <template #animate >
        <i class='bx bx-mail-send' ></i> Send
      </template>
    </VsButton>
    <VsButton
      gradient
      style="min-width: 60px"
      warn
      animation-type="scale"
    >
      <i class='bx bxs-shopping-bag' ></i>
      <template #animate >
        Store
      </template>
    </VsButton>
    <VsButton
      icon
      relief
      danger
      animation-type="rotate"
    >
      <i class='bx bx-like'></i>
      <template #animate >
        <i class='bx bxs-like' ></i>
      </template>
    </VsButton>
  </div>
</template>

<template #template>

  ```html{5,6,7}
    <template>
      <div class="center">
        <Vsbutton>
          Home
          <template #animate >
            <i class='bx bx-home-alt' ></i>
          </template>
        </Vsbutton>

        <Vsbutton
          flat
          success
          animation-type="vertical"
        >
          Message
          <template #animate >
            <i class='bx bx-mail-send' ></i> Send
          </template>
        </Vsbutton>

        <Vsbutton
          gradient
          style="min-width: 60px"
          warn
          animation-type="scale"
        >
          <i class='bx bxs-shopping-bag' ></i>
          <template #animate >
            Store
          </template>
        </Vsbutton>

        <Vsbutton
          icon
          relief
          danger
          animation-type="rotate"
        >
          <i class='bx bx-like'></i>
          <template #animate >
            <i class='bx bxs-like' ></i>
          </template>
        </Vsbutton>
      </div>
    </template>
  ```

</template>

</card>

<card>

## Social <Badge text="New"/>

Using the colors of social networks is very common in a project either a login button or a share button so Vuesax makes it easy for you to search for each color and just by putting the name of the network you already change the whole style of the component

Supported colors: (`facebook`, `twitter`, `youtube`, `pinterest`, `linkedin`, `snapchat`, `whatsapp`, `tumblr`, `reddit`, `spotify`, `amazon`, `medium`, `vimeo`, `skype`, `dribbble`, `slack`, `yahoo`, `twitch`, `discord`, `telegram`, `google-plus`, `messenger`)

<template #example>
  <div class="center" style="
    flex-wrap: wrap;
    padding: 20px;
    max-width: 400px;
    margin: auto;">
    <VsButton
      icon
      color="facebook"
    >
      <i class='bx bxl-facebook-square'></i>
    </VsButton>
    <VsButton
      icon
      color="twitter"
    >
      <i class='bx bxl-twitter'></i>
    </VsButton>
    <VsButton
      icon
      color="youtube"
    >
      <i class='bx bxl-youtube'></i>
    </VsButton>
    <VsButton
      icon
      color="linkedin"
    >
      <i class='bx bxl-linkedin'></i>
    </VsButton>
    <VsButton
      icon
      color="whatsapp"
    >
      <i class='bx bxl-whatsapp'></i>
    </VsButton>
    <VsButton
      icon
      color="twitch"
    >
      <i class='bx bxl-twitch'></i>
    </VsButton>
    <VsButton
      icon
      color="medium"
    >
      <i class='bx bxl-medium'></i>
    </VsButton>
    <VsButton
      icon
      color="skype"
    >
      <i class='bx bxl-skype'></i>
    </VsButton>
    <VsButton
      icon
      color="slack"
    >
      <i class='bx bxl-slack-old'></i>
    </VsButton>
    <VsButton
      icon
      color="messenger"
    >
      <i class='bx bxl-messenger'></i>
    </VsButton>
    <VsButton
      icon
      color="tumblr"
    >
      <i class='bx bxl-tumblr'></i>
    </VsButton>
    <VsButton
      icon
      color="dribbble"
    >
      <i class='bx bxl-dribbble'></i>
    </VsButton>
    <VsButton
      icon
      color="google-plu
    s">
      <i class='bx bxl-google-plus'></i>
    </VsButton>
    <VsButton
      icon
      color="vimeo"
    >
      <i class='bx bxl-vimeo'></i>
    </VsButton>
    <VsButton
      icon
      color="pinterest"
    >
      <i class='bx bxl-pinterest'></i>
    </VsButton>
    <VsButton
      icon
      color="spotify"
    >
      <i class='bx bxl-spotify'></i>
    </VsButton>
    <VsButton
      icon
      color="discord"
    >
      <i class='bx bxl-discord'></i>
    </VsButton>
    <VsButton
      icon
      color="amazon"
    >
      <i class='bx bxl-amazon'></i>
    </VsButton>
    <VsButton
      icon
      color="reddit"
    >
      <i class='bx bxl-reddit'></i>
    </VsButton>
  </div>
</template>

<template #template>

  ```html{5}
    <template>
  <div class="center">
    <VsButton
      icon
      color="facebook"
    >
      <i class='bx bxl-facebook-square'></i>
    </VsButton>
    <VsButton
      icon
      color="twitter"
    >
      <i class='bx bxl-twitter'></i>
    </VsButton>
    <VsButton
      icon
      color="youtube"
    >
      <i class='bx bxl-youtube'></i>
    </VsButton>
    <VsButton
      icon
      color="linkedin"
    >
      <i class='bx bxl-linkedin'></i>
    </VsButton>
    <VsButton
      icon
      color="whatsapp"
    >
      <i class='bx bxl-whatsapp'></i>
    </VsButton>
    <VsButton
      icon
      color="twitch"
    >
      <i class='bx bxl-twitch'></i>
    </VsButton>
    <VsButton
      icon
      color="medium"
    >
      <i class='bx bxl-medium'></i>
    </VsButton>
    <VsButton
      icon
      color="skype"
    >
      <i class='bx bxl-skype'></i>
    </VsButton>
    <VsButton
      icon
      color="slack"
    >
      <i class='bx bxl-slack-old'></i>
    </VsButton>
    <VsButton
      icon
      color="messenger"
    >
      <i class='bx bxl-messenger'></i>
    </VsButton>
    <VsButton
      icon
      color="tumblr"
    >
      <i class='bx bxl-tumblr'></i>
    </VsButton>
    <VsButton
      icon
      color="dribbble"
    >
      <i class='bx bxl-dribbble'></i>
    </VsButton>
    <VsButton
      icon
      color="google-plu
    s">
      <i class='bx bxl-google-plus'></i>
    </VsButton>
    <VsButton
      icon
      color="vimeo"
    >
      <i class='bx bxl-vimeo'></i>
    </VsButton>
    <VsButton
      icon
      color="pinterest"
    >
      <i class='bx bxl-pinterest'></i>
    </VsButton>
    <VsButton
      icon
      color="spotify"
    >
      <i class='bx bxl-spotify'></i>
    </VsButton>
    <VsButton
      icon
      color="discord"
    >
      <i class='bx bxl-discord'></i>
    </VsButton>
    <VsButton
      icon
      color="amazon"
    >
      <i class='bx bxl-amazon'></i>
    </VsButton>
    <VsButton
      icon
      color="reddit"
    >
      <i class='bx bxl-reddit'></i>
    </VsButton>
  </div>
</template>
  ```

</template>

</card>

<card>

## Floating <Badge text="New"/>

You can make a float style button easily with the `Floating` property, the property is a `boolean` so you can add it without any value.

these buttons usually do an important action in specific and go with a fixed position in the lower corner

<template #example>
  <div class="center">
    <VsButton
      circle
      icon
      floating
    >
      <i class='bx bx-plus' ></i>
    </VsButton>
    <VsButton
      color="whatsapp"
      circle
      icon
      floating
    >
      <i class='bx bxl-whatsapp' ></i>
    </VsButton>
    <VsButton
      color="#ff3e4e"
      circle
      icon
      floating
    >
      <i class='bx bx-up-arrow-alt' ></i>
    </VsButton>
    <VsButton
      circle
      icon
      disabled
      floating
    >
      <i class='bx bxs-chat' ></i>
    </VsButton>
  </div>
</template>

<template #template>

  ```html{6}
<template>
  <div class="center">
    <VsButton
      circle
      icon
      floating
    >
      <i class='bx bx-plus' ></i>
    </VsButton>
    <VsButton
      color="whatsapp"
      circle
      icon
      floating
    >
      <i class='bx bxl-whatsapp' ></i>
    </VsButton>
    <VsButton
      color="#ff3e4e"
      circle
      icon
      floating
    >
      <i class='bx bx-up-arrow-alt' ></i>
    </VsButton>
    <VsButton
      circle
      icon
      disabled
      floating
    >
      <i class='bx bxs-chat' ></i>
    </VsButton>
  </div>
</template>
  ```

</template>

</card>

<card>

## Group <Badge text="New"/>

If you need to make a group of buttons you can use the **sub-component** `<Vsbutton-group> </Vsbutton-group>` and inside the default slot put the buttons you want to group

<template #example>
  <div class="center">
    <VsButton-group>
      <VsButton>
        One
      </VsButton>
      <VsButton>
        Two
      </VsButton>
      <VsButton>
        Three
      </VsButton>
      <VsButton>
        four
      </VsButton>
    </VsButton-group>
    <span class="divider" />
    <VsButton-group>
      <VsButton flat icon>
        <i class='bx bx-play' ></i>
      </VsButton>
      <VsButton flat icon>
        <i class='bx bx-pause' ></i>
      </VsButton>
      <VsButton flat icon>
        <i class='bx bx-fast-forward' ></i>
      </VsButton>
      <VsButton flat icon>
        <i class='bx bx-shuffle' ></i>
      </VsButton>
    </VsButton-group>
    <span class="divider" />
    <VsButton-group>
      <VsButton border>
        <i class='bx bxs-pencil' ></i> Edit
      </VsButton>
      <VsButton border icon>
        <i class='bx bx-font-color' ></i>
      </VsButton>
      <VsButton border icon>
        <i class='bx bx-align-middle' ></i>
      </VsButton>
      <VsButton border>
        <i class='bx bx-font-size' ></i> Font size
      </VsButton>
    </VsButton-group>
    <span class="divider" />
    <VsButton-group>
      <VsButton relief>
        <i class='bx bx-home-alt' ></i> Home
      </VsButton>
      <VsButton relief>
        <i class='bx bxs-phone-call' ></i> Contact
      </VsButton>
      <VsButton relief loading>
        <i class='bx bxs-cart-alt' ></i> Products
      </VsButton>
      <VsButton relief upload>
        <i class='bx bxs-envelope' ></i> Send
      </VsButton>
    </VsButton-group>
  </div>
</template>

<template #template>

  ```html{3,16}
<template>
  <div class="center">
    <VsButton-group>
      <VsButton>
        One
      </VsButton>
      <VsButton>
        Two
      </VsButton>
      <VsButton>
        Three
      </VsButton>
      <VsButton>
        four
      </VsButton>
    </VsButton-group>
    <span class="divider" />
    <VsButton-group>
      <VsButton flat icon>
        <i class='bx bx-play' ></i>
      </VsButton>
      <VsButton flat icon>
        <i class='bx bx-pause' ></i>
      </VsButton>
      <VsButton flat icon>
        <i class='bx bx-fast-forward' ></i>
      </VsButton>
      <VsButton flat icon>
        <i class='bx bx-shuffle' ></i>
      </VsButton>
    </VsButton-group>
    <span class="divider" />
    <VsButton-group>
      <VsButton border>
        <i class='bx bxs-pencil' ></i> Edit
      </VsButton>
      <VsButton border icon>
        <i class='bx bx-font-color' ></i>
      </VsButton>
      <VsButton border icon>
        <i class='bx bx-align-middle' ></i>
      </VsButton>
      <VsButton border>
        <i class='bx bx-font-size' ></i> Font size
      </VsButton>
    </VsButton-group>
    <span class="divider" />
    <VsButton-group>
      <VsButton relief>
        <i class='bx bx-home-alt' ></i> Home
      </VsButton>
      <VsButton relief>
        <i class='bx bxs-phone-call' ></i> Contact
      </VsButton>
      <VsButton relief loading>
        <i class='bx bxs-cart-alt' ></i> Products
      </VsButton>
      <VsButton relief upload>
        <i class='bx bxs-envelope' ></i> Send
      </VsButton>
    </VsButton-group>
  </div>
</template>
  ```

</template>

</card>

<card>

## Toggle <Badge text="New"/>

This is an example of what you can achieve with simple logic and few lines of code.

<template #example>
  <div class="center toggle">
    <VsButton
      @click="handleClick"
      :icon="success"
      :upload="sending"
      :color="success ? 'success' : 'primary'"
    >
      <span v-if="!success">
        <i class='bx bx-mail-send' ></i>
          Send
      </span>
      <i class='bx bx-check' v-else ></i>
    </VsButton>
    <VsButton
      :animate-inactive="successFace"
      @click="handleClickFace"
      :loading="loadingFace"
      color="facebook"
    >
      <i class='bx bxl-facebook-square' ></i>
      {{ successFace ? 'Logout' : 'Facebook' }}
      <template #animate >
        <i class='bx bx-user' ></i> Login
      </template>
    </VsButton>
  </div>
</template>

<template #template>

  ```html
<template>
  <div class="center">
    <VsButton
      @click="handleClick"
      :icon="success"
      :upload="sending"
      :color="success ? 'success' : 'primary'"
    >
      <span v-if="!success">
        <i class='bx bx-mail-send' ></i>
          Send
      </span>
      <i class='bx bx-check' v-else ></i>
    </VsButton>
    <VsButton
      :animate-inactive="successFace"
      @click="handleClickFace"
      :loading="loadingFace"
      color="facebook"
    >
      <i class='bx bxl-facebook-square' ></i>
      {{ successFace ? 'Logout' : 'Facebook' }}
      <template #animate >
        <i class='bx bx-user' ></i> Login
      </template>
    </VsButton>
  </div>
</template>
  ```

</template>

<template #script>

  ```html
    <script setup>
    import {reactive} from 'vue'
    const toggle = reactive({
      sending: false,
      success: false,

      loadingFace: false,
      successFace: false,
    })
    const handleClick = ()=> {
      toggle.sending = true

      setTimeout(() => {
      toggle.sending = false
      toggle.success = !this.success
      }, 2000);
    }
    const handleClickFace = ()=> {
      toggle.loadingFace = true

      setTimeout(() => {
        toggle.loadingFace = false
        toggle.successFace = !toggle.successFace
      }, 2000);
    }
    </script>
  ```

</template>

<template #style>

  ```html
<style scoped>
span{
    display:flex;
    align-items:center;
    justify-content:center;
}

i.bx:not(.bx-check) {
  padding-right: 5px;
  font-size: 1.1rem;
}

</style>
  ```

</template>

</card>

<card>

## To - href <Badge text="New"/>

If you need to use a button such as a vue-router link or an external link you can do it with the properties (`to`: vue-router link) or (`href`: html external link)

<template #example>
  <div class="center">
    <VsButton
      to="/"
      flat
      >
      To - vue-router
    </VsButton>
    <VsButton
      href="http://vuesax.com/"
      success
      flat
    >
      Href - Replace Url
    </VsButton>
    <VsButton
      href="http://vuesax.com/"
      blank
      danger
      flat
    >
      Href - Open External (blank)
    </VsButton>
  </div>

</template>

<template #template>

  ```html
    <template>
      <div class="center">
        <Vsbutton
          to="/"
          flat
          >
          To - vue-router
        </Vsbutton>
        <Vsbutton
          href="http://vuesax.com/"
          success
          flat
        >
          Href - Replace Url
        </Vsbutton>
        <Vsbutton
          href="http://vuesax.com/"
          blank
          danger
          flat
        >
          Href - Open External (blank)
        </Vsbutton>
      </div>
    </template>
  ```

</template>

</card>

<card>

## API

</card>
