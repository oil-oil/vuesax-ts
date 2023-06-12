import { defineComponent } from "vue";

import NavBarLinks from "./NavBarLinks.tsx";
import NavBarTitle from "./NavBarTitle.tsx";
import "./style/style.scss";

const NavBar = defineComponent({
  name: "NavBar",
  slots: ["nav-bar-title-before"],
  setup() {
    return () => (
      <div class="Nav">
        {/* <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/> */}
        <NavBarTitle class="NavBarTitle" />
        <NavBarLinks />
      </div>
    );
  },
});
export default NavBar;
