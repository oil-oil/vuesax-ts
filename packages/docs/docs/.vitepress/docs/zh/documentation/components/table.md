---
prev: Pagination
next: Navbar
props : 
    - name: color
      type: String
      values: Vuesax Colors | RGB | HEX
      description: 更改表格的颜色.
      default: primary
    - name: striped
      type: Boolean
      values: true | false
      description: 为 VsTr 添加灰色条纹.	
      default: "false"
      usageUrl: table#striped
    - name: multiple
      type: Boolean 
      values: true | false
      description: 确定当选中列时是否有圆角，当设置为 true 时，去除圆角。
      default: "false"
      usageUrl: table#multiple-selected
    - name: VsTr:isSelected
      type: Boolean 
      values: true | false
      description: 确定组件是否处于选定状态
      default: "false"
      usageUrl: table#single-selected
    - name: VsTr:expand
      type: Boolean 
      values: true | false
      description: 确定组件是否处于展开状态.
      default: "false"
      usageUrl: table#expand-data
    - name: VsTh:sort
      type: Boolean 
      values: true | false
      description: 为相应的 th 添加排序箭头.
      default: "false"
      usageUrl: table#search-and-sort
    - name: VsTd:checkbox
      type: Boolean 
      values: true | false
      description: 确定组件是否为复选框样式，当设置为 true 时，宽度变小
      default: "false"
      usageUrl: table#multiple-selected
    - name: VsTd:edit
      type: Boolean 
      values: true | false
      description: 确定组件是否为编辑样式，当设置为 true 时，设置下划线
      default: "false"
      usageUrl: table#edit-data
slots : 
    - name: header
      type: slot
      values:
      description: 将一个元素放置在表格顶部，例如输入搜索
      usageUrl: table#search-and-sort
    - name: thead
      type: slot
      values:
      description: 代表表格中的 thead 元素，这里放置 VsTh 组件
      usageUrl: table#default
    - name: tbody
      type: slot
      values:
      description: 代表表格中的 tbody 元素，这里放置 VsTr 组件。
      usageUrl: table#default
    - name: header
      type: slot
      values:
      description: 将一个元素放置在表格底部，例如分页功能
      usageUrl: table#pagination
    - name: notFount
      type: slot
      values:
      description: 更改在表格中没有项目时显示内容。
      usageUrl: table#search-and-sort
    - name: VsTr:#expand
      type: slot
      values:
      description: 当 VsTr 展开时代表其内部的插槽
      usageUrl: table#expand-data
---

# Table

<card>

## Default

只需使用 `VsTable` 组件及其 `VsTr`、`VsTd`、`VsTh` 组件创建表格。

该组件提供更好的数据管理和根据需要进行更自由的定制的不同逻辑。

</card>

<card subtitle="Striped">

## Striped

你可以使用 `striped` 属性轻松加上条纹。

</card>

<card subtitle="Pagination">

## Pagination

你可以使用 `VsPagination` 组件和 `#footer` 插槽为表格添加分页功能。

</card>

<card subtitle="SingleSelected">

## Single Selected

你可以通过 `isSelected` 属性实现表格选中效果

</card>

<card subtitle="MultipleSelected">

## Multiple Selected

你可以通过 `isSelected` 属性和 `checkbox` 属性实现表格多选效果

</card>

<card subtitle="ExpandData">

## Expand Data

使用 `#expand` 插槽在 `VsTr` 组件的内部中展示可展开的数据。

</card>

<card subtitle="EditData">

## Edit Data

你可以轻松编辑表格内的数据通过使用 `VsModal` 组件和 VueJS 的魔法。

</card>

<card subtitle="Search&Sort">

## Search and sort

你可以使用 `#header` 插槽和 `sort` 属性来实现表格搜索和表格排序。

</card>

<script setup>
import Api from "../../../../theme/global-components/template/API.tsx"
</script>

<Api/>
