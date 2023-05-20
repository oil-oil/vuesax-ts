import { defineComponent, onMounted, ref, watch, provide, toRef } from "vue";

import "./style.scss";
import useBaseProps, { BaseProps } from "@/hooks/useBase";
import { setColor } from "@/utils/index";

const SideBar = defineComponent({
  name: "VsSideBar",
  props: {
    ...BaseProps,
    modelValue: {
      type: String,
    },
    reduce: {
      type: Boolean,
      default: false,
    },
    hoverExpand: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
    notLineActive: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    textWhite: {
      type: Boolean,
      default: false,
    },
    notShadow: {
      type: Boolean,
      default: false,
    },
    relative: {
      type: Boolean,
      default: false,
    },
    absolute: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: "background",
    },
  },
  setup(props, { slots, emit }) {
    const rootRef = ref<HTMLElement | null>(null);
    const { isColor } = useBaseProps(props);
    let staticWidth = 260;
    const reduceInternal = ref(false);
    const sideBarClass = [
      "vs-sidebar-content",
      { reduce: reduceInternal.value },
      { open: props.open },
      { notLineActive: props.notLineActive },
      { square: props.square },
      { notShadow: props.notShadow },
      { textWhite: props.textWhite },
      { relative: props.relative },
      { absolute: props.absolute },
      { right: props.right },
      // colors
      { "vs-component--primary": !!props.primary },
      { "vs-component--danger": !!props.danger },
      { "vs-component--warn": !!props.warn },
      { "vs-component--success": !!props.success },
      { "vs-component--dark": !!props.dark },
      { "vs-component--is-color": !!isColor },
    ];
    const clickCloseSidebar = (evt: any) => {
      if (!(evt.target as any).closest(".vs-sidebar-content")) {
        emit("update:open", false);
      }
    };

    watch(
      () => props.open,
      (val: boolean) => {
        if (val) {
          setTimeout(() => {
            window.addEventListener("click", clickCloseSidebar);
          }, 200);
        } else {
          window.removeEventListener("click", clickCloseSidebar);
        }
      }
    );

    watch(
      () => props.reduce,
      (val: boolean) => {
        reduceInternal.value = val;
        if (rootRef.value) {
          if (val) {
            rootRef.value.style.width = "50px";
          } else {
            rootRef.value.style.width = `${staticWidth}px`;
          }
        }
      }
    );

    watch(reduceInternal, (val: boolean) => {
      if (rootRef.value) {
        if (val) {
          rootRef.value.style.width = "50px";
        } else {
          rootRef.value.style.width = `${staticWidth}px`;
        }
      }
    });

    watch(
      () => props.background,
      () => {
        setColor("background", props.background, rootRef.value, true);
      }
    );

    // const handleClickItem = (id: string) => {
    //   emit("update:modelValue", id);
    // };
    // provide("handleClickItem", handleClickItem);
    const active = toRef(props, "modelValue");
    console.log(active);
    provide("activeValue", {
      active,
      updateActive: (id: string) => {
        emit("update:modelValue", id);
      },
    });

    const mouseEnterEvent = () => {
      if (props.hoverExpand) {
        reduceInternal.value = false;
      }
    };
    const mouseLeaveEvent = () => {
      if (props.hoverExpand) {
        reduceInternal.value = true;
      }
    };
    onMounted(() => {
      staticWidth = (rootRef.value as HTMLElement).offsetWidth;
      reduceInternal.value = props.reduce;

      if (props.background !== "background") {
        setColor("background", props.background, rootRef.value, true);
      }

      if (props.textWhite) {
        setColor("text", "#fff", rootRef.value, true);
      }
    });
    return () => (
      <div
        ref={rootRef}
        class={sideBarClass}
        onMouseenter={mouseEnterEvent}
        onMouseleave={mouseLeaveEvent}
      >
        {slots.logo && <div class={"vs-sidebar__logo"}>{slots.logo?.()}</div>}
        {slots.header && (
          <div class={"vs-sidebar__header"}>{slots.header?.()}</div>
        )}
        {<div class={"vs-sidebar"}>{slots.default?.()}</div>}
        {<div>{props.modelValue}</div>}
        {slots.footer && (
          <div class={"vs-sidebar__footer"}>{slots.footer?.()}</div>
        )}
      </div>
    );
  },
});

export default SideBar;

export type ButtonProps = InstanceType<typeof SideBar>["$props"];
