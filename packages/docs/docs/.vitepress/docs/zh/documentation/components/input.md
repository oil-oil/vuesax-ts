# Input 输入框

<card>

## Default

<docs-warn />

使用 `<VsInput>` 组件可以非常方便的添加一个输入框元素

</card>

<card subtitle="Label">

## Label

使用 `label` 属性为输入框添加 label

</card>

<card subtitle="LabelPlaceholder">

## Label Placeholder

我们可以使用 "label-placeholder "属性，在占位符处于焦点时或在焦点上时添加精美的动画，或者将占位符的值变成输入上方的标签

</card>

<card subtitle="Color">

## Color

使用 `color` 属性更改组件的颜色并在 Input 下方添加边框，允许输入是 vuesax 的主题色和自定义颜色（**RGB**，**HEX**)

</card>

<card subtitle="Icon">

## icon

如果需要在输入前面添加图标，可以使用属性 `iconbefore` 来实现。

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

我们可以使用 `slot="message-{vuesax color}"` 在输入框下面添加一条信息，以提示字段缺失或数值错误。

</card>

<card subtitle="Status">

## Status

更改某个状态下的输入颜色，允许的状态有(primary, success, danger, warn, dark)。

</card>

<card subtitle="Progress">

## Progress

添加验证进度条，常用的场景是用于验证密码和输入中的正确数据，其值为（0 - 100）。

:::tip
该示例验证密码至少需要满足：

- 一个特殊字符
  - 超过 6 位数
  - 一个小写字母
  - 一个大写字母
  - 一个数字
:::

</card>

<card subtitle="Loading">

## Loading

为带有 `loading` 属性的输入添加加载动画，该属性是 `boolean` 类型。

</card>

<card subtitle="InputTypes">

## Input types

使用 `type` 属性更改输入框的类型，将其作为原生 html 输入框属性，默认值为`text`。

</card>

<card subtitle="Border">

## Border

使用 `border` 属性可以为输入框添加边框，该值为 `boolean` 类型

</card>

<card subtitle="Shadow">

## Shadow

使用 `shadow` 属性可以为输入框添加阴影，该值为 `boolean` 类型

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api></Api>
