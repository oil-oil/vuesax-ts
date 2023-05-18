import { defineComponent } from "vue";
import "./style.scss";

const ButtonGroup = defineComponent({
  name: "VsButtonGroup",
  slots: ["default"],
  setup(_, { slots }) {
    return () => <div class="vs-button-group">{slots.default?.()}</div>;
  },
});

export default ButtonGroup;

export type ButtonGroupProps = InstanceType<typeof ButtonGroup>["$props"];
