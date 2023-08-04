import { VsModal } from "@/components";

describe("Modal", () => {
  it("test modal basic render", () => {
    cy.mount(
      <VsModal
        modelValue={true}
        v-slots={{ header: () => "header", footer: () => "footer" }}
      >
        content
      </VsModal>,
    );
    cy.contains(".vs-modal__header", "header").should("be.visible");
    cy.contains(".vs-modal__content", "content").should("be.visible");
    cy.contains(".vs-modal__footer", "footer").should("be.visible");
  });

  it("test modal with square shape", () => {
    cy.mount(
      <VsModal square modelValue={true}>
        content
      </VsModal>,
    );
    cy.get(".vs-modal.vs-modal--square")
      .should("be.visible")
      .should("have.css", "border-radius", "0px");
  });

  it("test modal open and close", () => {
    const onCloseClick = cy.spy().as("onCloseClick");

    cy.mount(
      <VsModal modelValue={false} onUpdate:modelValue={onCloseClick}>
        content
      </VsModal>,
    );

    cy.get(".vs-modal-content").should("not.exist");
    cy.get<VueWrapper>("@vue").then((wrapper) => {
      wrapper.setProps({ modelValue: true });
    });
    cy.get(".vs-modal-content").should("be.visible");

    cy.get(".vs-modal__close").click();
    cy.get("@onCloseClick").should("be.calledOnceWith", false);
  });
});
