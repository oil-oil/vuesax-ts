
  ---  
PROPS:  
- name: v-model  
type: boolean, string, array  
values: boolean, string, array  
description: determine the value of the checkbox and data anchor.  
default: false  
link: null  
usage: '#default'  
code: >  
<template>  
  <div class="center">  
    <vs-checkbox v-model="option">  
      Option  
    </vs-checkbox>  
  </div>  
</template>  
- name: color  
type: string  
values: vuesax colors, RGB, HEX  
description: Change the color of the component.  
default: false  
link: null  
usage: '#color'  
code: >  
<template>  
  <div class="center">  
    <vs-checkbox v-model="option1">  
      Primary  
    </vs-checkbox>  
    <vs-checkbox success v-model="option2">  
      Success  
    </vs-checkbox>  
    <vs-checkbox danger v-model="option3">  
      Danger  
    </vs-checkbox>  
    <vs-checkbox warn v-model="option4">  
      warning  
    </vs-checkbox>  
    <vs-checkbox dark v-model="option5">  
      dark  
    </vs-checkbox>  
    <vs-checkbox color="#7d33ff" v-model="option6">  
      dark  
    </vs-checkbox>  
    <vs-checkbox color="rgb(59, 222, 200)" v-model="option7">  
      RGB  
    </vs-checkbox>  
  </div>  
</template>  
- name: val  
type: string, object  
values: string, object  
description: Determine the value of the input when being checked.  
default: true  
link: null  
usage: '#string-value'  
code: >  
<template>  
  <div class="center con-checkbox">  
    <vs-checkbox val="automatically" v-model="option">  
      Save data automatically  
    </vs-checkbox>
  
    <span class="data">  
      {{ option ? option : 'null'}}  
    </span>  
  </div>  
</template>
  
- name: loading  
type: boolean  
values: true, false  
description: Add a loading animation and disable the input.  
default: false  
link: null  
usage: '#loading'  
code: >  
<template>  
  <div class="center con-checkbox">  
    <vs-checkbox loading v-model="option">  
      Loading checked  
    </vs-checkbox>  
    <vs-checkbox loading v-model="option2">  
      Loading unchecked  
    </vs-checkbox>  
  </div>  
</template>
  
- name: line-through  
type: boolean  
values: true, false  
description: Add a line in the center of the label when checked.  
default: false  
link: null  
usage: '#linethrough'  
code: >  
<template>  
  <div class="center">  
    <vs-checkbox line-through v-model="option">  
      Option  
    </vs-checkbox>  
  </div>  
</template>
  
- name: indeterminate  
type: boolean  
values: true, false  
description: Change the default checkbox icon to a line that represents undetermined data.  
default: false  
link: null  
usage: '#Indeterminate'  
code: >  
<template>  
  <div class="center">  
    <vs-checkbox indeterminate v-model="option">  
      Option  
    </vs-checkbox>  
  </div>  
</template>
  
- name: label-before  
type: boolean  
values: true, false  
description: Change the position of the label.  
default: false  
link: null  
usage: '#label'  
code: >  
<vs-checkbox label-before v-model="option2">  
  Label Before  
</vs-checkbox>
  
- name: checked  
type: boolean  
values: true, false  
description: Determine if the component is initially in check (this changes the property computed in v-model to true).  
default: false  
link: null  
usage: null  
code: >  
<vs-checkbox label-before v-model="option2">  
  Label Before  
</vs-checkbox>
  
SLOTS:  
- name: icon  
type: slot  
values: null  
description: Change the component icon.  
default: null  
link: null  
usage: '#icon'  
code: >  
<template>  
  <div class="center">  
    <vs-checkbox v-model="option1">  
      <template #icon>  
        <i class='bx bx-check'></i>  
      </template>  
    </vs-checkbox>  
    <vs-checkbox success v-model="option2">  
      <template #icon>  
        <i class='bx bx-check-double'></i>  
      </template>  
    </vs-checkbox>  
    <vs-checkbox danger v-model="option3">  
      <template #icon>  
        <i class='bx bx-x'></i>  
      </template>  
    </vs-checkbox>  
    <vs-checkbox warn v-model="option4">  
      <template #icon>  
        <i class='bx bxs-shield'></i>  
      </template>  
    </vs-checkbox>  
    <vs-checkbox dark v-model="option5">  
      <template #icon>  
        <i class='bx bxs-heart'></i>  
      </template>  
    </vs-checkbox>  
    <vs-checkbox color="#7d33ff" v-model="option6">  
      <template #icon>  
        <i class='bx bx-brightness'></i>  
      </template>  
    </vs-checkbox>  
    <vs-checkbox color="rgb(59, 222, 200)" v-model="option7">  
      <template #icon>  
        <i class='bx bxs-paint'></i>  
      </template>  
    </vs-checkbox>  
  </div>  
</template>
  
- name: default  
type: slot  
values: null  
description: Add a label to the component.  
default: null  
link: null  
usage: '#default'  
code: >  
<template>  
  <div class="center">  
    <vs-checkbox v-model="option">  
      Option  
    </vs-checkbox>  
  </div>  
</template>  
NEWS:  
- indeterminate  
- loading  
- linethrough  
---
  
# Checkbox
  
<card>
  
  ## Default
  
  <docs-warn />
  
  Add a checkbox type input easily and with a beautiful animation
  
  <div slot="example">  
    <Checkbox-default />  
  </div>
  
  <div slot="template">
  
    ``` ```
  
  </div>
  
  <div slot="script">
  
    ``` ```
  
  </div>
  
</card>
  
<card>
  
  ## color
  
  Change the color of the component with the ` ` property, the allowed values ​​are (main colors of vuesax, RGB, HEX)
  
  <div slot="example">  
    <Checkbox-color />  
  </div>
  
  <div slot="template">
  
    ``` ```
  
  </div>
  
  <div slot="script">
  
    ``` ```
  
  </div>
  
</card>
  
<card>
  
  ## Boolean Value
  
  By default the component is used with a boolean value that when being checked returns ` ` and when not being checked  
  returns ` `
  
  <div slot="example">  
    <Checkbox-boolean />  
  </div>
  
  <div slot="template">
  
    ``` ```
  
  </div>
  
  <div slot="script">
  
    ``` ```
  
  </div>
  
</card>
  
<card>
  
  ## String Value
  
  You may need to return a string when the component is checked for it use the ` ` property with the ` ` you want to  
  return
  
  <div slot="example">  
    <Checkbox-string />  
  </div>
  
  <div slot="template">
  
    ``` ```
  
  </div>
  
  <div slot="script">
  
    ``` ```
  
  </div>
  
</card>
  
<card>
  
  ## Array Value
  
  You may need to return a string when the component is checked for it use the ` ` property with the ` ` you want to  
  return
  
  <div slot="example">  
    <Checkbox-array />  
  </div>
  
  <div slot="template">
  
    ``` ```
  
  </div>
  
  <div slot="script">
  
    ``` ```
  
  </div>
  
</card>
  
<card>
  
  ## Array Object values
  
  the ` ` property of a checkbox component can be an ` `
  
  <div slot="example">  
    <Checkbox-object />  
  </div>
  
  <div slot="template">
  
    ``` ```
  
  </div>
  
  <div slot="script">
  
    ``` ```
  
  </div>
  
</card>
  
<card>
  
  ## Icon
  
  Change the icon inside the checkbox component with the` `
  
  <utils-icon />
  
  <div slot="example">  
    <Checkbox-icon />  
  </div>
  
  <div slot="template">
  
    ``` ```
  
  </div>
  
  <div slot="script">
  
    ``` ```
  
  </div>
  
</card>
  
<card>
  
  ## Label
  
  Add a label to the checkbox with the default slot of the component
  
  <div slot="example">  
    <Checkbox-label />  
  </div>
  
  <div slot="template">
  
    ``` ```
  
  </div>
  
  <div slot="script">
  
    ``` ```
  
  </div>
  
</card>
  
<card>
  
  ## Loading
  
  Add a loading status to the component with the property ` `

  
  <div slot="example">  
    <Checkbox-loading />  
  </div>
  
  <div slot="template">
  
    ``` ```
  
  </div>
  
  <div slot="script">
  
    ``` ```
  
  </div>
  
</card>
  
<card>
  
  ## LineThrough
  
  Add a line in the middle of the label when the checkbox is checked with the property ` `
  
  <div slot="example">  
    <Checkbox-linethrough />  
  </div>
  
  <div slot="template">
  
    ``` ```
  
  </div>
  
  <div slot="script">
  
    ``` ```
  
  </div>
  
</card>
  
<card>
  
  ## Indeterminate
  
  There are some cases where you have several checkboxes and you need one that manages all the others for this you can  
  do it with the indeterminate property that adds a different style to the checkbox
  
  <div slot="example">  
    <Checkbox-indeterminate />  
  </div>
  
  <div slot="template">
  
    ``` ```
  
  </div>
  
  <div slot="script">
  
    ``` ```
  
  </div>
  
</card>



  
<card>
  
  ## API
  
</card>
