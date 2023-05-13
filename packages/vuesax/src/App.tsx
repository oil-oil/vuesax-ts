import { defineComponent } from "vue";

import { VsButton, VsButtonGroup, VsAlert } from "./components";

export default defineComponent({
  setup() {
    return () => (
      <>
        <div style="display: flex">
          <VsButtonGroup>
            <VsButton active>Active</VsButton>
            <VsButton disabled>Disabled</VsButton>
            <VsButton>Default</VsButton>
          </VsButtonGroup>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {(["xs", "sm", "md", "lg", "xl"] as const).map((item) => (
            <VsButton size={item} key={item}>
              {item}
            </VsButton>
          ))}
        </div>
        <div>
          <VsButton square>Square</VsButton>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <VsButton success flat>
            Success
          </VsButton>
          <VsButton warn flat>
            Warn
          </VsButton>
          <VsButton danger flat>
            Danger
          </VsButton>
          <VsButton color="#7d33ff" relief flat>
            Danger
          </VsButton>
          <VsButton color="rgb(59,222,200)" gradient>
            Danger
          </VsButton>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <VsButton loading>Loading</VsButton>
        </div>
        <div>
          <VsAlert>123</VsAlert>

          <VsAlert
            shadow
            v-slots={{
              title: () => <div>Vuesax Framework</div>,
            }}
          >
            Vuesax (pronounced / vjusacksː /, as view sacks) is a{" "}
            <b>UI components framework</b>
            created with <a href="https://vuejs.org/">Vuejs</a> to make projects
            easily and with a Unique and pleasant style, Vuesax is created from
            scratch and designed for all types of developed from the frontend
            lover to the backend that wants to easily create your visual
            approach to the end user
          </VsAlert>
        </div>
      </>
    );
  },
});
