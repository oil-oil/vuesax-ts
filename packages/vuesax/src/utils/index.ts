import colors from '@/styles/colors'
import { InnerColor, Position } from '@/types/utils'

/* eslint-disable no-param-reassign */
const isColor = (color: string) => Object.keys(colors).includes(color)

const setVar = (propertyName: string, value: string, el: HTMLElement) => {
  if (!el) {
    document.documentElement.style.setProperty(`--vs-${propertyName}`, value)
  } else if (el.nodeName !== '#comment') {
    el.style.setProperty(`--vs-${propertyName}`, value)
  }
}

const setColor = (
  colorName: string,
  color: string,
  el: HTMLElement,
  addClass?: boolean
) => {
  function hexToRgb(hex: string) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(
      shorthandRegex,
      (_: any, r: string, g: string, b: string) => r + r + g + g + b + b
    )

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null
  }

  const isRGB = /^(rgb|rgba)/.test(color)
  const isRGBNumbers =
    /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/.test(
      color
    )
  const isHEX = /^(#)/.test(color)
  let newColor

  if (color === 'dark' && el) {
    if (addClass) {
      el.classList.add('vs-component-dark')
    }
  }

  if (isRGB) {
    const arrayColor = color.replace(/[rgba()]/g, '').split(',')
    newColor = `${arrayColor[0]},${arrayColor[1]},${arrayColor[2]}`
    setVar(colorName, newColor, el)
    if (addClass) {
      el.classList.add('vs-change-color')
    }
  } else if (isHEX) {
    const rgb = hexToRgb(color)
    newColor = `${rgb!.r},${rgb!.g},${rgb!.b}`
    setVar(colorName, newColor, el)
    if (addClass) {
      el.classList.add('vs-change-color')
    }
  } else if (isColor(color)) {
    newColor = colors[color as InnerColor]
    setVar(colorName, newColor, el)
    if (addClass) {
      el.classList.add('vs-change-color')
    }
  } else if (isRGBNumbers) {
    setVar(colorName, color, el)
    if (addClass) {
      el.classList.add('vs-change-color')
    }
  } else {
    //     consolee.warn({
    //       el,
    //       link: 'https://lusaxweb.github.io/vuesax/',
    //       text: `• Component: ${el.__vue__.$vnode.componentOptions.tag}
    // • Warn info: El formato de la propiedad color es incorrecto
    // • Prop: color
    // • value: ${color}
    // • Valores Permitidos: (RGB, HEX, RGB Numbers, Vuesax Colors)
    // • Example: color="#000" or color="rgb(255,255,255)"`,
    //       title: 'VUESAX'
    //     })
  }
}

const insertBody = (element: HTMLElement, parent?: HTMLElement) => {
  const target = parent || document.body
  target.insertBefore(element, target.lastChild)
}

const removeBody = (element: HTMLElement, parent: HTMLElement) => {
  const target = parent || document.body
  target.removeChild(element)
}

/**
 * Set the position of an element relative to its parent element.
 */
const setCords = (element: HTMLElement, parent: HTMLElement) => {
  const cords = parent.getBoundingClientRect()
  const { x } = cords
  const { y } = cords
  const w = cords.width
  const h = cords.height
  const { style } = element
  const scrollTop = window.pageYOffset
  const elTop = element.clientHeight + cords.y + scrollTop
  const rootTop = scrollTop + window.innerHeight

  // If the element is closer to the top of the window than the bottom, align it above the parent element.
  if (rootTop - elTop < 30) {
    style.top = `${y + scrollTop - element.clientHeight - 4}px`
    style.left = `${x}px`
    style.width = `${w}px`
    element.classList.add('top')
    parent.classList.add('top')
  } else {
    // Otherwise, align it below the parent element.
    style.top = `${y + scrollTop + h - 4}px`
    style.left = `${x}px`
    style.width = `${w}px`
    element.classList.remove('top')
    parent.classList.remove('top')
  }
}

const setCordsPosition = (
  element: HTMLElement,
  parent: HTMLElement,
  position: Position
) => {
  const cords = parent.getBoundingClientRect()
  const { x } = cords
  const { y } = cords
  const w = cords.width
  const h = cords.height
  const { style } = element
  const scrollTop = window.pageYOffset
  const elTop = element.clientHeight + cords.y + scrollTop
  const rootTop = scrollTop + window.innerHeight

  if (
    x + w + 10 + element.getBoundingClientRect().width > window.innerWidth &&
    position === 'right'
  ) {
    position = 'left'
    element.classList.remove('right')
    element.classList.add('left')
  }

  if (x - 10 < element.getBoundingClientRect().width && position === 'left') {
    position = 'right'
    element.classList.remove('left')
    element.classList.add('right')
  }

  if (rootTop - elTop < 30 || position === 'top') {
    style.top = `${y + scrollTop - element.clientHeight - 8}px`
    const left = x + (w - element.getBoundingClientRect().width) / 2

    if (left + element.getBoundingClientRect().width < window.innerWidth) {
      if (left > 0) {
        style.left = `${left}px`
      } else {
        style.left = '10px'
        element.classList.add('noArrow')
      }
    } else {
      style.left = 'auto'
      style.right = '10px'
      element.classList.add('noArrow')
    }
  } else if (position === 'bottom') {
    style.top = `${y + scrollTop + h + 8}px`
    const left = x + (w - element.getBoundingClientRect().width) / 2

    if (left + element.getBoundingClientRect().width < window.innerWidth) {
      if (left > 0) {
        style.left = `${left}px`
      } else {
        style.left = '10px'
        element.classList.add('noArrow')
      }
    } else {
      style.left = 'auto'
      style.right = '10px'
      element.classList.add('noArrow')
    }
  } else if (position === 'left') {
    style.top = `${
      y + scrollTop + (h - element.getBoundingClientRect().height) / 2
    }px`
    style.left = `${x - element.getBoundingClientRect().width - 8}px`
  } else if (position === 'right') {
    style.top = `${
      y + scrollTop + (h - element.getBoundingClientRect().height) / 2
    }px`
    style.left = `${x + w + 8}px`
  }
}

export {
  setColor,
  setVar,
  isColor,
  insertBody,
  removeBody,
  setCords,
  setCordsPosition
}
