import { useRoute } from "vitepress";
import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue";
import "./style/RightSidebar.scss";

const RightSidebar = defineComponent({
  name: "RightSidebar",
  setup() {
    const route = useRoute();
    const throttle = (func: () => void, wait: number) => {
      let timeout: NodeJS.Timeout | null;
      return () => {
        if (!timeout) {
          timeout = setTimeout(() => {
            timeout = null;
            // func.apply(context, args);
            func();
          }, wait);
        }
      };
    };

    const elements = ref<HTMLElement[]>([]);
    const active = ref(0);

    watch(
      () => route.path,
      () => {
        elements.value = Array.from(document.getElementsByTagName("h2"));
      }
    );

    const scrollEvent = throttle(() => {
      const titles = Array.from(document.getElementsByTagName("h2"));
      titles.forEach((title, index) => {
        const { top } = title.getBoundingClientRect();
        if (top < 300 && top > 100) {
          active.value = index;
        }
      });
    }, 100);

    onMounted(() => {
      elements.value = Array.from(document.getElementsByTagName("h2"));
      window.addEventListener("scroll", scrollEvent);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollEvent);
    });
    return () => (
      <div class={["right-sidebar"]}>
        {elements.value.map((item, index) => (
          <a
            href={`#${item.id}`}
            class={[
              "right-link",
              {
                active: index === active.value,
              },
            ]}
            aria-label={`Permalink to "${item.id}"`}
          >
            {item.innerText}
          </a>
        ))}
      </div>
    );
  },
});
export default RightSidebar;
