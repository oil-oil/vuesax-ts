import { defineComponent, InputHTMLAttributes } from "vue";

import { BaseProps } from "@/hooks/useBase";
import "./style.scss";

const Card = defineComponent({
  name: "VsCard",
  props: {
    ...BaseProps,
    type: {
      type: [String, Boolean],
      default: "1",
    },
  },
  slots: ["title", "text", "buttons", "interactions"],
  setup(props, { slots, attrs }) {
    const cardAttrs = attrs as InputHTMLAttributes;

    const title = <div class="vs-card__title">{slots.title?.()}</div>;

    const text = (
      <div class="vs-card__text">
        {slots.title && title}
        {slots.text?.()}
      </div>
    );

    const buttons = <div class="vs-card__buttons">{slots.buttons?.()}</div>;

    const interactions = (
      <div class="vs-card__interactions">{slots.interactions?.()}</div>
    );

    const img = (
      <div class="vs-card__img">
        {slots.img?.()}
        {slots.interactions && interactions}
      </div>
    );

    const card = (
      <div class="vs-card" {...cardAttrs}>
        {slots.img && img}
        {slots.text && text}
        {slots.button && buttons}
      </div>
    );

    return () => (
      <div class={["vs-card-content", `type-${props.type}`]}>{card}</div>
    );
  },
});
export default Card as CompWithAttr<typeof Card, InputHTMLAttributes>;

export type CardProps = InstanceType<typeof Card>["$props"];
