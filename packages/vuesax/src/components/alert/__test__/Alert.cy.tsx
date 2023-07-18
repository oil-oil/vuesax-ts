import { VsAlert } from "@/components";

describe("Alert", () => {
  it("test alert basic render", () => {
    cy.mount(
      <VsAlert v-slots={{ title: () => "Alert Title" }}>Default Alert</VsAlert>
    );
    cy.contains(".vs-alert__title", "Alert Title").should("be.visible");
    cy.contains("Default Alert").should("be.visible");
  });

  it("test button different status", () => {
    const propsArr = ["danger", "success", "warn", "dark"] as const;
    propsArr.forEach((prop) => {
      cy.mount(<VsAlert {...{ [prop]: true }}>{prop}</VsAlert>);
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
      cy.mount(<VsAlert {...{ [prop]: true }}>{prop}</VsAlert>);
      cy.get(`.vs-alert--${prop}`).should("be.visible");
    });
  });

  it("test alert hide content", () => {
    const onTitleClick = cy.spy().as("onTitleClick");

    cy.mount(
      <VsAlert
        v-slots={{ title: () => "Alert Title" }}
        hiddenContent={false}
        onUpdate:hiddenContent={onTitleClick}
      >
        Alert Content
      </VsAlert>
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
      <VsAlert
        v-slots={{
          title: () => "Alert Title",
          icon: () => <i class="bx bxs-chat"></i>,
        }}
      >
        Default Alert
      </VsAlert>
    );
    cy.contains(".vs-alert__title", "Alert Title").should("be.visible");
    cy.contains("Default Alert").should("be.visible");
    cy.get(".vs-alert__icon").should("be.visible");
  });

  it("test alert progress", () => {
    cy.mount(
      <VsAlert
        v-slots={{
          title: () => "Alert Title",
        }}
        progress={70}
      >
        Default Alert
      </VsAlert>
    );
    cy.contains(".vs-alert__title", "Alert Title").should("be.visible");
    cy.contains("Default Alert").should("be.visible");
    cy.get(".vs-alert__progress").should("be.visible");
    cy.get(".vs-alert__progress__bar")
      .should("have.attr", "style")
      .and("include", "width: 70%");
  });

  it("test alert isShow", () => {
    cy.mount(
      <VsAlert
        v-slots={{
          title: () => "Alert Title",
        }}
        isShow={false}
      >
        Default Alert
      </VsAlert>
    );
    cy.get(".vs-alert").should("not.exist");
  });
});
