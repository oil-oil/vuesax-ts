import {
  PropType,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  ref,
} from "vue";

import useThrottle from "@/hooks/useThrottle";
import { Color } from "@/types/utils";
import { getColor } from "@/utils";

import "./style.scss";

const Navbar = defineComponent({
  name: "VsNavbar",
  props: {
    color: {
      type: String as PropType<Color>,
    },
    modelValue: {
      type: String,
      default: "",
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    shadowScroll: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    hideScroll: {
      type: Boolean,
      default: false,
    },
    textWhite: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    paddingScroll: {
      type: Boolean,
      default: false,
    },
    notLine: {
      type: Boolean,
      default: false,
    },
    leftCollapsed: {
      type: Boolean,
      default: false,
    },
    centerCollapsed: {
      type: Boolean,
      default: false,
    },
    rightCollapsed: {
      type: Boolean,
      default: false,
    },
    targetScroll: {
      type: String,
    },
  },
  slots: ["default", "left", "right"],
  setup(props, { slots, emit }) {
    const leftLine = ref(0);
    const widthLine = ref(0);
    const scrollTop = ref(0);
    const collapsedWidth = ref(0);
    const hidden = ref(false);
    const shadowActive = ref(false);
    const paddingScrollActive = ref(false);
    const lineNotTransition = ref(false);
    const collapsedForced = ref(false);

    const elRef = ref<HTMLElement>();
    const leftRef = ref<HTMLElement>();
    const centerRef = ref<HTMLElement>();
    const rightRef = ref<HTMLElement>();

    const setModel = (id: string) => {
      emit("update:modelValue", id);
    };

    const setLeftLine = (left: number, transition = true) => {
      if (!transition) {
        lineNotTransition.value = true;
      } else {
        lineNotTransition.value = false;
      }
      nextTick(() => {
        leftLine.value = left;
      });
    };

    const setWidthLine = (width: number) => {
      nextTick(() => {
        widthLine.value = width;
      });
    };

    provide("provider", {
      setLeftLine,
      setWidthLine,
      setModel,
    });

    const onScroll = useThrottle(() => {
      const scrollT = props.targetScroll
        ? document.querySelector(props.targetScroll)?.scrollTop
        : window.scrollY;
      if (props.hideScroll) {
        if (scrollT && Math.sign(scrollT - scrollTop.value) === 1) {
          hidden.value = true;
        } else {
          hidden.value = false;
        }
      }

      if (props.shadowScroll) {
        if (scrollT && scrollT > 0) {
          shadowActive.value = true;
        } else {
          shadowActive.value = false;
        }
      }

      if (props.paddingScroll) {
        if (scrollT && scrollT > 0) {
          paddingScrollActive.value = false;
        } else {
          paddingScrollActive.value = true;
        }
      }

      if (scrollT) scrollTop.value = scrollT;
    }, 200);

    const handleScroll = () => {
      if (props.hideScroll || props.shadowScroll || props.paddingScroll) {
        window.addEventListener("scroll", onScroll);
      }
    };

    const handleResize = () => {
      const active = elRef.value?.querySelector(
        ".vs-navbar__item.active",
      ) as HTMLElement;
      if (active) {
        setLeftLine(active.offsetLeft, false);
      } else {
        widthLine.value = 0;
      }

      if (
        props.leftCollapsed ||
        props.centerCollapsed ||
        props.rightCollapsed
      ) {
        if (elRef.value && elRef.value.offsetWidth < collapsedWidth.value) {
          collapsedForced.value = true;
        }
      }

      if (collapsedForced.value) {
        emit("collapsed", true);
      } else {
        emit("collapsed", false);
      }

      if (elRef.value && elRef.value.offsetWidth < collapsedWidth.value) {
        emit("collapsed", true);
      } else {
        emit("collapsed", false);
        collapsedForced.value = false;
      }
    };

    onMounted(() => {
      setTimeout(() => {
        if (leftRef.value && centerRef.value && rightRef.value) {
          collapsedWidth.value =
            leftRef.value.offsetWidth +
            centerRef.value.offsetWidth +
            rightRef.value.offsetWidth +
            150;
          if (elRef.value && elRef.value.offsetWidth < collapsedWidth.value) {
            collapsedForced.value = true;
            emit("collapsed", true);
            widthLine.value = 0;
            handleResize();
          }
        }
      }, 150);

      handleScroll();
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
    });

    return () => (
      <div
        class={[
          "vs-navbar-content",
          {
            fixed: props.fixed,
            shadow: props.shadow,
            hidden: hidden.value,
            shadowActive: shadowActive.value,
            textWhite: props.textWhite,
            paddingScroll: paddingScrollActive.value,
            vsNavbarSquare: props.square,
            "vs-component--is-color": props.color,
          },
        ]}
        style={{ "--vs-color": props.color ? getColor(props.color) : "" }}
        ref={elRef}
      >
        <div class="vs-navbar">
          {(props.leftCollapsed ? !collapsedForced.value : true) && (
            <div class="vs-navbar__left" ref={leftRef}>
              {slots.left?.()}
            </div>
          )}
          {(props.centerCollapsed ? !collapsedForced.value : true) && (
            <div class="vs-navbar__center" ref={centerRef}>
              {slots.default?.()}
            </div>
          )}
          {(props.rightCollapsed ? !collapsedForced.value : true) && (
            <div class="vs-navbar__right" ref={rightRef}>
              {slots.right?.()}
            </div>
          )}
        </div>
        {!props.notLine && (
          <div
            class={[
              "vs-navbar__line",
              { notTransition: lineNotTransition.value },
            ]}
            style={{
              left: `${leftLine.value}px`,
              width: `${widthLine.value}px`,
            }}
          ></div>
        )}
      </div>
    );
  },
});

export default Navbar;

export type NavbarProps = InstanceType<typeof Navbar>["$props"];
