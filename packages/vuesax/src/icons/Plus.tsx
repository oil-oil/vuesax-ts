import { defineComponent } from "vue";

const IconPlus = defineComponent({
  props: {
    less: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      <i
        class={[
          "vs-icon-plus",
          {
            less: props.less,
          },
        ]}
      ></i>
    );
  },
});

export default IconPlus;
