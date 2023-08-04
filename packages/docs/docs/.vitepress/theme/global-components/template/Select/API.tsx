import { defineComponent, ref } from "vue";
import { VsTable, VsTh, VsTr } from "vuesax-ts";

const AlertApi = defineComponent({
  name: "AlertApi",
  setup() {
    const props = ref([
      [
        "color",
        "string",
        "Main colors of vuesax RGB HEX",
        "Change the color of the component.",
        "primary",
      ],
      [
        "loading",
        "boolean",
        "true false",
        "Determine if the component is in the loading state and add an animation.",
        "false",
      ],
      [
        "placeholder",
        "string",
        "String",
        "Add a placeholder to the component.",
        "",
      ],
      [
        "label",
        "string",
        "String",
        "Add a label to the composite select.",
        "null",
      ],
      [
        "label-placeholder",
        "string",
        "String",
        "Add a placeholder that when in focus or with value becomes a label.",
        "null",
      ],
      [
        "filter",
        "Boolean",
        "true false",
        "Add the functionality to filter the select options.",
        "false",
      ],
      [
        "multiple",
        "boolean",
        "true false",
        "Add the functionality of being able to select several options from a select.",
        "false",
      ],
      [
        "state",
        "string",
        "Vuesax main colors",
        "Change the state of the component to the color provided.",
        "false",
      ],
      [
        "disabled",
        "boolean",
        "true false",
        "Determine if the component is in the disabled state.",
        "false",
      ],
      [
        "collapse-chips",
        "boolean",
        "true false",
        "Determine if the chips in multiple are reduced to 2 elements.",
        "false",
      ],
    ]);
    const slots = ref([
      ["message-{color}", "Slot", "", "Add a message below the select.", ""],
      ["title", "Slot", "", "The vs-option-group component adds a title to the option group.", ""],
    ]);

    const usageUrl = (lineIndex: number) => {
      switch (lineIndex) {
        case 0:
          return `select#color`;

        case 1:
          return `select#loading`;

        case 2:
          return `select#placeholder`;

        case 3:
          return `select#label`;

        case 4:
          return `select#label`;

        case 5:
          return `select#filter`;

        case 6:
          return `select#multiple`;

        case 7:
          return `select#state`;

        case 8:
          return `select#loading`;

        case 9:
          return `select#multiple`;

        default:
          return "";
      }
    };
    const slotsUrl = (lineIndex: number) => {
      switch (lineIndex) {
        case 0:
          return `select#message`;

        case 1:
          return `alert#group`;

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
                          href={`https://github.com/lusaxweb/vuesax/issues/new?title=[Alert]%20Prop%20(${line[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`}
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
                          href={`https://github.com/oil-oil/vuesax-ts/issues/new?title=[Select]%20Slots%20(${line[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`}
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

export default AlertApi;
