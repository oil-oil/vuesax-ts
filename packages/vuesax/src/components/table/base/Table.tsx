import { PropType, defineComponent, onMounted, provide, ref, toRef } from 'vue'

import './style.scss'
import { TableProvider } from '../types'
import useColor from '@/hooks/useColor'
import { Color } from '@/types/utils'

const Table = defineComponent({
  name: 'VsTable',
  props: {
    color: {
      type: String as PropType<Color>,
      default: 'primary'
    },
    striped: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  slots: ['footer', 'header', 'thead', 'tbody', 'notFound'],
  setup(props, { slots }) {
    const { color } = useColor(toRef(props, 'color'))
    const colspan = ref(0)
    const rootRef = ref<HTMLElement>()
    const theadRef = ref<HTMLElement>()
    const activeSort = ref(-1)

    onMounted(() => {
      const tds = theadRef.value?.querySelectorAll('th')
      colspan.value = tds?.length || 0
    })

    provide<TableProvider>('tableProvider', {
      rootRef,
      activeSort
    })

    return () => (
      <div class="vs-table-content" ref={rootRef}>
        {slots.header && (
          <header class="vs-table__header">{slots.header?.()}</header>
        )}

        <div
          class={[
            'vs-table',
            {
              striped: props.striped,
              isMultipleSelected: props.multiple
            }
          ]}
          style={{ '--vs-color': color.value }}
        >
          <table>
            <thead class="vs-table__thead" ref={theadRef}>
              {slots.thead?.()}
            </thead>

            {/* not-found */}
            <tbody class="vs-table_not-found">
              <tr>
                <td colspan={colspan.value}>
                  {slots.notFound?.() || 'No matching records found'}
                </td>
              </tr>
            </tbody>

            <tbody class="vs-table__tbody">{slots.tbody?.()}</tbody>
          </table>
        </div>

        {slots.footer && (
          <footer class="vs-table__footer">{slots.footer?.()}</footer>
        )}
      </div>
    )
  }
})

export default Table

export type TableProps = InstanceType<typeof Table>['$props']
