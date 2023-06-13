import { ButtonHTMLAttributes, defineComponent, inject, Ref } from "vue";
import { useRouter } from "vue-router";

import { BaseProps } from "@/hooks/useBase";
import VsIconsArrow from "@/icons/Arrow";

import "./style.scss";

const SideBarItem = defineComponent({
  name: "SideBarItem",
  props: {
    ...BaseProps,
    to: {
      type: String,
    },
    href: {
      type: String,
    },
    target: {
      type: String,
      default: "_blank",
    },
    value: {
      type: String,
    },
    id: {
      type: String,
    },
    arrow: {
      type: Boolean,
    },
  },
  slots: ["default", "icon", "arrow"],
  emits: ["click"],
  setup(props, { slots, attrs, emit }) {
    const router = useRouter();
    const { active, updateActive } = inject<{
      active: Ref<string> | null;
      updateActive: (id: string) => void;
    }>("activeValue", { active: null, updateActive: () => {} });

    const onClick = () => {
      if (props.id) {
        updateActive?.(props.id);
      }
      if (props.to) {
        router.push(props.to);
      } else if (props.href) {
        window.open(props.href, props.target);
      }
      emit("click");
    };

    return () => (
      <button
        class={[
          "vs-sidebar__item",
          { active: active?.value === props.id, hasIcon: !!slots.icon },
        ]}
        onClick={onClick}
        {...attrs}
      >
        {slots.icon && <div class="vs-sidebar__item__icon">{slots.icon()}</div>}
        <div class="vs-sidebar__item__text">{slots.default?.()}</div>
        <div class="vs-sidebar__item__text-tooltip">{slots.default?.()}</div>
        {(slots.arrow || props.arrow) && (
          <div class="vs-sidebar__item__arrow">
            {(slots.arrow && <div>{slots.arrow?.()}</div>) || <VsIconsArrow />}
          </div>
        )}
      </button>
    );
  },
});

export default SideBarItem as CompWithAttr<
  typeof SideBarItem,
  ButtonHTMLAttributes
>;

export type SideBarItemProps = InstanceType<typeof SideBarItem>["$props"];
