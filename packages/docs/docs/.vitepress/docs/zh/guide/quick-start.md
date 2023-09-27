# 快速开始

## 安装

```bash
# npm
npm install vuesax

# yarn
yarn add vuesax-ts

# pnpm
pnpm install vuesax-ts

```

## 使用方法

### 全局引入

要在整个项目中使用 Vuesax，可以在主要的 main.ts 文件中进行引入：

```ts
// main.ts
import { createApp } from 'vue'
import Vuesax from 'vuesax-ts'
import 'vuesax-ts/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(Vuesax)
app.mount('#app')
```

要添加 volar 类型支持，请更新 tsconfig.json 文件：

```ts
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vuesax-ts/global"]
  }
}
```

### 手动引入

或者，您可以在主要的 main.ts 文件中手动引入 Vuesax 组件：

```ts
// main.ts
import { createApp } from 'vue'
import 'vuesax-ts/style.css'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
```

在 vue 文件中，可以这样使用 Vuesax 组件：

```vue
<template>
    <VsButton> 按钮 </VsButton>
</template>

<script lang="ts" setup>
import { VsButton } from 'vuesax-ts'
</script>
```