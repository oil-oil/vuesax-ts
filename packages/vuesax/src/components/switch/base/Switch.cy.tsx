import Switch from "./Switch";

describe("Switch", () => {
  it("test button basic render", () => {
    cy.mount(<Switch>Default Switch</Switch>);
    cy.contains(".vs-switch__text.off", "Default Switch")
      .should("be.visible")
      .parent()
      .should("have.class", "vs-component--primary");
  });

  it("test disabled render", () => {
    cy.mount(<Switch disabled>Disabled Switch</Switch>);
    cy.contains(".vs-switch__text.off", "Disabled Switch")
      .parent()
      .should("have.class", "vs-component--primary");
    cy.get(".vs-switch")
      .should("have.attr", "disabled", "disabled")
      .click({ force: true });

    cy.get(".vs-switch__text.on").should("not.be.visible");
  });

  it("test switch different status", () => {
    const propsArr = ["danger", "success", "warn", "dark"] as const;

    propsArr.forEach((prop) => {
      cy.mount(<Switch {...{ [prop]: true }}>{prop}</Switch>);
      cy.contains(prop)
        .parent()
        .should("be.visible")
        .should("have.class", `vs-component--${prop}`);
    });
  });

  it("test switch square shape", () => {
    cy.mount(<Switch square>square</Switch>);
    cy.contains("square")
      .parent()
      .should("be.visible")
      .should("have.class", "vs-switch--square");
  });

  it("test switch indeterminate", () => {
    cy.mount(<Switch indeterminate></Switch>);
    cy.get(".vs-switch.vs-switch--indeterminate").should("be.visible");
  });

  it("test switch modelValue", () => {
    const onClick = cy.spy().as("onClick");
    cy.mount(
      <Switch modelValue={false} onUpdate:modelValue={onClick}>
        switch
      </Switch>
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
      <Switch onUpdate:modelValue={onClickSpy} loading>
        Loading Switch
      </Switch>
    );

    cy.get(".vs-switch").click({ force: true });
    cy.get("@onClick").should("not.be.called");
  });

  it("test switch icon", () => {
    cy.mount(
      <Switch
        v-slots={{
          on: <i class="bx bxs-volume-full"></i>,
          off: <i class="bx bxs-volume-mute"></i>,
        }}
      >
        Loading Switch
      </Switch>
    );

    cy.get(".bxs-volume-mute").should("be.visible");
    cy.get(".vs-switch").click();
    cy.get(".bxs-volume-full").should("be.visible");
  });
});
