import { defineComponent } from "vue";

const ButtonGroup = defineComponent({
  slots: ["default"],
  setup(_, { slots }) {
    return () => <div class="vs-button-group">{slots.default?.()}</div>;
  },
});

export default ButtonGroup;
