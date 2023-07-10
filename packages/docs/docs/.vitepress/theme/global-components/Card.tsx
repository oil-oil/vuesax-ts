import { useData } from "vitepress";
import { defineComponent, DefineComponent } from "vue";

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
    subtitle: {
      type: String,
      default: "Default",
    },
  },
  slots: ["default"],
  setup(props, { slots }) {
    const { theme, page } = useData<{ mobileActive: boolean }>();
    const ExampleComponentsArr: [string, { default: DefineComponent }][] =
      Object.entries(
        (import.meta as any).glob("./template/**/*.vue", { eager: true })
      );
    return () => (
      <div class="card">
        <div class="text">{slots.default?.()}</div>
        <div class={["example", { mobile: theme.value.mobileActive }]}>
          <div class="center">
            {ExampleComponentsArr.map((arr) => {
              if (
                arr[0] ===
                `./template/${page.value.title}/${props.subtitle}.vue`
              ) {
                const Example = arr[1].default;
                return <Example />;
              }
              return "";
            })}
          </div>
        </div>
        <div class="slotcode">
          <Codex
            codesandbox={props.codesandbox}
            codepen={props.codepen}
            subtitle={props.subtitle}
          ></Codex>
        </div>
      </div>
    );
  },
});
export default Card;
