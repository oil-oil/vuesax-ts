import { defineComponent, ref } from "vue";
import { VsTable, VsTh, VsTr } from "vuesax-ts";

const SwitchApi = defineComponent({
  name: "SwitchApi",
  setup() {
    const props = ref([
      [
        "v-model",
        "boolean",
        "true false",
        "Determine the value of the component and if it is an array add or remove the value.",
        "",
      ],
      [
        "color",
        "string",
        "ALL colors of vuesax (RGB y HEX)",
        "Change the color of the component when it is in active state.",
        "primary",
      ],
      [
        "loading",
        "boolean",
        "true false",
        "Change the color of the component when it is in active state.",
        "false",
      ],
      [
        "indeterminate",
        "boolean",
        "true false",
        "Determine if the component is in an undetermined state (being in this state is disabled).",
        "false",
      ],
      [
        "square",
        "boolean",
        "true false",
        "Change the style of the component from circular to square.",
        "false",
      ],
      [
        "icon",
        "boolean",
        "true false",
        "Change the style of the circle by making it transparent (used when adding the slot = 'slot = circle').",
        "false",
      ],
    ]);
    const slots = ref([
      ["default", "slot", "", "Add text within the component.", ""],
      ["on", "slot", "", "Add text within the component when it is in active state.", ""],
      ["off", "slot", "", "Add text within the component when it is in idle state.", ""],
      ["circle", "slot", "", "Add an icon to the circle within the component.", ""],
    ]);

    const usageUrl = (lineIndex: number) => {
      switch (lineIndex) {
        case 0:
          return `alert#closable`;

        case 1:
          return `alert#color`;

        case 2:
          return `alert#solid`;

        case 3:
          return `alert#hidden-content`;

        case 4:
          return `alert#pagination`;

        case 5:
          return `alert#progress-bar`;

        case 6:
          return `alert#closable`;
        default:
          return "";
      }
    };
    const slotsUrl = (lineIndex: number) => {
      switch (lineIndex) {
        case 0:
          return `alert#icon`;

        case 1:
          return `alert#title`;

        case 2:
          return `alert#pagination`;

        case 3:
          return `alert#footer`;

        default:
          return "";
      }
    };

    return () => (
      <div class="api">
        <h2 class="title" id="api">
          API
        </h2>
        <div class="content">
          <p class="sub-title">Props</p>
          <div class="table">
            <VsTable
              striped
              v-slots={{
                thead: () => (
                  <VsTr>
                    <VsTh>Property</VsTh>
                    <VsTh>Type</VsTh>
                    <VsTh>Values</VsTh>
                    <VsTh>Description</VsTh>
                    <VsTh>Default</VsTh>
                    <VsTh>Example</VsTh>
                    <VsTh>More</VsTh>
                  </VsTr>
                ),
                tbody: () =>
                  props.value.map((line, lineIndex) => (
                    <VsTr>
                      {line.map((item) => (
                        <VsTh>{item}</VsTh>
                      ))}
                      <VsTh>
                        <a href={usageUrl(lineIndex)}>
                          Usage<i class="bx bx-code-block"></i>
                        </a>
                      </VsTh>
                      <VsTh>
                        <a
                          href={`https://github.com/lusaxweb/vuesax/issues/new?title=[Alert]%20prop%20(${line[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`}
                        >
                          <i class="bx bx-bug"></i>
                        </a>
                        <a
                          href="https://github.com/oil-oil/vuesax-ts"
                          target="_blank"
                        >
                          <i class="bx bx-terminal"></i>
                        </a>
                      </VsTh>
                    </VsTr>
                  )),
              }}
            ></VsTable>
          </div>
          <p class="sub-title">Slots</p>
          <div class="table">
          <VsTable
            striped
            v-slots={{
              thead: () => (
                <VsTr>
                  <VsTh>Property</VsTh>
                  <VsTh>Type</VsTh>
                  <VsTh>Values</VsTh>
                  <VsTh>Description</VsTh>
                  <VsTh>Default</VsTh>
                  <VsTh>Example</VsTh>
                  <VsTh>More</VsTh>
                </VsTr>
              ),
              tbody: () =>
                slots.value.map((line, lineIndex) => (
                  <VsTr>
                    {line.map((item) => (
                      <VsTh>{item}</VsTh>
                    ))}
                    <VsTh>
                      <a href={slotsUrl(lineIndex)}>
                        Usage<i class="bx bx-code-block"></i>
                      </a>
                    </VsTh>
                    <VsTh>
                      <a
                        href={`https://github.com/lusaxweb/vuesax/issues/new?title=[Alert]%20prop%20(${line[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`}
                      >
                        <i class="bx bx-bug"></i>
                      </a>
                      <a
                        href="https://github.com/oil-oil/vuesax-ts"
                        target="_blank"
                      >
                        <i class="bx bx-terminal"></i>
                      </a>
                    </VsTh>
                  </VsTr>
                )),
            }}
          ></VsTable>
          </div>
        </div>
      </div>
    );
  },
});

export default SwitchApi;
