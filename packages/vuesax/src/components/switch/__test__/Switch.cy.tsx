import { VsSwitch } from "@/components";
import { COLOR_MAP } from "@/test-utils/color";

describe("Switch", () => {
  it("test button basic render", () => {
    cy.mount(<VsSwitch>Default Switch</VsSwitch>);
    cy.contains(".vs-switch__text.off", "Default Switch")
      .should("be.visible")
      .parent()
      .should("have.class", "vs-component--primary");
  });

  it("test disabled render", () => {
    cy.mount(<VsSwitch disabled>Disabled Switch</VsSwitch>);
    cy.contains(".vs-switch__text.off", "Disabled Switch")
      .parent()
      .should("have.class", "vs-component--primary");
    cy.get(".vs-switch")
      .should("have.attr", "disabled", "disabled")
      .click({ force: true });

    cy.get(".vs-switch__text.on").should("not.be.visible");
  });

  it("test switch different color", () => {
    Object.entries(COLOR_MAP).forEach(([status, color]) => {
      cy.mount(<VsSwitch color={status as Status}>{status}</VsSwitch>);
      cy.get(".vs-switch")
        .should("have.attr", "style")
        .and("include", `--vs-color: ${color};`);
    });
  });

  it("test switch square shape", () => {
    cy.mount(<VsSwitch square>square</VsSwitch>);
    cy.contains("square")
      .parent()
      .should("be.visible")
      .should("have.class", "vs-switch--square");
  });

  it("test switch indeterminate", () => {
    cy.mount(<VsSwitch indeterminate></VsSwitch>);
    cy.get(".vs-switch.vs-switch--indeterminate").should("be.visible");
  });

  it("test switch modelValue", () => {
    const onClick = cy.spy().as("onClick");
    cy.mount(
      <VsSwitch modelValue={false} onUpdate:modelValue={onClick}>
        switch
      </VsSwitch>
    );
    cy.contains(".vs-switch__text.off", "switch").should("be.visible");
    cy.get<VueWrapper>("@vue").then((wrapper) => {
      wrapper.setProps({ modelValue: true });
    });
    cy.contains(".vs-switch__text.off", "switch").should("not.be.visible");
    cy.contains(".vs-switch__text.on", "switch").should("be.visible");

    cy.get(".vs-switch").click();
    cy.get("@onClick").should("be.calledWith", false);
  });

  it("test switch loading", () => {
    const onClickSpy = cy.spy().as("onClick");
    cy.mount(
      <VsSwitch onUpdate:modelValue={onClickSpy} loading>
        Loading Switch
      </VsSwitch>
    );

    cy.get(".vs-switch").click({ force: true });
    cy.get("@onClick").should("not.be.called");
  });

  it("test switch icon", () => {
    cy.mount(
      <VsSwitch
        v-slots={{
          on: <i class="bx bxs-volume-full"></i>,
          off: <i class="bx bxs-volume-mute"></i>,
        }}
      >
        Loading Switch
      </VsSwitch>
    );

    cy.get(".bxs-volume-mute").should("be.visible");
    cy.get(".vs-switch").click();
    cy.get(".bxs-volume-full").should("be.visible");
  });
});
