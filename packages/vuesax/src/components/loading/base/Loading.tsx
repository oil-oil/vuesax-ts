import {
  PropType,
  Transition,
  defineComponent,
  nextTick,
  onMounted,
  ref,
  watch,
} from "vue";
import "./style.scss";

import { Color } from "@/types/utils";
import { setColor, setVar } from "@/utils";

type LoadingType =
  | "waves"
  | "corners"
  | "points"
  | "square"
  | "border"
  | "gradient"
  | "rectangle"
  | "circles"
  | "square-rotate"
  | "scale";

const Loading = defineComponent({
  name: "VsLoading",
  props: {
    color: {
      type: String as PropType<Color>,
      default: null,
    },
    background: {
      type: String as PropType<Color>,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    type: {
      type: String as PropType<LoadingType>,
      default: null,
    },
    opacity: {
      type: String,
      default: null,
    },
    percent: {
      type: String,
      default: null,
    },
    progress: {
      type: Number,
      default: null,
    },
    scale: {
      type: String,
      default: null,
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["update:isVisible", "update:text"],
  setup(props) {
    const rootRef = ref<HTMLElement>();

    const initStyle = () => {
      if (rootRef.value && props.color) {
        setColor("color", props.color, rootRef.value, true);
        setColor("background", props.background, rootRef.value, true);
        if (props.opacity) {
          setVar("opacity", props.opacity, rootRef.value);
        }
      }
    };

    watch(
      () => props.color,
      () => {
        initStyle();
      },
    );

    watch(
      () => props.isVisible,
      () => {
        if (props.isVisible) {
          nextTick(() => {
            initStyle();
          });
        }
      },
    );

    onMounted(() => {
      initStyle();
    });

    return () => (
      <Transition name="loading">
        {props.isVisible && (
          <div
            ref={rootRef}
            class={[
              "vs-loading",
              `vs-loading--${props.type || "default"}`,
              { "vs-loading--background": !!props.background },
            ]}
          >
            <div
              class="vs-loading__load"
              style={{ transform: `scale(${props.scale})` }}
            >
              <div class="vs-loading__load__animation">
                {props.percent && (
                  <div class="vs-loading__load__percent">{props.percent}</div>
                )}
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    class={`vs-loading__load__animation__${item}`}
                  />
                ))}
              </div>
              {props.text && (
                <div class="vs-loading__load__text">{props.text}</div>
              )}
            </div>

            {props.progress && (
              <div class="vs-loading__progress">
                <div
                  class="vs-loading__progress__bar"
                  style={{ width: `${props.progress}%` }}
                />
              </div>
            )}
          </div>
        )}
      </Transition>
    );
  },
});

export default Loading;

export type LoadingProps = InstanceType<typeof Loading>["$props"];
