import {
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  Ref,
  ref,
  Transition,
  watch,
} from "vue";

import VsIconsClose from "@/icons/Close";
import { Color } from "@/types/utils";
import { setColor,getColor } from "@/utils";

import "./style.scss";

const Notification = defineComponent({
  name: "VsNotification",
  props: {
    color: {
      type: String as PropType<Color>,
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    border: {
      type: Boolean,
      default: false,
    },
    clickClose: {
      type: Boolean,
      default: false,
    },
    isCursor: {
      type: Boolean,
      default: false,
    },
    buttonClose: {
      type: Boolean,
      default: true,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    sticky: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: null,
    },
    loading: {
      type: Object as PropType<Ref<boolean>>,
    },
    progressAuto: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 4000,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["onClick", "clickClose", "onDestroy"],
  slots: ["default", "content","icon"],
  setup(props, { slots, emit }) {
    const elRef = ref<HTMLElement>();
    const innerIsVisible = ref(false);
    const innerProgress = ref(0);
    let intervalProgress: NodeJS.Timer;

    watch(
      () => props.isVisible,
      () => {
        innerIsVisible.value = props.isVisible;
        if (elRef.value && props.color) {
          setColor("color", props.color, elRef.value);
          setColor("border", props.color, elRef.value);
        }
      }
    );

    onMounted(() => {
      innerIsVisible.value = props.isVisible;
      if (elRef.value && props.color) {
        setColor("color", props.color, elRef.value);
        setColor("border", props.color, elRef.value);
      }
      if (props.progressAuto) {
        intervalProgress = setInterval(() => {
          innerProgress.value += 1;
          if (innerProgress.value >= 100) {
            clearInterval(intervalProgress);
            innerIsVisible.value = false;
            emit("clickClose");
          }
        }, props.duration / 100);
      }
    });

    onUnmounted(() => {
      clearInterval(intervalProgress);
    });

    const handleClickClose = () => {
      innerIsVisible.value = false;
      emit("clickClose");
    };

    const beforeEnter = () => {
      if (elRef.value) {
        elRef.value.style.maxHeight = `0px`;
        elRef.value.style.padding = `0px 20px`;
      }
    };

    const enter = (_: Element, done: () => void) => {
      if (elRef.value) {
        const h = elRef.value.scrollHeight;
        elRef.value.style.maxHeight = `${h + 40}px`;
        if (window.innerWidth < 600) {
          elRef.value.style.padding = `15px`;
        } else {
          elRef.value.style.padding = `20px`;
        }
        done();
      }
    };

    const leave = (_: Element, done: () => void) => {
      if (elRef.value) {
        setTimeout(() => {
          done();
          emit("onDestroy");
        }, 250);
      }
    };

    const title = () => (
      <header class="vs-notification__content__header">
        <h4>{props.title}</h4>
      </header>
    );

    const text = () => (
      <div class="vs-notification__content__text">
        <p>{props.text}</p>
      </div>
    );

    const content = () => (
      <div class="vs-notification__content">
        {props.title && title()}
        {props.text && text()}
        {slots.content?.()}
      </div>
    );

    const icon = () => (
      <div class="vs-notification__icon">{slots.icon?.()}</div>
    );

    const closeBtn = () => (
      <button class="vs-notification__close" onClick={handleClickClose}>
        <VsIconsClose hover="less"></VsIconsClose>
      </button>
    );

    const loading = () => <div class="vs-notification__loading"></div>;

    const progress = () => (
      <div
        class="vs-notification__progress"
        style={{ width: `${innerProgress.value}%` }}
      ></div>
    );

    return () => (
      <Transition
        name="notification"
        onBeforeEnter={beforeEnter}
        onEnter={enter}
        onLeave={leave}
      >
        {innerIsVisible.value && (
          <div
            class={[
              "vs-notification",
              {
                "vs-notification--color": props.color,
                "vs-notification--border": props.border,
                "vs-notification--icon": slots.icon,
                "vs-notification--onClick": props.isCursor,
                "vs-notification--flat": props.flat,
                "vs-notification--sticky": props.sticky,
                "vs-notification--square": props.square,
                "vs-notification--width-all": props.width === "100%",
                "vs-notification--width-auto": props.width === "auto",
                "vs-notification--loading": props.loading?.value,
                "vs-notification--notPadding": props.noPadding,
              },
            ]}
            style={{ "--vs-color": props.color ? getColor(props.color) : "" ,width:props.width === "100%" || props.width === "100vw" || props.width === "auto"?"":props.width,maxWidth:props.width === "100%"|| props.width === "100vw" || props.width === "auto"?"":props.width}}
            onClick={() => {
              emit("onClick");
              if (props.clickClose) {
                innerIsVisible.value = false;
                emit("clickClose");
              }
            }}
            ref={elRef}
          >
            {!props.loading?.value && slots.icon && icon()}
            {!props.loading?.value && content()}
            {props.buttonClose && closeBtn()}
            {props.loading?.value && loading()}
            {props.progressAuto && progress()}
          </div>
        )}
      </Transition>
    );
  },
});

export default Notification;
export type NotificationProps = InstanceType<typeof Notification>["$props"];
