import { defineComponent } from "vue";

const MyComponent = defineComponent({
  props: {
    isVisible: Boolean,
  },

  setup(props) {
    return () => (
      <>
        <button hidden={!props.isVisible}></button>
      </>
    );
  },
});
