import { defineComponent, ref } from "vue";
import { VsTable, VsTh, VsTr } from "vuesax-ts";

const CheckboxApi = defineComponent({
    name:"CheckboxApi",
    setup(){
        const props = ref([
            [
              "v-model",
              "boolean",
              "false true",
              "determine the value of the checkbox and data anchor.",
              "false",
            ],
            [
              "color",
              "string",
              "primary success color="danger" warn dark RGB HEX",
              "Change the color of the component and some of its sub components.",
              "primary",
            ],
            [
              "loading",
              "boolean",
              "true false",
              "Add a loading animation and disable the input.",
              "false",
            ],
            [
              "lineThrough",
              "boolean",
              "true false",
              "Add a line in the center of the label when checked.",
              "false",
            ],
            [
              "indeterminate",
              "boolean",
              "true false",
              "Add a line in the center of the label when checked.",
              "false",
            ],
            [
              "labelBefore",
              "boolean",
              "true false",
              "Change the position of the label.",
              "false",
            ],
            [
              "checked",
              "boolean",
              "true false",
              "Determine if the component is initially in check (this changes the property computed in v-model to true).",
              "false",
            ],
          ]);

          const slots = ref([
            ["icon", "slot", "", "Change the component icon.", ""],
            ["default", "slot", "", "Add a label to the component.", ""],
          ]);

          const usageUrl = (lineIndex: number) => {
            switch (lineIndex) {
              case 0:
                return "checkbox#default";
      
              case 1:
                return "checkbox#color";
      
              case 2:
                return "checkbox#loading";
      
              case 3:
                return "checkbox#linethrough";
      
              case 4:
                return "checkbox#indeterminate";
      
              case 5:
                return "checkbox#label";
      
              case 6:
                return "checkbox#default";
              default:
                return "";
            }
          };
          const slotsUrl = (lineIndex: number) => {
            switch (lineIndex) {
              case 0:
                return "checkbox#icon";
      
              case 1:
                return "checkbox#default";
      
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
                                href={`https://github.com/oil-oil/vuesax-ts/issues/new?title=[Alert]%20prop%20(${line[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`}
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
                              href={`https://github.com/oil-oil/vuesax-ts/issues/new?title=[Alert]%20prop%20(${line[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`}
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
    }
})
export default CheckboxApi;