import { HTMLAttributes, defineComponent } from "vue";

import "./style.scss";

const OptionGroup = defineComponent({
  name: "VsSelectOptionGroup",
  props: {
    title: {
      type: String,
    },
  },
  slots: ["default", "title"],
  setup(props, { slots, attrs }) {
    return () => (
      <div {...attrs} class="vs-select__option-group">
        {props.title ? <h5>{props.title}</h5> : slots.title?.()}
        {slots.default?.()}
      </div>
    );
  },
});

export default OptionGroup as CompWithAttr<typeof OptionGroup, HTMLAttributes>;

export type InputProps = InstanceType<typeof OptionGroup>["$props"];
