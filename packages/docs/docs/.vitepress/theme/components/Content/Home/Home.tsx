import { defineComponent } from "vue";

import HomePage1 from "./HomePage.tsx";

const Home = defineComponent({
  name: "Home",
  setup() {
    return () => (
      <div class="home" style={{ width: "100vw" }}>
        <HomePage1 />
      </div>
    );
  },
});

export default Home;
