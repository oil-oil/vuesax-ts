import { DefineComponent, HTMLAttributes } from 'vue'

import colors from '@/styles/colors'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Position = 'top' | 'right' | 'left' | 'bottom'

export type RGB = `rgb(${number}, ${number}, ${number})`
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
export type HEX = `#${string}`
export type InnerColor = keyof typeof colors
export type Color = InnerColor | RGB | RGBA | HEX

export type CompWithAttr<Comp, Attr extends HTMLAttributes> = Comp &
  DefineComponent<Attr>
