import { HTMLAttributes, defineComponent } from "vue";
import "./style.scss";

const TableTd = defineComponent({
  props: {
    checkbox: {
      type: Boolean,
    },
    edit: {
      type: Boolean,
    },
  },
  setup(props, { slots }) {
    return () => (
      <td
        class={[
          "vs-table__td",
          {
            isCheckbox: props.checkbox,
            isEdit: props.edit,
          },
        ]}
      >
        {slots.default?.()}
      </td>
    );
  },
});

export default TableTd as CompWithAttr<typeof TableTd, HTMLAttributes>;

export type TableTdProps = InstanceType<typeof TableTd>["$props"];
