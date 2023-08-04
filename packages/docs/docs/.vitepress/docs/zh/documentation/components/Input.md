# Input 输入框

<card>

## Default

<docs-warn />

Add an elements input facilitate with the component `<vs-input>`

</card>

<card subtitle="Label">

## Label

Add a label to the input with the property `label`

</card>

<card subtitle="LabelPlaceholder">

## Label Placeholder

You can have a placeholder with a great animation when being or in focus or with a value becoming a label above the input with the property `label-placeholder`

</card>

<card subtitle="Color">

## Color

Change the color of the component and add a border below with the `color` property, the allowed values ​​are the main colors of vuesax and the colors (**RGB** y **HEX**)

</card>

<card subtitle="Icon">

## icon

Add an icon to the input easily with the slot icon if you want the icon to be before the input you can do it with the property `icon-before`

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

</card>

<card subtitle="Message">

## Message

You can add a message below the input with the `slot="message- {vuesax color}"` to report that a field is missing or the value is wrong

</card>

<card subtitle="State">

## State

Change the color of the input for some state, the allowed states are (primary, success, danger, warn, dark)

</card>

<card subtitle="Progress">

## Progress

Add a validation progress bar, the most common is its use to validate passwords and correct data within the input, its value is (0 - 100).

:::tip
  The example validates that the password has at least

  - A special character
  - More than 6 digits
  - One lower case letter
  - An uppercase letter
  - A number
:::

</card>

<card subtitle="Loading">

## Loading

Add a loading animation to the input with the `loading` property, the property is a `Boolean`, 

</card>

<card subtitle="InputTypes">

## Input types

Change the type of input with the `type` property as a native html input, the default value is `text`

</card>

<card subtitle="Border">

## Border

Change everything is style of the component with the `border` property, the property is a `Boolean`, 

</card>

<card subtitle="Shadow">

## Shadow

Change everything is style of the component with the `shadow` property, the property is a `Boolean`, 

</card>

<script setup>
import Api from "../../../theme/global-components/template/Input/API.tsx"
</script>

<Api></Api>
