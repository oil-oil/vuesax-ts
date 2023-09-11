import { nanoid } from 'nanoid/non-secure'
import {
  InputHTMLAttributes,
  PropType,
  Transition,
  VNode,
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  toRef,
  watch
} from 'vue'

import { beforeEnter, enter, leave } from './transition'
import { Option, SelectProvider, SelectValue } from '../types'
import useColor from '@/hooks/useColor'
import IconArrow from '@/icons/Arrow'
import IconClose from '@/icons/Close'
import { Color, CompWithAttr } from '@/types/utils'
import { insertBody, removeBody, setCords } from '@/utils'
import { isNil } from '@/utils/shared'

import './style.scss'

const Select = defineComponent({
  name: 'VsSelect',
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'primary'
    },
    modelValue: {
      type: [Array, String, Number] as PropType<SelectValue>
    },
    multiple: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    labelPlaceholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    collapseChips: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    status: {
      type: String as PropType<
        'success' | 'warn' | 'danger' | 'primary' | 'dark'
      >,
      default: null
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'blur', 'focus'],
  slots: ['default', 'noData'],
  setup(props, { slots, attrs, emit }) {
    const { getColor, color } = useColor(toRef(props, 'color'))
    const selectAttrs = attrs as InputHTMLAttributes
    const uniqueId = selectAttrs?.id || nanoid()

    const optionRef = ref<HTMLElement>()
    const selectRef = ref<HTMLElement>()
    const chipsRef = ref<HTMLElement>()
    const inputRef = ref<HTMLElement>()
    const chipsInputRef = ref<HTMLElement>()
    const placeholderRef = ref<HTMLElement>()
    const contentRef = ref<HTMLElement>()

    const selectedLabel = ref<Pick<Option, 'label' | 'value'>[] | string>()
    const isOptionsShow = ref(false)
    const isFilterActive = ref(false)
    const hoverOption: SelectProvider['hoverOption'] = ref(-1)
    const childOptions: SelectProvider['childOptions'] = ref<Option[]>([])
    const textFilter: SelectProvider['textFilter'] = ref('')
    const isTargetSelect: SelectProvider['isTargetSelect'] = ref(false)
    const isTargetClose: SelectProvider['isTargetClose'] = ref(false)
    const isInputHover = ref(false)

    const insertOptions = () => {
      const options = optionRef.value as HTMLElement
      const selects = selectRef.value as HTMLElement

      insertBody(options, document.body)
      setCords(options, selects)
    }

    const setHover = () => {
      nextTick(() => {
        let index = -1
        childOptions.value.forEach((item, i) => {
          if (item.value === (props.modelValue as string)) {
            index = i
          }
        })

        hoverOption.value = index
      })
    }

    const getValue = () => {
      if (!isNil(props.modelValue)) {
        selectedLabel.value = childOptions.value
          .filter((option) => {
            if (Array.isArray(props.modelValue)) {
              return (
                (props.modelValue as (string | number)[]).indexOf(
                  option.value || ''
                ) !== -1
              )
            }
            return option.value === props.modelValue
          })
          .map((item) => ({
            label: item.label,
            value: item.value
          }))
      }
    }

    const computedSelectedLabel = computed(() => {
      if (Array.isArray(selectedLabel.value)) {
        return selectedLabel.value.map((item) => item.label)
      }
      return selectedLabel.value
    })

    const handleBlur = () => {
      nextTick(() => {
        isOptionsShow.value = false
      })
      emit('blur')
      setHover()
      if (isOptionsShow.value) {
        textFilter.value = ''
        if (!props.multiple) {
          isFilterActive.value = false
        }
      }
    }

    const handleWindowClick = (evt: Event) => {
      if (!isInputHover.value) {
        handleBlur()
      }

      if (props.filter && !isOptionsShow.value) {
        isFilterActive.value = false
      }

      if (
        evt.target === inputRef.value &&
        isOptionsShow.value &&
        !props.filter
      ) {
        handleBlur()
        setTimeout(() => {
          ;(inputRef.value as HTMLElement).blur()
        }, 100)
      }
    }

    const onClickOption: SelectProvider['onClickOption'] = ({
      value,
      label
    }) => {
      let newValue
      const oldValue = isNil(props.modelValue)
        ? []
        : (props.modelValue as (string | number)[])
      if (props.multiple && value) {
        const index = (
          (props.modelValue as (string | number)[]) || []
        )?.indexOf(value)
        if (index === -1) {
          newValue = [...oldValue, value]
        } else {
          newValue = [...oldValue].filter((_, i) => i !== index)
        }
      } else {
        newValue = value
        selectedLabel.value = label
      }

      emit('update:modelValue', newValue)

      setTimeout(() => {
        if (props.multiple && isOptionsShow.value) {
          ;(chipsRef.value as HTMLElement).focus()
        }
      }, 10)
      if (!props.multiple) {
        handleBlur()
      }
    }

    const chips = computed(() => {
      const chip = (
        item: Pick<Option, 'label' | 'value'>,
        isCollapse: boolean
      ): VNode => (
        <span
          class={['vs-select__chips__chip', { isCollapse }]}
          data-value={item.value}
        >
          {item.label}
          {!isCollapse && (
            <span
              class="vs-select__chips__chip__close"
              onClick={() => {
                setTimeout(() => {
                  isTargetClose.value = false
                }, 100)
                if (!isOptionsShow.value) {
                  ;(chipsRef.value as HTMLElement).blur()
                  if (props.filter) {
                    ;(chipsInputRef.value as HTMLElement).blur()
                  }
                }
                onClickOption({ value: item.value, label: item.label })
              }}
            >
              <IconClose hover="less" />
            </span>
          )}
        </span>
      )

      let tempChips: VNode[] = []

      if (Array.isArray(selectedLabel.value)) {
        selectedLabel.value.forEach((item) => {
          tempChips.push(chip(item, false))
        })
      }

      if (props.collapseChips && tempChips.length > 1) {
        tempChips = [
          tempChips[0],
          chip({ label: `+${tempChips.length - 1}`, value: undefined }, true)
        ]
      }

      return tempChips
    })

    const onBlur = (evt: FocusEvent) => {
      if (!props.multiple) {
        handleBlur()
      } else if (!evt.relatedTarget) {
        handleBlur()
      } else if (
        !isInputHover.value ||
        (!isTargetSelect.value && !isOptionsShow.value)
      ) {
        handleBlur()
      }
      if (props.filter) {
        isFilterActive.value = false
      }
    }

    const handleKeydown = (evt: KeyboardEvent) => {
      const options = optionRef.value as HTMLElement
      Array.from({ length: 300 }).forEach((_, index) => {
        setTimeout(() => {
          setCords(options, selectRef.value as HTMLElement)
        }, index)
      })

      if (evt.code === 'ArrowDown') {
        evt.preventDefault()
        if (hoverOption.value < childOptions.value.length - 1) {
          hoverOption.value += 1
        } else {
          hoverOption.value = 0
        }
      } else if (evt.code === 'ArrowUp') {
        evt.preventDefault()

        if (hoverOption.value > 0) {
          hoverOption.value -= 1
        } else {
          hoverOption.value = childOptions.value.length - 1
        }
      } else if (evt.code === 'Enter') {
        evt.preventDefault()
        if (hoverOption.value !== -1) {
          if (!childOptions.value[hoverOption.value].disabled) {
            onClickOption({
              value: childOptions.value[hoverOption.value].value,
              label: childOptions.value[hoverOption.value].label
            })
            if (!props.multiple) {
              handleBlur()
              ;(inputRef.value as HTMLElement).blur()
            }
          }
        }
      }

      if (hoverOption.value !== -1) {
        ;(contentRef.value as HTMLElement).scrollTop =
          childOptions.value[hoverOption.value].el.offsetTop - 66
      }
    }

    const isNoData = computed(
      () =>
        childOptions.value.filter(
          (option) => option.hiddenOptionGroup || option.hiddenOption
        ).length === childOptions.value.length
    )

    const handleResize = () => {
      if (optionRef.value) {
        nextTick(() => {
          setCords(optionRef.value!, selectRef.value!)
        })

        Array.from({ length: 300 }).forEach((_, index) => {
          setTimeout(() => {
            setCords(optionRef.value!, selectRef.value!)
          }, index)
        })
      }
    }

    const handleScroll = () => {
      if (optionRef.value) {
        setCords(optionRef.value!, selectRef.value!)
      }
    }

    const getMessage = (type: Color) => (
      <Transition onBeforeEnter={beforeEnter} onEnter={enter} onLeave={leave}>
        {!!slots[`message-${type}`] && (
          <div
            class={['vs-select__message']}
            style={{ '--vs-color': getColor(type) }}
          >
            {slots[`message-${type}`]?.()}
          </div>
        )}
      </Transition>
    )

    const resetPlaceholderTransition = () => {
      if (placeholderRef.value) {
        ;(placeholderRef.value as HTMLElement).style.transition =
          textFilter.value ? '0s' : ''
      }
    }

    watch(textFilter, () => {
      resetPlaceholderTransition()
    })

    watch(
      () => props.modelValue,
      () => {
        getValue()

        if (props.multiple) {
          nextTick(() => {
            const height = chipsRef.value?.scrollHeight
            inputRef.value!.style.height = `${height}px`
            const options = optionRef.value!
            if (isOptionsShow.value) {
              nextTick(() => {
                setCords(options, selectRef.value!)
              })
            }
          })
        }

        resetPlaceholderTransition()
      }
    )

    onMounted(() => {
      getValue()
      nextTick(() => {
        insertOptions()
      })
      window.addEventListener('resize', handleResize)
      window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
      handleBlur()
      if (optionRef.value) {
        removeBody(optionRef.value, document.body)
        optionRef.value = undefined
      }
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    })

    provide<SelectProvider>('provider', {
      value: toRef(props, 'modelValue'),
      textFilter,
      multiple: toRef(props, 'multiple'),
      onClickOption,
      hoverOption,
      childOptions,
      isTargetSelect,
      isTargetClose,
      color: toRef(props, 'color')
    })

    return () => (
      <div
        class={[
          'vs-select-content',
          {
            block: props.block
          }
        ]}
        style={{
          '--vs-color': color.value,
          marginTop: props.label ? '32px' : '0'
        }}
        ref={selectRef}
      >
        {/* select content */}
        <div
          style={{ '--vs-color': color.value }}
          class={[
            'vs-select',
            {
              [`vs-select--status-${props.status}`]: props.status,
              'vs-select--disabled': selectAttrs.disabled,
              'show-options': isOptionsShow.value,
              loading: props.loading
            }
          ]}
          onMouseleave={(e) => {
            if (e.relatedTarget !== optionRef.value) {
              isInputHover.value = false
              isTargetSelect.value = false
            }
          }}
          onMouseenter={() => {
            isInputHover.value = true
          }}
        >
          {/* input */}
          <input
            readonly={!props.filter}
            {...selectAttrs}
            id={uniqueId}
            ref={inputRef}
            class={[
              'vs-select__input',
              {
                multiple: props.multiple,
                simple: !props.multiple && !props.filter
              }
            ]}
            value={
              isFilterActive.value
                ? textFilter.value
                : computedSelectedLabel.value
            }
            onKeydown={handleKeydown}
            onFocus={(e) => {
              isOptionsShow.value = true
              emit('focus', e)
              if (props.filter) {
                isFilterActive.value = true
              }
              window.addEventListener('mousedown', handleWindowClick)
            }}
            onInput={(e) => {
              textFilter.value = (e.target as HTMLInputElement)?.value
            }}
          />

          {/* label */}
          {(props.label || props.labelPlaceholder) && !props.placeholder && (
            <label
              class={[
                'vs-select__label',
                {
                  'vs-select__label--placeholder': props.labelPlaceholder,
                  'vs-select__label--label': props.label,
                  'vs-select__label--hidden': (() => {
                    if (props.labelPlaceholder) {
                      if (Array.isArray(props.modelValue)) {
                        return props.modelValue.length !== 0
                      }
                      if (typeof props.modelValue === 'number') {
                        return true
                      }
                      return props.modelValue && !props.label
                    }
                    return false
                  })()
                }
              ]}
              for={uniqueId}
            >
              {props.labelPlaceholder || props.label}
            </label>
          )}

          {/* placeholder */}
          {!props.label && props.placeholder && (
            <label
              class={[
                'vs-select__label',
                {
                  'vs-select__label--hidden': (() => {
                    if (Array.isArray(props.modelValue)) {
                      return props.modelValue.length !== 0
                    }
                    if (typeof props.modelValue === 'number') {
                      return true
                    }
                    return props.modelValue || textFilter.value
                  })()
                }
              ]}
              ref={placeholderRef}
              for={uniqueId}
            >
              {props.placeholder}
            </label>
          )}

          {/* chips */}
          {props.multiple && (
            <button
              class="vs-select__chips"
              ref={chipsRef}
              onKeydown={handleKeydown}
              onFocus={(e) => {
                if (!isTargetClose.value) {
                  isOptionsShow.value = true
                  emit('focus', e)
                }
                if (props.filter && props.multiple) {
                  chipsInputRef.value?.focus()
                }
              }}
              onBlur={onBlur}
            >
              {...chips.value}
              {props.filter && (
                <input
                  class="vs-select__chips__input"
                  ref={chipsInputRef}
                  placeholder={selectAttrs.placeholder}
                  id={uniqueId}
                  value={textFilter.value}
                  onFocus={(e) => {
                    if (!isTargetClose.value) {
                      isOptionsShow.value = true
                      emit('focus', e)
                    }
                  }}
                  onBlur={onBlur}
                  onInput={(e) => {
                    textFilter.value = (e.target as HTMLInputElement).value
                  }}
                ></input>
              )}
            </button>
          )}

          {/* options */}
          <Transition name="vs-select">
            <div
              v-show={isOptionsShow.value}
              class={[
                'vs-select__options',
                {
                  isColorDark: props.color === 'dark',
                  'vs-component--primary': !props.color
                }
              ]}
              style={{
                '--vs-color': color.value
              }}
              ref={optionRef}
              onMouseleave={() => {
                isTargetSelect.value = false
                isInputHover.value = false
              }}
              onMouseenter={() => {
                isTargetSelect.value = true
                isInputHover.value = true
              }}
            >
              <div class="vs-select__options__content" ref={contentRef}>
                {isNoData.value && (
                  <div class="vs-select__options__content__no-data">
                    {slots.noData?.() || 'No data available'}
                  </div>
                )}
                {slots.default?.()}
              </div>
            </div>
          </Transition>

          {/* loading */}
          {props.loading && <div class="vs-select__loading" />}

          {/* icon */}
          <IconArrow
            onClick={() => {
              if (isOptionsShow.value) {
                isOptionsShow.value = false
              } else {
                inputRef.value?.focus()
              }
            }}
          ></IconArrow>
        </div>

        {/* message */}
        {(['success', 'danger', 'warn', 'primary'] as const).map((type) =>
          getMessage(type)
        )}
      </div>
    )
  }
})

export default Select as CompWithAttr<typeof Select, InputHTMLAttributes>

export type SelectProps = InstanceType<typeof Select>['$props']
