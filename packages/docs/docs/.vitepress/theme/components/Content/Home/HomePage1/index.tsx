import { defineComponent } from "vue";

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
        <div class="features-part"></div>
      </div>
    );
  },
});
export default HomePage;
