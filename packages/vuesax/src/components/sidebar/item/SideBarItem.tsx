import { PropType, defineComponent, ref, watch, inject, Ref } from "vue";
import { useRouter } from "vue-router";

import { BaseProps } from "@/hooks/useBase";
import VsIconsArrow from "@/icons/Arrow";

import "./style.scss";

const SideBarItem = defineComponent({
  name: "SideBarIiem",
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
  setup(props, { slots }) {
    const router = useRouter();
    const { active, updateActive } = inject<{
      active: Ref<string> | null;
      updateActive: (id: string) => void;
    }>("activeValue", { active: null, updateActive: () => {} });
    // const handleClickItem = inject<(id: string) => void>("handleClickItem");
    const sideBarItemClass = [
      "vs-sidebar__item",
      { active: active?.value === props.id, hasIcon: !!slots.icon },
    ];
    const handleClick = () => {
      if (props.to) {
        router.push(props.to);
      } else if (props.href) {
        window.open(props.href, props.target);
      }
    };
    const onClick = () => {
      if (props.id) {
        updateActive?.(props.id);
      }
      handleClick();
    };
    watch(active!, () => {
      console.log("gengx", active?.value, active?.value === props.id, props.id);
    });
    return () => (
      <button
        class={[
          "vs-sidebar__item",
          { active: active?.value === props.id, hasIcon: !!slots.icon },
        ]}
        onClick={onClick}
      >
        {slots.icon && <div class="vs-sidebar__item__icon">{slots.icon()}</div>}
        <div class="vs-sidebar__item__text">{slots.default?.()}</div>
        <div class="vs-sidebar__item__text-tooltip">{slots.default?.()}</div>
        {slots.arrow ||
          (props.arrow && (
            <div class="vs-sidebar__item__arrow">
              <VsIconsArrow />
            </div>
          ))}
      </button>
    );
  },
});

export default SideBarItem;

export type SideBarItemProps = InstanceType<typeof SideBarItem>["$props"];
