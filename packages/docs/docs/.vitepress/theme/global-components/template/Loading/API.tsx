import { defineComponent, ref } from "vue";
import { VsTable, VsTh, VsTr } from "vuesax-ts";

const AlertApi = defineComponent({
  name: "AlertApi",
  setup() {
    const props = ref([
      [
        "type",
        "string",
        "waves corners border points square gradient rectangle circles square-rotate scale",
        "Change the animation of the loading.",
        "default",
      ],
      [
        "color",
        "string",
        "ALL colors of vuesax (RGB y HEX)",
        "Change the color of the loading animation.",
        "primary",
      ],
      [
        "background",
        "string",
        "All colors of vuesax (RGB y HEX)",
        "Change the background color of the loading.",
        "#fff",
      ],
      [
        "text",
        "string",
        "string",
        "Add a text below the loading animation.",
        "null",
      ],
      [
        "percent",
        "string",
        "(0%-100%)",
        "Add a text below the loading animation.",
        "null",
      ],
      [
        "progress",
        "Number",
        "0-100",
        "Add a progress bar to the loading and the progress would be the value.",
        "null",
      ],
      [
        "opacity",
        "string",
        "(0-1)",
        "Change the opacity of the background.",
        "0.6",
      ],
      [
        "scale",
        "string",
        "(0-1)",
        "Change the size of the background.",
        "null",
      ],
    ]);

    const usageUrl = (lineIndex: number) => {
      switch (lineIndex) {
        case 0:
          return "loading#type";

        case 1:
          return "loading#color";

        case 2:
          return "loading#background";

        case 3:
          return "loading#text";

        case 4:
          return "loading#percent";

        case 5:
          return "loading#progress";

        case 6:
          return "loading#background";

        case 7:
          return "loading#background";

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
                          href={`https://github.com/oil-oil/vuesax-ts/issues/new?title=[Loading]%20prop%20(${line[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`}
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
