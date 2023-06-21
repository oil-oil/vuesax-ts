import { defineComponent } from "vue";

import HomeFeatures from "./HomeFeatures.tsx";
import HomeTitle from "./HomeTitle.tsx";
import "./style.scss";

const HomePage = defineComponent({
  name: "HomePage",
  setup() {
    return () => (
      <div class="page">
        <div class="title-part">
          <HomeTitle></HomeTitle>
        </div>
        <div class="features-part">
          <HomeFeatures></HomeFeatures>
        </div>
      </div>
    );
  },
});
export default HomePage;
