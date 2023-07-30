import {
  HTMLAttributes,
  PropType,
  Transition,
  defineComponent,
  inject,
  nextTick,
  ref,
  watch,
} from "vue";

import "./style.scss";
import { TableProvider } from "../types";
import { CompWithAttr } from "@/types/utils";

const TableTr = defineComponent({
  name: "VsTr",
  props: {
    data: {
      type: Object as PropType<unknown>,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    notClickSelected: {
      type: Boolean,
      default: false,
    },
    openExpandOnlyTd: {
      type: Boolean,
      default: false,
    },
  },
  slots: ["expand"],
  setup(props, { attrs, emit, slots }) {
    const isExpand = ref(false);
    const rootRef = ref<HTMLElement>();
    const expandContentRef = ref<HTMLElement>();
    const provider = inject<TableProvider>("TableProvider");

    const expandColspan = ref(0);
    watch(
      () => props.data,
      () => {
        rootRef.value?.style.removeProperty("--vs-color");
        if (isExpand.value) {
          isExpand.value = false;
        }
      }
    );

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (slots?.expand) {
        if (
          (props.openExpandOnlyTd ? target.nodeName === "TD" : true) &&
          !target.className.includes("isEdit")
        ) {
          expandColspan.value =
            rootRef.value?.querySelectorAll("td").length || 0;

          isExpand.value = !isExpand.value;
        }
      }

      if (target.nodeName === "TD" && !props.notClickSelected) {
        provider?.selected(props.data);
        emit("selected", props.data);
      }

      emit("click", e);
    };

    watch(isExpand, () => {
      if (isExpand.value) {
        nextTick(() => {
          if (expandContentRef.value) {
            expandContentRef.value.style.height = `${expandContentRef.value.scrollHeight}px`;
          }
        });
      }
    });

    return () => (
      <>
        {/* base tr */}
        <tr
          class={[
            "vs-table__tr",
            {
              selected: props.isSelected,
              isExpand: isExpand.value,
              expand: !!slots.expand,
            },
          ]}
          onClick={onClick}
          ref={rootRef}
          {...attrs}
        >
          {slots.default?.()}
        </tr>

        {/* expand tr */}
        <Transition name="fade-expand">
          {isExpand.value && (
            <tr class="vs-table__tr__expand" {...attrs}>
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
    );
  },
});

export default TableTr as CompWithAttr<typeof TableTr, HTMLAttributes>;

export type TableTrProps = InstanceType<typeof TableTr>["$props"];
