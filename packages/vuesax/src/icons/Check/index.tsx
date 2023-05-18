import { defineComponent } from "vue";
import "./style.scss";

const IconCheck = defineComponent({
  props: {
    indeterminate: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    return () => (
      <i class={["vs-icon-check", { indeterminate: props.indeterminate }]}>
        <span>
          <div class="line1"></div>
          <div class="line2"></div>
        </span>
      </i>
    );
  },
});

export default IconCheck;
