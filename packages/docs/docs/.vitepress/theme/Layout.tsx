import { useData } from "vitepress";
import { defineComponent, ref, provide } from "vue";

import Config from "./components/Config/index.tsx";
import VSContent from "./components/Content/index.tsx";
import NavBar from "./components/NavBar/index.tsx";
import SideBar from "./components/SideBar/index";

const Layout = defineComponent({
  name: "Layout",
  setup() {
    const { page, frontmatter } = useData();
    const data = useData();
    console.log(data);
    const isSidebarOpen = ref(true);
    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    provide("sidebarController", { isSidebarOpen, toggleSidebar });
    return () => (
      <div class="Layout">
        {!page.value.isNotFound && <NavBar class="navbar" />}
        {!page.value.isNotFound && !(frontmatter.value.layout === "home") && (
          <SideBar />
        )}
        {!page.value.isNotFound && (
          <Config
            class={{
              edge: !isSidebarOpen.value,
              "not-docs":
                frontmatter.value.layout === "home" || page.value.isNotFound,
            }}
          ></Config>
        )}
        <VSContent class="content" />
      </div>
    );
  },
});
export default Layout;
