import { useData } from "vitepress";
import { defineComponent } from "vue";

import Codex from "./Codex";
import "./Card.scss";

const Card = defineComponent({
  name: "Card",
  props: {
    codesandbox: {
      type: String,
    },
    codepen: {
      type: String,
    },
  },
  slots: ["default", "example", "template", "script", "style"],
  setup(props, { slots }) {
    const { theme } = useData<{ mobileActieve: boolean }>();

    return () => (
      <div class="card">
        <div class="text">{slots.default?.()}</div>
        {slots.example && (
          <div class={["example", { mobile: theme.value.mobileActieve }]}>
            {slots.example?.()}
          </div>
        )}

        {(slots.template || slots.script || slots.style) && (
          <div class="slotcode">
            <Codex
              codesandbox={props.codesandbox}
              codepen={props.codepen}
              v-slots={slots}
            ></Codex>
          </div>
        )}
      </div>
    );
  },
});
export default Card;
