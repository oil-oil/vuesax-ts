import { useData } from "vitepress";
import { defineComponent, ref, provide } from "vue";

import Config from "./components/Config/index.tsx";
import VSContent from "./components/Content/index.tsx";
import NavBar from "./components/Navbar/index.tsx";
import SideBar from "./components/Sidebar/index";
import RightSidebar from "./components/Sidebar/RightSidebar.tsx";

const Layout = defineComponent({
  name: "Layout",
  setup() {
    const { page, frontmatter } = useData();
    const isSidebarOpen = ref(true);
    const toggleSidebar = () => {
      isSidebarOpen.value = !isSidebarOpen.value;
    };

    provide("sidebarController", { isSidebarOpen, toggleSidebar });
    const data = useData();
    console.log(data);
    return () => (
      <div class="layout">
        {!page.value.isNotFound && <NavBar />}
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
        <VSContent />
      </div>
    );
  },
});
export default Layout;
