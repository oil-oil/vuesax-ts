import { defineComponent } from "vue";

import HomeContent from "./HomeContent/index.tsx";
import "./HomePage.scss";

const HomePage = defineComponent({
  name: "HomePage",
  setup() {
    return () => (
      <div class="page">
        <div class="title-part">
          <HomeContent></HomeContent>
        </div>
        <div class="features-part"></div>
      </div>
    );
  },
});
export default HomePage;
