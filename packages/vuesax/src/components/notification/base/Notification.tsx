import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  Transition,
  watch,
} from "vue";

import { BaseProps } from "@/hooks/useBase";
import VsIconsClose from "@/icons/Close";
import { setColor } from "@/utils";

import "./style.scss";

const Notification = defineComponent({
  name: "VsNotification",
  props: {
    ...BaseProps,
    index: {
      type: Number,
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
    // icon: {
    //   type: Boolean,
    //   default: false,
    // },
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
      type: Boolean,
      default: false,
    },
    progressAuto: {
      type: Boolean,
      default: true,
    },
    progress: {
      type: Number,
      default: null,
    },
    duration: {
      type: Number,
      default: 4000,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
    classNotification: {
      type: String,
      default: null,
    },
  },
  emits: ["onClick", "clickClose", "onDestroy"],
  slots: ["default", "content"],
  setup(props, { slots, emit }) {
    const elRef = ref<HTMLElement>();
    const innerIsVisible = ref(false);
    const innerProgress = ref(0);
    let intervalProgress: NodeJS.Timer;

    watch(
      () => props.isVisible,
      () => {
        innerIsVisible.value = props.isVisible;
        if (elRef.value) {
          setColor("color", props.color, elRef.value);
          setColor("border", props.color, elRef.value);
        }
      }
    );

    onMounted(() => {
      innerIsVisible.value = props.isVisible;
      innerProgress.value = props.progress;
      if (elRef.value) {
        setColor("color", props.color, elRef.value);
        setColor("border", props.color, elRef.value);
      }
      if (props.progressAuto && props.progress) {
        intervalProgress = setInterval(() => {
          innerProgress.value += 1;
        }, props.duration / 100);
      } else if (props.progress && !props.progressAuto) {
        setTimeout(() => {
          innerIsVisible.value = false;
        }, props.progress);
      }
    });
    onUnmounted(() => {
      clearInterval(intervalProgress);
    });

    const handleClickClose = () => {
      innerIsVisible.value = false;
      emit("clickClose", props.index);
    };

    const beforeEnter = () => {
      if (elRef.value) {
        elRef.value.style.maxHeight = `0px`;
        elRef.value.style.padding = `0px 20px`;
      }
    };

    const enter = (el: Element, done: () => void) => {
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

    const leave = (el: Element, done: () => void) => {
      if (elRef.value) {
        // const parent = elRef.value.parentNode;
        setTimeout(() => {
          done();
          // if (parent?.childNodes.length === 1) {
          //   document.body.removeChild(parent);
          // }
          // parent?.removeChild(elRef.value!);
          // this.$destroy();
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
              { "vs-notification--color": props.color },
              { "vs-notification--border": props.border },
              { "vs-notification--icon": slots.icon },
              { "vs-notification--onClick": props.isCursor },
              //   { "vs-notification--onClickClose": props.onClickClose },
              { "vs-notification--flat": props.flat },
              { "vs-notification--sticky": props.sticky },
              { "vs-notification--square": props.square },
              { "vs-notification--width-all": props.width === "100%" },
              { "vs-notification--width-auto": props.width === "auto" },
              { "vs-notification--loading": props.loading },
              { "vs-notification--notPadding": props.noPadding },
              { "vs-notification--primary": props.primary },
              { "vs-notification--success": props.success },
              { "vs-notification--warn": props.warn },
              { "vs-notification--dark": props.dark },
              { "vs-notification--danger": props.danger },
            ]}
            onClick={() => {
              emit("onClick");
              if (props.clickClose) {
                innerIsVisible.value = false;
                emit("clickClose");
              }
            }}
            ref={elRef}
          >
            {!props.loading && slots.icon && icon()}
            {!props.loading && content()}
            {props.buttonClose && closeBtn()}
            {props.loading && loading()}
            {props.progress && progress()}
          </div>
        )}
      </Transition>
    );
  },
});
export default Notification;
export type NotificationProps = InstanceType<typeof Notification>["$props"];