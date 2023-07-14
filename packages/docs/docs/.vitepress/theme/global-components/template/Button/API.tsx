import { defineComponent, ref } from "vue";
import { VsTable, VsTh, VsTr } from "vuesax/src/components";
import "./Api.scss";

const AlertApi = defineComponent({
  name: "AlertApi",
  setup() {
    const props = ref([
      [
        "color",
        "string",
        "primary success danger warning dark RGB HEX",
        "Change the color of the component and some of its sub components.",
        "primary",
      ],
      [
        "color",
        "string",
        "primary success danger warn dark RGB HEX",
        "Change the color of the component and some of its sub components.",
        "primary",
      ],
      [
        "type",
        "boolean",
        "solid border shadow gradient relief ",
        "Change the style of all the alert.",
        "default",
      ],
      [
        "hidden-content",
        "boolean",
        "boolean",
        "With this property you can hide the content of the alert.",
        "false",
      ],
      [
        "page",
        "Number",
        "Number",
        "Determine the page that is active (this property is linked to the slots='page-{n}').",
        "false",
      ],
      [
        "progress",
        "Number",
        "0-100",
        "Add a progress bar to the alert and the value is the percentage of width.",
        "0",
      ],
      [
        "closable",
        "boolean",
        "boolean",
        "Add a button to close the alert (it is necessary to use v-model).",
        "false",
      ],
    ]);
    const slots = ref([
      ["icon", "slot", "", "Add an icon to the alert.", ""],
      ["title", "slot", "", "Add a title to the alert.", ""],
      [
        "page-{n}",
        "slot",
        "(page-1 - page-{n})",
        "Add the pages to the alert component if it is page one would be (slot='page-1').",
        "",
      ],
      ["footer", "slot", "", "Add a footer to the alert component.", ""],
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
    );
  },
});

export default AlertApi;
