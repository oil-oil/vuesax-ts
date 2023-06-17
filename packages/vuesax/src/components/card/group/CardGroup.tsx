import { defineComponent, ref } from "vue";

import IconsArrow from "../../../icons/Arrow";
import "./style.scss";

const CardGroup = defineComponent({
  name: "VsCardGroup",
  slots: ["default"],
  setup(props, { slots }) {
    const cardsRef = ref<HTMLElement>();
    const arrowPrev = (
      <button
        class="vs-card__group-prev"
        onClick={(evt: MouseEvent) => {
          cardsRef.value?.scrollTo(
            cardsRef.value.scrollLeft - cardsRef.value.clientWidth,
            0
          );
          evt.stopPropagation();
        }}
      >
        <IconsArrow></IconsArrow>
      </button>
    );

    const arrowNext = (
      <button
        class="vs-card__group-next"
        onClick={(evt: MouseEvent) => {
          cardsRef.value?.scrollTo(
            cardsRef.value.scrollLeft + cardsRef.value.clientWidth,
            0
          );
          evt.stopPropagation();
        }}
      >
        <IconsArrow></IconsArrow>
      </button>
    );

    const cards = (
      <div class="vs-card__group-cards" ref={cardsRef}>
        {slots.default?.()}
        <div class="vs-card__group-space"></div>
      </div>
    );

    return () => (
      <div class="vs-card__group">
        {arrowPrev}
        {cards}
        {arrowNext}
      </div>
    );
  },
});
export default CardGroup;

export type CardGroupProps = InstanceType<typeof CardGroup>["$props"];
