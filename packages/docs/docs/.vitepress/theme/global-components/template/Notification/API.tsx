import { defineComponent, ref } from "vue";
import { VsTable, VsTh, VsTr } from "vuesax-ts";

const NotificationApi = defineComponent({
  name: "NotificationApi",
  setup() {
    const props = ref([
      ["title", "string", "string", "Add a title to the notification.", ""],
      ["text", "string", "string", "Add a text to the notification.", ""],
      [
        "position",
        "string",
        "bottom-right top-right top-center top-left bottom-left bottom-center",
        "Change the position of the component.",
        "bottom-right",
      ],
      [
        "color",
        "string",
        "ALL colors of vuesax (RGB y HEX)",
        "Add a background color to the notification.",
        "",
      ],
      [
        "border",
        "string",
        "All colors of vuesax (RGB y HEX)",
        "Add a color border to the notification.",
        "",
      ],
      [
        "duration",
        "number",
        "number",
        "Determine the time until the notification is hidden.",
        "4000",
      ],
      [
        "buttonClose",
        "boolean",
        "true false",
        "Determine if the notification has the close button.",
        "true",
      ],
      [
        "flat",
        "boolean",
        "true false",
        "Change the notification style to flat.",
        "false",
      ],
      [
        "sticky",
        "boolean",
        "true false",
        "Change the position of the notification attached to the nearest corner.",
        "false",
      ],
      [
        "square",
        "boolean",
        "true false",
        "Determine if the notification is square and remove the border-radius.",
        "false",
      ],
      [
        "width",
        "string",
        "100% auto",
        "Determine the width of the notification.",
        "340px",
      ],
      [
        "loading",
        "boolean",
        "true false",
        "Determine if the notification has a loading animation.",
        "false",
      ],
      [
        "progressAuto",
        "boolean",
        "true false",
        "Enable an auto-incrementing progress bar",
        "false",
      ],
      [
        "notPadding",
        "boolean",
        "true false",
        "Remove padding from notification.",
        "false",
      ],
      [
        "icon",
        "VNode",
        "VNode",
        "Add an icon at the notification beginning",
        "",
      ],
      [
        "content",
        "VNode",
        "VNode",
        "Change the content of the notification to the one provided as a value",
        "",
      ],
    ]);

    const usageUrl = (lineIndex: number) => {
      switch (lineIndex) {
        case 0:
          return "notification#default";

        case 1:
          return "notification#default";

        case 2:
          return "notification#position";

        case 3:
          return "notification#color";

        case 4:
          return "notification#border";

        case 5:
          return "notification#duration";

        case 6:
          return "notification#button-close";

        case 7:
          return "notification#flat";

        case 8:
          return "notification#stick";

        case 9:
          return "notification#square";

        case 10:
          return "notification#width";

        case 11:
          return "notification#loading";

        case 12:
          return "notification#progress";

        case 13:
          return "notification#not-padding";

        case 14:
          return "notification#icons";

        case 15:
          return "notification#example";

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
                          href={`https://github.com/oil-oil/vuesax-ts/issues/new?title=[Notification]%20prop%20(${line[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`}
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

export default NotificationApi;
