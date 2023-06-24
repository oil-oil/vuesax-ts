import { computed, defineComponent, onMounted, provide, ref } from "vue";

import "./style.scss";
import { TableProvider } from "../types";

const Table = defineComponent({
  name: "VsTable",
  props: {
    modelValue: {
      type: Object,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  slots: ["footer", "header", "thead", "tbody", "notFound"],
  setup(props, { slots, emit }) {
    const colspan = ref(0);
    const rootRef = ref<HTMLElement>();
    const theadRef = ref<HTMLElement>();

    onMounted(() => {
      const tds = theadRef.value?.querySelectorAll("th");
      colspan.value = tds?.length || 0;
    });

    const isMultipleSelected = computed(() => Array.isArray(props.modelValue));

    const selected = (value: unknown) => {
      if (isMultipleSelected.value) {
        const newVal = props.modelValue;
        if (props.modelValue?.includes(value)) {
          newVal?.splice(props.modelValue.indexOf(value), 1);
        } else {
          newVal?.push(value);
        }

        emit("update:modelValue", newVal);
      } else {
        emit("update:modelValue", value);
      }
    };

    provide<TableProvider>("TableProvider", {
      rootRef,
      selected,
    });

    return () => (
      <div class="vs-table-content" ref={rootRef}>
        {slots.header && (
          <header class="vs-table__header">{slots.header?.()}</header>
        )}

        <div
          class={[
            "vs-table",
            {
              isSelectedValue: props.modelValue,
              striped: props.striped,
              isMultipleSelected: isMultipleSelected.value,
            },
          ]}
        >
          <table>
            <thead class="vs-table__thead" ref={theadRef}>
              {slots.thead?.()}
            </thead>

            {/* not-found */}
            <tbody class="vs-table_not-found">
              <tr>
                <td colspan={colspan.value}>
                  {slots.notFound?.() || "No matching records found"}
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
    );
  },
});

export default Table;

export type TableProps = InstanceType<typeof Table>["$props"];
