import { ThHTMLAttributes, computed, defineComponent, inject, onMounted, ref, watch } from 'vue'

import IconArrow from '@/icons/Arrow'
import './style.scss'
import { CompWithAttr } from '@/types/utils'
import { TableProvider } from '../types'

const sortMap = {
  null: 'desc',
  desc: 'asc',
  asc: null
} as const

const TableTh = defineComponent({
  name: 'VsTh',
  props: {
    sort: {
      type: Boolean,
      default: false
    }
  },
  emit: ['sort', 'click'],
  setup(props, { slots, emit }) {
    const rootRef = ref<HTMLElement>()
    const sortType = ref<'asc' | 'desc' | null>(null)
    const tableProvider = inject<TableProvider>("tableProvider")
    
    const sortIndex = computed(()=>{
      if(tableProvider?.rootRef){
        const sortTh = Array.from(tableProvider.rootRef.value?.querySelectorAll(".vs-table__th.sort")||[]) 
        return sortTh.indexOf(rootRef.value!) 
      }
      return -1
    })
  
    onMounted(() => {
      if (rootRef.value) {
        rootRef.value!.style.width = `${rootRef.value!.scrollWidth}px`
      }
    })

    watch(()=>tableProvider?.activeSort.value,()=>{
      if(tableProvider?.activeSort.value !== sortIndex.value){
        sortType.value = null
      }
    })

    const onClick = (e: MouseEvent) => {
      if (props.sort && tableProvider?.activeSort) {
        tableProvider.activeSort.value = sortIndex.value
        if(tableProvider?.activeSort.value === sortIndex.value){
          sortType.value = sortMap[String(sortType.value) as keyof typeof sortMap]
        }
        emit('sort', sortType.value)
      }

      emit('click', e)
    }

    return () => (
      <th
        class={['vs-table__th', { sort: props.sort }]}
        data-sort-type={sortType.value}
        onClick={onClick}
        ref={rootRef}
      >
        <div class="vs-table__th__content">
          {slots.default?.()}
          {props.sort && (
            <div class="vs-table__th__content__icons">
              <IconArrow class="icon-sort-1" />
              <IconArrow class="icon-sort-2" />
            </div>
          )}
        </div>
      </th>
    )
  }
})

export default TableTh as CompWithAttr<typeof TableTh, ThHTMLAttributes>

export type TableThProps = InstanceType<typeof TableTh>['$props']
