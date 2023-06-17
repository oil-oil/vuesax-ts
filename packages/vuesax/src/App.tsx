import { defineComponent } from "vue";

import { VsCard, VsCardGroup, VsButton } from "./components";

export default defineComponent({
  setup() {
    const i = ["1", "2", "3", "4", "5", "6"];
    return () => (
      <VsCardGroup>
        {i.map((item) => (
          <VsCard
            type={item}
            v-slots={{
              title: () => <h3>pot with a plant</h3>,
              img: () => <img src={`/foto${item}.png`} />,
              text: () => (
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              ),
              interactions: () => (
                <>
                  <VsButton danger icon>
                    <i class="bx bx-heart"></i>
                  </VsButton>
                  <VsButton class="btn-chat" shadow primary>
                    <i class="bx bx-chat"></i>
                    <span class="span">54</span>
                  </VsButton>
                </>
              ),
            }}
          ></VsCard>
        ))}
      </VsCardGroup>
    );
  },
});
