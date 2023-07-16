import { defineComponent, ref } from "vue";

import IconsArrow from "../../../icons/Arrow";
import "./style.scss";

const CardGroup = defineComponent({
  name: "VsCardGroup",
  slots: ["default"],
  setup(_, { slots }) {
    const cardsRef = ref<HTMLElement>();

    return () => (
      <div class="vs-card__group">
        <button
          class="vs-card__group-prev"
          onClick={() => {
            cardsRef.value?.scrollTo(
              cardsRef.value.scrollLeft - cardsRef.value.clientWidth,
              0
            );
          }}
        >
          <IconsArrow></IconsArrow>
        </button>
        <div class="vs-card__group-cards" ref={cardsRef}>
          {slots.default?.()}
          <div class="vs-card__group-space"></div>
        </div>
        <button
          class="vs-card__group-next"
          onClick={() => {
            cardsRef.value?.scrollTo(
              cardsRef.value.scrollLeft + cardsRef.value.clientWidth,
              0
            );
          }}
        >
          <IconsArrow></IconsArrow>
        </button>
      </div>
    );
  },
});
export default CardGroup;

export type CardGroupProps = InstanceType<typeof CardGroup>["$props"];
