# Quick Start

## Installation

```bash
# npm
npm install vuesax

# yarn
yarn add vuesax-ts

# pnpm
pnpm install vuesax-ts

```

## Usage

### Global Import

To use Vuesax globally, import it in your main.ts file:

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

To add volar type support, update the tsconfig.json file:

```ts
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vuesax-ts/global"]
  }
}
```

### Manual Import
Alternatively, you can manually import Vuesax components in your main.ts file:

```ts
// main.ts
import { createApp } from 'vue'
import 'vuesax-ts/style.css'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
```

In your ue file, you can then use Vuesax components like this:

```vue
<template>
    <VsButton> Button </VsButton>
</template>

<script lang="ts" setup>
import { VsButton } from 'vuesax-ts'
</script>
```