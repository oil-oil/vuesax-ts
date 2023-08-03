import { defineComponent, PropType } from "vue";

import { Color } from "./types/utils";

const MyComponent = defineComponent({
  props: {
    isVisible: {
      type: Boolean,
      default: true,
      required: true,
    },
    color: {
      type: String as PropType<Color>,
    },
    data: {
      type: Object,
      default() {
        return { message: "hello" };
      },
    },
  },
  slots: ["default", "header"],
  emits: ["update:color"],
  setup(props, { slots, emit }) {
    return () => (
      <>
        <header>{slots.header?.()}</header>
        <main>
          <button onClick={() => emit("update:color", "blue")}></button>
          {slots.default?.()}
        </main>
      </>
    );
  },
});
