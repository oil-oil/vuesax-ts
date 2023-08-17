# Colors 颜色

<card subtitle="DefaultColors" :renderCode="false">

## 默认颜色

Vuesax 具有在整个应用程序中保持不变的主题颜色，主题色可以根据每个开发人员的喜好进行更改和定制，从而使应用程序更加个性化。

默认的主题色有:

- primary
- success
- danger
- warn
- dark

</card>


## 自定义主题颜色

你可以通过在执行 `Vue.use` 时通过 `options` 传入 `colors` 字段以覆盖原有主题色:

```javascript
 Vue.use(Vuesax, {
    colors: {
      primary:'#5b3cc4',
      success:'rgb(23, 201, 100)',
      danger:'rgb(242, 19, 93)',
      warning:'rgb(255, 130, 0)',
      dark:'rgb(36, 33, 69)'
    }
  })
```
