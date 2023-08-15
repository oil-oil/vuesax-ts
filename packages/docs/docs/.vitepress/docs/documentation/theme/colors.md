# Colors

<card subtitle="DefaultColors" :renderCode="false">

## Default Colors

Vuesax has the main colors that are maintained throughout the application to facilitate change and effective operation

Los colores principales se pueden cambiar y personalizar al gusto de cada desarrollador para una aplicación mas personalizada

Default colors:

- primary
- success
- danger
- warn
- dark

</card>


## Customize Theme Colors

You can change the colors as you want and at any time, vuesax uses native css variables which means you can access them and change them whenever you want

equal vuesax gives you several ways to change the main colors either by css or 

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
