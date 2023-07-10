import { defineComponent, ref } from "vue";
import { VsTable, VsTh, VsTr } from "vuesax/src/components";

const AlertApi = defineComponent({
  name: "AlertApi",
  setup() {
    const props = ref([
      [
        "active",
        "boolean",
        "boolean",
        "Determine if the component is visible.",
        "true",
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
    ]);

    return () => (
      <div class="api">
        <p>Api</p>
        <div class="content">
          <p>Props</p>
          <div class="table">
            <VsTable
              v-slots={{
                thead: () => (
                  <VsTr>
                    <VsTh>Property</VsTh>
                    <VsTh>Type</VsTh>
                    <VsTh>Values</VsTh>
                    <VsTh>Description</VsTh>
                    <VsTh>Description</VsTh>
                  </VsTr>
                ),
                tbody: () =>
                  props.value.map((line) => (
                    <VsTr>
                      {line.map((item) => (
                        <VsTh>{item}</VsTh>
                      ))}
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
