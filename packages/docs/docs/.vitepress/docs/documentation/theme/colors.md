# Colors

<card subtitle="DefaultColors" :renderCode="false">

## Default Colors

Vuesax has the main colors that are maintained throughout the application to facilitate change and effective operation


Default colors:

- primary
- success
- danger
- warn
- dark

</card>


## Customize Theme Colors

You can override the original theme color by passing in the `colors` field via options when executing `Vue.use`.

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
