import { defineComponent } from "vue";

import NavbarLinks from "./NavbarLinks.tsx";
import NavbarTitle from "./NavbarTitle.tsx";
import "./style/style.scss";

const NavBar = defineComponent({
  name: "NavBar",
  slots: ["nav-bar-title-before"],
  setup() {
    return () => (
      <div class="Nav">
        {/* <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/> */}
        <NavbarTitle class="NavBarTitle" />
        <NavbarLinks />
      </div>
    );
  },
});
export default NavBar;
