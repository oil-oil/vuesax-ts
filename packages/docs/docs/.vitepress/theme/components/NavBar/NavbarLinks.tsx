import { useData, useRoute } from "vitepress";
import { defineComponent, ref } from "vue";
import "./style/NavbarLinks.scss";

type NavItem = {
  text: string;
  link: string;
};
const NavBarLinks = defineComponent({
  name: "NavBarLinks",
  setup() {
    const { theme } = useData<{
      nav: (NavItem & {
        items?: NavItem[];
        parts?: {
          title: string;
          part: NavItem[];
        }[];
      })[];
    }>();
    const downTrigger = ref(100);
    const route = useRoute();
    const list = () =>
      theme.value.nav.map((item, index) => {
        if (item.items) {
          return (
            <div class="nav-items">
              <a
                onMouseenter={() => {
                  downTrigger.value = index;
                }}
                onMouseleave={() => {
                  downTrigger.value = 100;
                }}
                class={[
                  "nav-link",
                  {
                    selected:
                      route.data.relativePath
                        .split("/")[0]
                        .charAt(0)
                        .toUpperCase() +
                        route.data.relativePath.split("/")[0].slice(1) ===
                      item.text,
                  },
                ]}
                href={item.link}
              >
                {item.text}
                <i
                  class={[
                    "bx bx-chevron-down",
                    { opened: downTrigger.value === index },
                  ]}
                ></i>
              </a>
              <div
                onMouseenter={() => {
                  downTrigger.value = index;
                }}
                onMouseleave={() => {
                  downTrigger.value = 100;
                }}
                class={[
                  "dropdown",
                  { "menu-open": downTrigger.value === index },
                ]}
              >
                {item.items.map((link) => (
                  <a
                    class={["item-link", { actived: route.path === link.link }]}
                    href={link.link}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          );
        }
        if (item.parts) {
          return (
            <div class="nav-items">
              <a
                onMouseenter={() => {
                  downTrigger.value = index;
                }}
                onMouseleave={() => {
                  downTrigger.value = 100;
                }}
                class={[
                  "nav-link",
                  {
                    selected:
                      route.data.relativePath
                        .split("/")[0]
                        .charAt(0)
                        .toUpperCase() +
                        route.data.relativePath.split("/")[0].slice(1) ===
                      item.text,
                  },
                ]}
                href={item.link}
              >
                {item.text}
                <i
                  class={[
                    "bx bx-chevron-down",
                    { opened: downTrigger.value === index },
                  ]}
                ></i>
              </a>
              <div
                onMouseenter={() => {
                  downTrigger.value = index;
                }}
                onMouseleave={() => {
                  downTrigger.value = 100;
                }}
                class={[
                  "dropdown",
                  { "menu-open": downTrigger.value === index },
                ]}
              >
                {item.parts.map(({ part, title }) => (
                  <>
                    <h4 class="item-title">{title}</h4>
                    {part.map((value) => (
                      <a
                        class={[
                          "item-link",
                          { actived: route.path === value.link },
                        ]}
                        href={value.link}
                      >
                        {value.text}
                      </a>
                    ))}
                  </>
                ))}
              </div>
            </div>
          );
        }
        return (
          <div class="nav-item">
            <a class="nav-link" href={item.link}>
              {item.text}
            </a>
          </div>
        );
      });
    return () => <div class="nav-links-content">{list()}</div>;
  },
});
export default NavBarLinks;
