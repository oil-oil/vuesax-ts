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
import {ref} from 'vue'
const defaultActive = ref(0)
const clickDefault = (x)=>{
  defaultActive.value = x
}
const flatActive = ref(0)
const clickFlat = (x)=>{
flatActive.value = x
}
const borderActive = ref(0)
const clickBorder = (x)=>{
  borderActive.value = x
}
const gradientActive = ref(0)
const clickGradient = (x)=>{
  gradientActive.value = x
}
const reliefActive = ref(0)
const clickRelief = (x)=>{
  reliefActive.value = x 
}
</script>

<template #example>
  <div class="center" style="
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-wrap: wrap;">
    <VsButton
      :active="defaultActive === 0"
      @click="clickDefault(0)"
    >
      Active
    </VsButton>
    <VsButton
      :active="defaultActive === 1"
      @click="clickDefault(1)"
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
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </Vsbutton>
        <Vsbutton
          :active="active == 1"
          @click="active = 1"
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
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/charming-maxwell-ms0xf?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.vue&theme=dark">

## Flat

You can change the full style towards *flat* of a button with the `flat` property that its value is a` boolean`, so just adding it will change the styles

<template #example>
  <div class="center" style="
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-wrap: wrap;">
    <VsButton
      flat
      :active="flatActive === 0"
      @click="clickDefault(0)"
    >
      Active
    </VsButton>
    <VsButton
      flat
      :active="flatActive === 1"
      @click="clickDefault(1)"
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
        <Vsbutton
          flat
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </Vsbutton>
        <Vsbutton
          flat
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </Vsbutton>
        <Vsbutton
          flat
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
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-border-zc0td?fontsize=14&hidenavigation=1&theme=dark">

## Border

You can change the full style towards *border* of a button with the `border` property that its value is a` boolean` so just adding it will change the styles

<template #example>
  <div class="center" style="
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-wrap: wrap;">
		<vs-button
      border
      :active="active == 0"
      @click="clickBorder(0)"
    >
			Active
		</vs-button>
		<vs-button
      border
      :active="active == 1"
      @click="clickBorder(1)"
    >
			Default
		</vs-button>
		<vs-button
      border
      disabled
    >
			Disabled
		</vs-button>
	</div>
</template>

<template #template>

  ```html{4}
    <template>
      <div class="center">
        <Vsbutton
          border
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </Vsbutton>
        <Vsbutton
          border
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </Vsbutton>
        <Vsbutton
          border
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
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-gradient-7en0i?fontsize=14&hidenavigation=1&theme=dark">

## Gradient

You can change the full style towards *Gradient* of a button with the `gradient` property that its value is a` boolean`, so just adding it will change the styles

:::tip Gradient Auto Color
  Gradient colors are automatically generated by the `color` property which in this example is the` primary` color
:::

<template #example>
  <div class="center" style="
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-wrap: wrap;">
    <vs-button
      gradient
      :active="gradientActive === 0"
      @click="clickGradient(0)"
    >
      Active
    </vs-button>
    <vs-button
      gradient
      :active="gradientActive === 1"
      @click="clickGradient(1)"
    >
      Default
    </vs-button>
    <vs-button
      gradient
      disabled
    >
      Disabled
    </vs-button>
  </div>
</template>

<template #template>

  ```html{4}
    <template>
      <div>
        <Vsbutton
          gradient
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </Vsbutton>
        <Vsbutton
          gradient
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </Vsbutton>
        <Vsbutton
          gradient
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
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-relief-7dfh7?fontsize=14&hidenavigation=1&theme=dark">

## Relief

Change the style of the button to a relief aspect with the `relief` property, the property is a` boolean` so you can add it without any value.

<template #example>
   <div class="center" style="
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    flex-wrap: wrap;">
    <vs-button
      relief
      :active="gradientActive === 0"
      @click="clickRelief(0)"
    >
      Active
    </vs-button>
    <vs-button
      relief
      :active="gradientActive === 1"
      @click="clickRelief(1)"
    >
      Default
    </vs-button>
    <vs-button
      relief
      disabled
    >
      Disabled
    </vs-button>
  </div>
</template>

<template #template>

  ```html{4}
    <template>
      <div>
        <Vsbutton
          relief
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </Vsbutton>
        <Vsbutton
          relief
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </Vsbutton>
        <Vsbutton
          relief
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
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-transparent-4t6d6?fontsize=14&hidenavigation=1&theme=dark">

## Transparent

Change the style of the button with the `transparent` property, the property is a` boolean` so you can add it without any value.

<template #example>
  <button-transparent />
</template>

<template #template>

  ```html{4}
    <template>
      <div>
        <Vsbutton
          transparent
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </Vsbutton>
        <Vsbutton
          transparent
          :active="active == 1"
          @click="active = 1"
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
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>


</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-shadow-ufx6y?fontsize=14&hidenavigation=1&theme=dark">

## Shadow

Change the style of the button with the `shadow` property, the property is a` boolean` so you can add it without any value.

<template #example>
  <button-shadow />
</template>

<template #template>

  ```html{4}
    <template>
      <div>
        <Vsbutton
          shadow
          :active="active == 0"
          @click="active = 0"
        >
          Active
        </Vsbutton>
        <Vsbutton
          shadow
          :active="active == 1"
          @click="active = 1"
        >
          Default
        </Vsbutton>
        <Vsbutton
          shadow
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
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>


</card>

<card codesandbox="https://codesandbox.io/embed/vuesax-button-colors-gje98?fontsize=14&hidenavigation=1&theme=dark">

## Color

Change the color of the Button component with the `color` property and the color value for example (**#fff**, **rgba (100,10,5)** or the **main colors of vuesax**), this will only affect the component and its value can be dynamic

<utils-color />

<template #example>
  <button-color />
</template>

<template #template>

  ```html{10}
    <template>
      <div class="center">
        <Vsbutton
          :active="active == 0"
          @click="active = 0"
        >
          Default
        </Vsbutton>
        <Vsbutton
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          Success
        </Vsbutton>
        <Vsbutton
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          Danger
        </Vsbutton>
        <Vsbutton
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Warn
        </Vsbutton>
        <Vsbutton
          dark
          shadow
          :active="active == 4"
          @click="active = 4"
        >
          Dark
        </Vsbutton>
        <Vsbutton
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
            HEX
        </Vsbutton>
        <Vsbutton
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          RGB
        </Vsbutton>
      </div>
    </template>
  ```

</template>

<template #script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## Icon

If you need an icon-only button use the `icon` property, the property is a` boolean` so you can add it without any value.

This property makes the button have a specific size making it the same width and height, do not use when it is icon and text

<utils-icon />

<template #example>
  <button-icon />
</template>

<template #template>

  ```html{4}
    <template>
      <div class="center">
        <Vsbutton
          icon
          :active="active == 0"
          @click="active = 0"
        >
          <i class='bx bx-home-alt'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="success"
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class='bx bxs-phone-call' ></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="danger"
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class='bx bxs-heart' ></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="warn"
          gradient
          :active="active == 3" @click="active = 3"
        >
          <i class='bx bxs-bell-ring' ></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class='bx bxs-paper-plane' ></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class='bx bxs-purchase-tag' ></i>
        </Vsbutton>
      </div>
    </template>
  ```

</template>

<template #script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## Icon - Text

If you need a button with text and icon you can do them by adding them in the `slot` default.

<template #example>
  <button-iconText />
</template>

<template #template>

  ```html{7}
    <template>
      <div class="center">
        <Vsbutton
          :active="active == 0"
          @click="active = 0"
        >
          <i class="bx bx-home-alt"></i> Home
        </Vsbutton>

        <Vsbutton
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i> Call
        </Vsbutton>

        <Vsbutton
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </Vsbutton>

        <Vsbutton
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          <i class="bx bxs-bell-ring"></i> Notifications
        </Vsbutton>

        <Vsbutton
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i> Send
        </Vsbutton>

        <Vsbutton
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i> Save
        </Vsbutton>
      </div>
    </template>
  ```

</template>

<template #script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## Circle

You can completely round the corners with the `circle` property, the property is a` boolean` so you can add it without any value.

<template #example>
  <button-circle />
</template>

<template #template>

  ```html{4}
    <template>
      <div class="center">
        <Vsbutton
          circle
          :active="active == 0"
          @click="active = 0"
        >
          Home
        </Vsbutton>

        <Vsbutton
          circle
          icon
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </Vsbutton>

        <Vsbutton
          circle
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </Vsbutton>

        <Vsbutton
          circle
          color="warn"
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Notifications <i class="bx bxs-bell-ring"></i>
        </Vsbutton>

        <Vsbutton
          circle
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </Vsbutton>

        <Vsbutton
          circle
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </Vsbutton>
      </div>
    </template>
  ```

</template>

<template #script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## Square

You can make all the corners completely straight with the `Square` property, the property is a` boolean` so you can add it without any value.

<template #example>
  <button-square />
</template>

<template #template>

  ```html{4}
    <template>
      <div class="center">
        <Vsbutton
          square
          :active="active == 0"
          @click="active = 0"
        >
          Home
        </Vsbutton>

        <Vsbutton
          square
          icon
          success
          flat
          :active="active == 1" @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </Vsbutton>

        <Vsbutton
          square
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </Vsbutton>

        <Vsbutton
          square
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Notifications <i class="bx bxs-bell-ring"></i>
        </Vsbutton>
        <Vsbutton
          square
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </Vsbutton>
        <Vsbutton
          square
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </Vsbutton>
      </div>
    </template>
  ```

</template>

<template #script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
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
  <button-size />
</template>

<template #template>

  ```html{4}
    <template>
      <div class="center">
        <Vsbutton
          size="xl"
          :active="active == 0"
          @click="active = 0"
        >
          XLarge
        </Vsbutton>
        <Vsbutton
          size="large"
          :active="active == 1"
          @click="active = 1"
        >
          Large
        </Vsbutton>
        <Vsbutton
          :active="active == 2"
          @click="active = 2"
        >
          Default
        </Vsbutton>
        <Vsbutton
          size="small"
          :active="active == 3"
          @click="active = 3"
        >
          Small
        </Vsbutton>
        <Vsbutton
          size="mini"
          :active="active == 4"
          @click="active = 4"
        >
          Mini
        </Vsbutton>
      </div>
    </template>
  ```

</template>

<template #script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## Loading <Badge text="New"/>

Now you can add a loading status with the `loading` property, the property is a` boolean` so you can add it without any value.

<template #example>
  <button-loading />
</template>

<template #template>

  ```html{4}
    <template>
      <div class="center">
        <Vsbutton
          loading
          :active="active == 0"
          @click="active = 0"
        >
          Home
        </Vsbutton>

        <Vsbutton
          loading
          icon
          success
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </Vsbutton>

        <Vsbutton
          loading
          danger
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </Vsbutton>

        <Vsbutton
          loading
          warn
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Notifications <i class="bx bxs-bell-ring"></i>
        </Vsbutton>

        <Vsbutton
          loading
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </Vsbutton>
        <Vsbutton
          loading
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </Vsbutton>
      </div>
    </template>
  ```
</template>

<template #script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## Upload <Badge text="New"/>

Now you can add a status of sending or uploading data to the server with the `upload` property, the property is a` boolean` so you can add it without any value.

<template #example>
  <button-upload />
</template>

<template #template>

  ```html{4}
    <template>
      <div class="center">
        <Vsbutton
          upload
          :active="active == 0"
          @click="active = 0"
        >
          Home
        </Vsbutton>

        <Vsbutton
          upload
          icon
          color="success"
          flat
          :active="active == 1"
          @click="active = 1"
        >
          <i class="bx bxs-phone-call"></i>
        </Vsbutton>

        <Vsbutton
          upload
          color="danger"
          border
          :active="active == 2"
          @click="active = 2"
        >
          <i class="bx bxs-heart"></i> Like
        </Vsbutton>

        <Vsbutton
          upload
          color="warn"
          gradient
          :active="active == 3"
          @click="active = 3"
        >
          Notifications <i class="bx bxs-bell-ring"></i>
        </Vsbutton>

        <Vsbutton
          upload
          color="dark"
          transparent
          :active="active == 5"
          @click="active = 5"
        >
          Dark
        </Vsbutton>

        <Vsbutton
          upload
          icon
          color="#7d33ff"
          relief
          :active="active == 5"
          @click="active = 5"
        >
          <i class="bx bxs-paper-plane"></i>
        </Vsbutton>

        <Vsbutton
          upload
          icon
          color="rgb(59,222,200)"
          gradient
          :active="active == 6"
          @click="active = 6"
        >
          <i class="bx bxs-purchase-tag"></i>
        </Vsbutton>
      </div>
    </template>
  ```

</template>

<template #script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## Block <Badge text="New"/>

You can make the button have the full width allowed with the `block` property, the property is a` boolean` so you can add it without any value.

<template #example>
  <button-block />
</template>

<template #template>

  ```html{4}
    <template>
      <div class="center">
        <Vsbutton
          block
        >
          <i class='bx bxs-paint-roll' ></i> Edit Theme
        </Vsbutton>
      </div>
    </template>
  ```

</template>

</card>

<card>

## Animate <Badge text="New"/>

You can create an animation to the component by adding the ``#"animate" `and the content will be the one that appears when the component is animated

You can also change the type of animation with the `animation-type` property and the allowed values ​​are (` vertical`, `scale`,` rotate`)

<template #example>
  <button-animate />
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
  <button-social />
</template>

<template #template>

  ```html{5}
    <template>
      <div class="center">
        <Vsbutton
          icon
          color="facebook"
        >
          <i class='bx bxl-facebook-square'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="twitter"
        >
          <i class='bx bxl-twitter'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="youtube"
        >
          <i class='bx bxl-youtube'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="linkedin"
        >
          <i class='bx bxl-linkedin'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="whatsapp"
        >
          <i class='bx bxl-whatsapp'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="twitch"
        >
          <i class='bx bxl-twitch'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="medium"
        >
          <i class='bx bxl-medium'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="skype"
        >
          <i class='bx bxl-skype'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="slack"
        >
          <i class='bx bxl-slack-old'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="messenger"
        >
          <i class='bx bxl-messenger'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="tumblr"
        >
          <i class='bx bxl-tumblr'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="dribbble"
        >
          <i class='bx bxl-dribbble'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="google-plu
        s">
          <i class='bx bxl-google-plus'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="vimeo"
        >
          <i class='bx bxl-vimeo'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="pinterest"
        >
          <i class='bx bxl-pinterest'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="spotify"
        >
          <i class='bx bxl-spotify'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="discord"
        >
          <i class='bx bxl-discord'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="amazon"
        >
          <i class='bx bxl-amazon'></i>
        </Vsbutton>

        <Vsbutton
          icon
          color="reddit"
        >
          <i class='bx bxl-reddit'></i>
        </Vsbutton>
      </div>
    </template>
  ```

</template>

</card>

<card>

## Floating <Badge text="New"/>

You can make a float style button easily with the `Floating` property, the property is a` boolean` so you can add it without any value.

these buttons usually do an important action in specific and go with a fixed position in the lower corner

<template #example>
  <button-floating />
</template>

<template #template>

  ```html{6}
    <template>
      <div class="center">
        <Vsbutton
          circle
          icon
          floating
        >
          <i class='bx bx-plus' ></i>
        </Vsbutton>

        <Vsbutton
          color="whatsapp"
          circle
          icon
          floating
        >
          <i class='bx bxl-whatsapp' ></i>
        </Vsbutton>

        <Vsbutton
          color="#ff3e4e"
          circle
          icon
          floating
        >
          <i class='bx bx-up-arrow-alt' ></i>
        </Vsbutton>

        <Vsbutton
          circle
          icon
          disabled
          floating
        >
          <i class='bx bxs-chat' ></i>
        </Vsbutton>
      </div>
    </template>
  ```

</template>

</card>

<card>

## Group <Badge text="New"/>

If you need to make a group of buttons you can use the **sub-component** `<Vsbutton-group> </Vsbutton-group>` and inside the default slot put the buttons you want to group

<template #example>
  <button-group />
</template>

<template #template>

  ```html{3,16}
    <template>
      <div class="center">
        <Vsbutton-group>
          <Vsbutton>
            One
          </Vsbutton>
          <Vsbutton>
            Two
          </Vsbutton>
          <Vsbutton>
            Three
          </Vsbutton>
          <Vsbutton>
            four
          </Vsbutton>
        </Vsbutton-group>

        <span class="divider" />

        <Vsbutton-group>
          <Vsbutton flat icon>
            <i class='bx bx-play' ></i>
          </Vsbutton>
          <Vsbutton flat icon>
            <i class='bx bx-pause' ></i>
          </Vsbutton>
          <Vsbutton flat icon>
            <i class='bx bx-fast-forward' ></i>
          </Vsbutton>
          <Vsbutton flat icon>
            <i class='bx bx-shuffle' ></i>
          </Vsbutton>
        </Vsbutton-group>

        <span class="divider" />

        <Vsbutton-group>
          <Vsbutton border>
            <i class='bx bxs-pencil' ></i> Edit
          </Vsbutton>
          <Vsbutton border icon>
            <i class='bx bx-font-color' ></i>
          </Vsbutton>
          <Vsbutton border icon>
            <i class='bx bx-align-middle' ></i>
          </Vsbutton>
          <Vsbutton border>
            <i class='bx bx-font-size' ></i> Font size
          </Vsbutton>
        </Vsbutton-group>

        <span class="divider" />

        <Vsbutton-group>
          <Vsbutton relief>
            <i class='bx bx-home-alt' ></i> Home
          </Vsbutton>
          <Vsbutton relief>
            <i class='bx bxs-phone-call' ></i> Contact
          </Vsbutton>
          <Vsbutton relief loading>
            <i class='bx bxs-cart-alt' ></i> Products
          </Vsbutton>
          <Vsbutton relief upload>
            <i class='bx bxs-envelope' ></i> Send
          </Vsbutton>
        </Vsbutton-group>
      </div>
    </template>
  ```

</template>

<template #script>

  ```html
    <script>
      export default {
        data:() => ({
          active: 0
        })
      }
    </script>
  ```

</template>

</card>

<card>

## Toggle <Badge text="New"/>

This is an example of what you can achieve with simple logic and few lines of code.

<template #example>
  <button-toggle />
</template>

<template #template>

  ```html
    <template>
      <div class="center">
        <Vsbutton
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
        </Vsbutton>

        <Vsbutton
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
        </Vsbutton>
      </div>
    </template>
  ```

</template>

<template #script>

  ```html
    <script>
      export default {
        data:() => ({
          sending: false,
          success: false,

          loadingFace: false,
          successFace: false
        }),
        methods:{
          handleClick() {
            this.sending = true

            setTimeout(() => {
              this.sending = false
              this.success = !this.success
            }, 2000);
          },
          handleClickFace() {
            this.loadingFace = true

            setTimeout(() => {
              this.loadingFace = false
              this.successFace = !this.successFace
            }, 2000);
          }
        }
      }
    </script>
  ```

</template>

<template #style>

  ```html
    <style scoped lang="stylus">
      span
        display flex
        align-items center
        justify-content center
      i.bx:not(.bx-check)
        padding-right 5px
        font-size 1.1rem
    </style>
  ```

</template>

</card>

<card>

## To - href <Badge text="New"/>

If you need to use a button such as a vue-router link or an external link you can do it with the properties (`to`: vue-router link) or (` href`: html external link)

<template #example>
  <button-toHref />
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

