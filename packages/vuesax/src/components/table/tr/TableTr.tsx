import {
  HTMLAttributes,
  Transition,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  watch
} from 'vue'

import './style.scss'
import { CompWithAttr } from '@/types/utils'

const TableTr = defineComponent({
  name: 'VsTr',
  props: {
    isSelected: {
      type: Boolean,
      default: false
    },
    expand: {
      type: Boolean,
      default: false
    }
  },
  slots: ['expand'],
  setup(props, { attrs, slots }) {
    const rootRef = ref<HTMLElement>()
    const expandContentRef = ref<HTMLElement>()

    const expandColspan = ref(0)

    onMounted(() => {
      if (slots?.expand) {
        expandColspan.value = rootRef.value?.querySelectorAll('td').length || 0
      }
    })

    watch(
      () => props.expand,
      () => {
        if (props.expand) {
          nextTick(() => {
            if (expandContentRef.value) {
              expandContentRef.value.style.height = `${expandContentRef.value.scrollHeight}px`
            }
          })
        }
      }
    )

    return () => (
      <>
        {/* base tr */}
        <tr
          class={[
            'vs-table__tr',
            {
              selected: props.isSelected,
              isExpand: props.expand,
              expand: !!slots.expand
            }
          ]}
          ref={rootRef}
          {...attrs}
        >
          {slots.default?.()}
        </tr>

        {/* expand tr */}
        <Transition name="fade-expand">
          {props.expand && (
            <tr class="vs-table__tr__expand">
              <td class="vs-table__expand__td" colspan={expandColspan.value}>
                <div
                  class="vs-table__expand__td__content"
                  ref={expandContentRef}
                >
                  <div class="vs-table__expand__td__content__sub">
                    {slots.expand?.()}
                  </div>
                </div>
              </td>
            </tr>
          )}
        </Transition>
      </>
    )
  }
})

export default TableTr as CompWithAttr<typeof TableTr, HTMLAttributes>

export type TableTrProps = InstanceType<typeof TableTr>['$props']
