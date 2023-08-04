import {
  defineComponent,
  nextTick,
  ref,
  watch,
  onMounted,
  Transition,
  HTMLAttributes,
} from "vue";

import { CompWithAttr } from "@/types/utils";

const SidebarGroup = defineComponent({
  name: "SideBarGroup",
  props: {
    open: {
      type: Boolean,
    },
  },
  slots: ["default", "header", "content"],
  setup(props, { slots }) {
    const openState = ref(false);
    const content = ref<HTMLElement>();
    const rootRef = ref<HTMLElement>();
    watch(
      () => props.open,
      (val: boolean) => {
        openState.value = !!val;
      },
    );
    watch(
      () => openState,
      () => {
        nextTick(() => {
          if (content.value) {
            const { scrollHeight } = content.value;
            if (props.open) {
              openState.value = props.open;
              content.value.style.height = `${scrollHeight - 1}px`;
            } else {
              openState.value = props.open;
              content.value.style.height = `0px`;
            }
          }
        });
      },
      { immediate: true },
    );

    const onBeforeEnter = (Element: Element) => {
      const el = Element as HTMLElement;
      el.style.height = "0";
    };
    const onEnter = (Element: Element, done: () => void) => {
      const el = Element as HTMLElement;
      const { scrollHeight } = el;
      el.style.height = `${scrollHeight - 1}px`;
      done();
    };
    const onLeave = (Element: Element) => {
      const el = Element as HTMLElement;
      el.style.minHeight = "0px";
      el.style.height = "0px";
    };

    onMounted(() => {
      if (rootRef.value?.querySelector(".active") || props.open) {
        openState.value = true;
      }
    });

    return () => (
      <div
        class={["vs-sidebar__group", { open: openState.value }]}
        ref={rootRef}
      >
        <div
          class="vs-sidebar__group__header"
          onClick={() => {
            openState.value = !openState.value;
          }}
        >
          {slots.header?.()}
        </div>
        <Transition
          onBeforeEnter={onBeforeEnter}
          onEnter={onEnter}
          onLeave={onLeave}
        >
          {openState.value && (
            <div class="vs-sidebar__group__content" ref={content}>
              {slots.default?.()}
            </div>
          )}
        </Transition>
      </div>
    );
  },
});

export default SidebarGroup as CompWithAttr<
  typeof SidebarGroup,
  HTMLAttributes
>;

export type SidebarGroupProps = InstanceType<typeof SidebarGroup>["$props"];
