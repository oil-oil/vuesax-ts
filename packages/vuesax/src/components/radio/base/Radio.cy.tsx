import { reactive } from "vue";

import { VsRadio } from "@/components";

describe("Radio", () => {
  const value = reactive({
    render: "0",
    click: "0",
  });
  it("test Radio basic render", () => {
    cy.mount(
      <VsRadio v-model={value.render} value="1">
        Option 1
      </VsRadio>
    );
    cy.get(".vs-radio-content").should("be.visible");
    cy.contains("Option 1").should("be.visible");
  });
  it("test Radio click", () => {
    const clickSpy = cy.spy().as("onClick");
    cy.mount(
      <VsRadio
        modelValue={value.click}
        onUpdate:modelValue={clickSpy}
        value="2"
      >
        Option 2
      </VsRadio>
    );
    cy.get(".vs-radio input").should("not.be.checked");
    cy.contains("Option 2").click();
    cy.get("@onClick").should("be.calledWith", "2");

    cy.get<VueWrapper>("@vue").then((wrapper) => {
      wrapper.setProps({ modelValue: "2" });
    });
    cy.get(".vs-radio input").should("be.checked");
  });
});
