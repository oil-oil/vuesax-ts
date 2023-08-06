
  ---  
PROPS:  
- name: color  
type: String  
values: Vuesax Colors, RGB, HEX  
description: Change the color of the radio.  
default: primary  
link: null  
usage: '#color'  
code: >  
<vs-radio success v-model="picked" val="2">  
  Success  
</vs-radio>
  
- name: disabled  
type: Boolean  
values: true,false  
description: Determine if the component is in the disabled state.  
default: false  
link: null  
usage: '#default'  
code: >  
<vs-radio disabled v-model="picked" val="3">  
  Option C  
</vs-radio>
  
- name: loading  
type: Boolean  
values: true,false  
description: Determine if the component has a loading animation and is disabled.  
default: false  
link: null  
usage: '#loading'  
code: >  
<vs-radio loading v-model="picked" val="1">  
  Option 1  
</vs-radio>
  
- name: val  
type: String  
values: String  
description: Determine the value of the radio input.  
default: null  
link: null  
usage: '#default'  
code: >  
<vs-radio v-model="picked" val="1">  
  Option A  
</vs-radio>
  
SLOTS:  
- name: default  
type: slot  
values: null  
description: Add a label to the component.  
default: null  
link: null  
usage: '#label'  
code: >  
<vs-radio v-model="picked" val="1">  
  Label  
</vs-radio>  
- name: icon  
type: slot  
values: null  
description: Add an icon inside the radio.  
default: null  
link: null  
usage: '#icon'  
code: >  
<vs-radio v-model="picked" val="1">  
  Yen  
  <template #icon>  
    <i class='bx bx-yen'></i>  
  </template>  
</vs-radio>
  
NEWS:  
- loading  
- icon  
- label  
---
  
# Radio
  
<card>
  
  ## Default
  
  <docs-warn />
  
  Add the radio type input with the component ` `
  
  <div slot="example">  
    <Radio-default />  
  </div>
  
  <div slot="template">
  
    ``` ```
  
  </div>
  
  <div slot="script">
  
    ``` ```
  
  </div>
  
</card>
  
<card>
  
  ## Color
  
  <coloren />
  
  <div slot="example">  
    <Radio-color />  
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
  
  Add a label to the radio with the ` ` slot, if you need the label to be before the radio you can use the ` ` property
  
  <div slot="example">  
    <Radio-label />  
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
  
  Add a loading animation to the component, when the radio has this property active it is as if it were in ` `
  
  <div slot="example">  
    <Radio-loading />  
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
  
  Add an icon inside the radio with the ` ` slot
  
  <div slot="example">  
    <Radio-icons />  
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
