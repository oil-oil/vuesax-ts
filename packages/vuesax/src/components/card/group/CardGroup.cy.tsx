import VsCardGroup from "./CardGroup";
import VsButton from "../../button/base";
import VsCard from "../base/Card";

describe("Card", () => {
  const i = ["1", "2", "3", "4", "5", "6"];
  it("test CardGroup render", () => {
    cy.mount(
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
    cy.get(".vs-card__group-cards").should("be.visible");
    cy.get(".vs-card__group .vs-card__group-next").should("be.visible").click();
    cy.get(".vs-card__group-cards")
      .should("have.prop", "scrollLeft")
      .and("eq", 384);
  });
});
