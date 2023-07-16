import Modal from "./Modal";

describe("Modal", () => {
  it("test modal basic render", () => {
    cy.mount(
      <Modal
        modelValue={true}
        v-slots={{ header: () => "header", footer: () => "footer" }}
      >
        content
      </Modal>
    );
    cy.contains(".vs-modal__header", "header").should("be.visible");
    cy.contains(".vs-modal__content", "content").should("be.visible");
    cy.contains(".vs-modal__footer", "footer").should("be.visible");
  });

  it("test modal with square shape", () => {
    cy.mount(
      <Modal square modelValue={true}>
        content
      </Modal>
    );
    cy.get(".vs-modal.vs-modal--square")
      .should("be.visible")
      .should("have.css", "border-radius", "0px");
  });

  it("test modal open and close", () => {
    const onCloseClick = cy.spy().as("onCloseClick");

    cy.mount(
      <Modal modelValue={false} onUpdate:modelValue={onCloseClick}>
        content
      </Modal>
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
