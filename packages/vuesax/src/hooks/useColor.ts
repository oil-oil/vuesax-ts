import { inject } from 'vue'

import innerColors from '@/styles/colors'
import { InnerColor } from '@/types/utils'
import { isColor } from '@/utils'
import { VuesaxOptions, vuesaxOptionsKey } from '@/utils/defineVuesaxOptions'

const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const result = hex
    .replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b)
    .match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

const useColor = (color?: string) => {
  if (color) {
    const options = inject<VuesaxOptions>(vuesaxOptionsKey, {
      colors: undefined
    })

    const colors = { ...innerColors, ...(options?.colors || {}) }

    const isRGB = /^(rgb|rgba)/.test(color)
    const isRGBNumbers =
      /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(
        color
      )
    const isHEX = /^(#)/.test(color)
    let newColor

    if (isRGB) {
      const arrayColor = color.replace(/[rgba()]/g, '').split(',')
      newColor = `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`
    } else if (isHEX) {
      const rgb = hexToRgb(color)
      newColor = `${rgb!.r},${rgb!.g},${rgb!.b}`
    } else if (isColor(color)) {
      newColor = colors[color as InnerColor]
    } else if (isRGBNumbers) {
      newColor = color
    }
    return newColor
  }
  return undefined
}

export default useColor
