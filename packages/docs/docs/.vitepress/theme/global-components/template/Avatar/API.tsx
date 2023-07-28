import { defineComponent, ref } from "vue";
import { VsTable, VsTh, VsTr } from "vuesax-ts";

const AvatarApi = defineComponent({
  name: "AvatarApi",
  setup() {
    const props = ref([
      [
        "color",
        "string",
        "primary success color="danger" warn dark RGB HEX",
        "Change the color of the component.",
        "gray-2",
      ],
      [
        "size",
        "number",
        "Number",
        "Change the size of the avatar component.",
        "44",
      ],
      [
        "badge",
        "boolean",
        "true false",
        "Determine if the badge is active.",
        "false",
      ],
      [
        "badgeColor",
        "string",
        "VuesaxColor RGB HEX",
        "Change the color of the badge inside the avatar.",
        "primary",
      ],
      [
        "badgePosition",
        "string",
        "bottom-left top-left top-right",
        "Change the position of the badge inside the avatar.",
        "bottom-right",
      ],
      [
        "circle",
        "boolean",
        "true false",
        "Change the style of the avatar by making it square.",
        "false",
      ],
      [
        "square",
        "boolean",
        "true false",
        "Change the style of the avatar by making it square.",
        "false",
      ],
      [
        "writing",
        "boolean",
        "true false",
        "Add an animation to the writing badge.",
        "false",
      ],
      [
        "history",
        "boolean",
        "true false",
        "Add a border to the avatar.",
        "false",
      ],
      [
        "historyGradient",
        "boolean",
        "true false",
        "Change the color of the border to a gradient.",
        "false",
      ],
      [
        "loading",
        "boolean",
        "true false",
        "Add a loading animation to the avatar.",
        "false",
      ],
      [
        "max(VsAvatarGroup)",
        "number",
        "number",
        "determine how many avatars are visible.",
        "false",
      ],
      [
        "float(VsAvatarGroup)",
        "boolean",
        "true false",
        "change the way the avatar is composed by placing one next to the other.",
        "false",
      ],
      [
        "pointer",
        "boolean",
        "true false",
        "change the way the avatar is composed by placing one next to the other.",
        "false",
      ],
    ]);
    const slots = ref([
      ["badge", "slot", "", "Add to the badge everything that is inside the slot, commonly used for numbers and an icon.", ""],
      ["icons", "slot", "", "Add a space to put icons next to the avatar.", ""],
    ]);

    const usageUrl = (lineIndex: number) => {
      switch (lineIndex) {
        case 0:
          return "avatar#Color";

        case 1:
          return "avatar#size";

        case 2:
          return "avatar#badge";

        case 3:
          return "avatar#badge";

        case 4:
          return "avatar#badge";

        case 5:
          return "avatar#circle";

        case 6:
          return "avatar#square";

        case 7:
          return "avatar#badge";

        case 8:
          return "avatar#history";

        case 9:
          return "avatar#history";

        case 10:
          return "avatar#loading";
        
        case 11:
         return "avatar#group";

        case 12:
         return "avatar#group";

        case 13:
         return "avatar#default";

        default:
          return "";
      }
    };
    const slotsUrl = (lineIndex: number) => {
      switch (lineIndex) {
        case 0:
          return "avatar#badge";

        case 1:
          return "avatar#icons";

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
                          href={`https://github.com/oil-oil/vuesax-ts/issues/new?title=[Avatar]%20prop%20(${line[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`}
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
                        href={`https://github.com/oil-oil/vuesax-ts/issues/new?title=[Avatar]%20prop%20(${line[0]})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`}
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

export default AvatarApi;
