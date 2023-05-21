import Alert from "./Alert";

describe("Alert", () => {
  it("test alert basic render", () => {
    cy.mount(
      <Alert v-slots={{ title: () => "Alert Title" }}>Default Alert</Alert>
    );
    cy.contains(".vs-alert__title", "Alert Title").should("be.visible");
    cy.contains("Default Alert").should("be.visible");
  });

  it("test button different status", () => {
    const propsArr = ["danger", "success", "warn", "dark"] as const;
    propsArr.forEach((prop) => {
      cy.mount(<Alert {...{ [prop]: true }}>{prop}</Alert>);
      cy.get(`.vs-component--${prop}`).should("be.visible");
    });
  });

  it("test alert different style", () => {
    const propsArr = [
      "solid",
      "border",
      "shadow",
      "gradient",
      "flat",
      "relief",
    ] as const;
    propsArr.forEach((prop) => {
      cy.mount(<Alert {...{ [prop]: true }}>{prop}</Alert>);
      cy.get(`.vs-alert--${prop}`).should("be.visible");
    });
  });

  it("test alert hide content", () => {
    const onTitleClick = cy.spy().as("onTitleClick");

    cy.mount(
      <Alert
        v-slots={{ title: () => "Alert Title" }}
        hiddenContent={false}
        onUpdate:hiddenContent={onTitleClick}
      >
        Alert Content
      </Alert>
    );

    cy.get<VueWrapper>("@vue").then((wrapper) => {
      wrapper.setProps({ hiddenContent: true });
    });

    cy.contains("Alert Title").click();

    cy.get("@onTitleClick").should("have.callCount", 1);
    cy.contains("Alert Content").should("not.exist");
  });

  it("test alert icon", () => {
    cy.mount(
      <Alert
        v-slots={{
          title: () => "Alert Title",
          icon: () => <i class="bx bxs-chat"></i>,
        }}
      >
        Default Alert
      </Alert>
    );
    cy.contains(".vs-alert__title", "Alert Title").should("be.visible");
    cy.contains("Default Alert").should("be.visible");
    cy.get(".vs-alert__icon").should("be.visible");
  });
});
