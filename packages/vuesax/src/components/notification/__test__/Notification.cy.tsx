import { ref } from "vue";

import { VsNotification } from "@/components";

describe("Notification", () => {
  it("test Notification basic render", () => {
    cy.mount(
      <VsNotification
        title="Documentation Vuesax 4.0+"
        text="These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x"
      ></VsNotification>,
    );
    cy.get(".vs-notification ").should("be.visible");
  });

  it("test notification different type", () => {
    const typeArray = ["square", "border", "flat", "square"];

    typeArray.forEach((type) => {
      cy.mount(
        <VsNotification
          title="Documentation Vuesax 4.0+"
          text="These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x"
          {...{ [type]: true }}
        />,
      );
      cy.get(`.vs-notification--${type}`).should("be.visible");
    });
  });

  it("test notification Loading", () => {
    const loading = ref(true);
    cy.mount(<VsNotification loading={loading} />);
    cy.get(".vs-notification--loading").should("be.visible");
  });

  it("test notification progress", () => {
    cy.mount(
      <VsNotification
        progressAuto
        title="Documentation Vuesax 4.0+"
        text="These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax 3.x"
      />,
    );
    cy.get(".vs-notification__progress").should("be.visible");
  });
});
