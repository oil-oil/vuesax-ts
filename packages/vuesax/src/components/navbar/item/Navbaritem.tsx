import { defineComponent, inject, nextTick, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";

import { NavbarProvider } from "../types";
import { BaseProps } from "@/hooks/useBase";
import "./style.scss";

const NavbarItem = defineComponent({
  name: "VsNavbarItem",
  props: {
    ...BaseProps,
    active: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
    },
    id: {
      type: String,
    },
    href: {
      type: String,
    },
    target: {
      type: String,
      default: "_blank",
    },
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const router = useRouter();
    const elRef = ref<HTMLElement>();

    const provider = inject<NavbarProvider>("provider");
    const setLeftLineGroup = inject<() => void>("setLeftLineGroup");

    const handleLine = () => {
      nextTick(() => {
        if (elRef.value) {
          if (props.active) {
            const left = elRef.value.offsetLeft;
            provider?.setLeftLine(left);
            const width = elRef.value.scrollWidth;
            provider?.setWidthLine(width);
          }
        }
      });
    };

    watch(
      () => props.active,
      () => {
        if (props.active) {
          if (setLeftLineGroup) {
            setLeftLineGroup();
          } else {
            handleLine();
          }
        }
      }
    );

    const handleClick = () => {
      if (props.to) {
        router.push(props.to);
      } else if (props.href) {
        window.open(props.href, props.target);
      }
    };

    const handleActive = () => {
      if (props.id) {
        provider?.setModel(props.id);
      }
    };

    onMounted(() => {
      if (props.active && elRef.value) {
        if (setLeftLineGroup) {
          setLeftLineGroup();
        } else {
          const left = elRef.value.offsetLeft;
          provider?.setLeftLine(left);
          const width = elRef.value.scrollWidth;
          provider?.setWidthLine(width);
        }
      }
    });

    return () => (
      <button
        class={["vs-navbar__item", { active: props.active }]}
        onClick={(evt: MouseEvent) => {
          emit("click", evt);

          handleClick();
          handleActive();

          evt.preventDefault();
          evt.stopPropagation();
        }}
        ref={elRef}
      >
        {slots.default?.()}
      </button>
    );
  },
});

export default NavbarItem;

export type NavbarItemProps = InstanceType<typeof NavbarItem>["$props"];
