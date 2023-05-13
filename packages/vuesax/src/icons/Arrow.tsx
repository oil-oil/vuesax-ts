import { defineComponent } from "vue";

const IconArrow = defineComponent({
  props: {
    less: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      <i
        ref="icon"
        class={[
          "vs-icon-arrow",
          {
            less: props.less,
          },
        ]}
      ></i>
    );
  },
});

export default IconArrow;
