import { defineComponent, ref } from 'vue'
import { VsTable, VsTh, VsTr } from 'vuesax-ts'

const AlertApi = defineComponent({
  name: 'AlertApi',
  setup() {
    const props = ref([
      [
        'PlaceHolder',
        'string',
        'String',
        'Add a placeholder to the input.',
        ''
      ],
      ['label', 'string', 'String', 'Add a label above the component.', ''],
      [
        'labelPlaceholder',
        'string',
        'String',
        'Add a placeholder converts to focus on a label.',
        ''
      ],
      [
        'color',
        'string',
        'VuesaxColors RGB HEX',
        'Change component color.',
        'null'
      ],
      [
        'state',
        'string',
        'VuesaxColors RGB HEX',
        'Change the background color of the component by changing its status.',
        'null'
      ],
      [
        'progress',
        'Number',
        '0-100',
        'Add a progress bar starting in red and ending in green.',
        '0'
      ],
      [
        'loading',
        'boolean',
        'false',
        'Add a loading animation to the input.',
        'false'
      ],
      [
        'type',
        'string',
        'HTMl Type',
        'Change the type of input (html values).',
        'text'
      ],
      [
        'border',
        'boolean',
        'false',
        'Change the style of the component.',
        'false'
      ],
      [
        'shadow',
        'boolean',
        'false',
        'Change the style of the component.',
        'false'
      ],
      [
        'iconAfter',
        'boolean',
        'false',
        'Put the icon after the input.',
        'false'
      ],
      [
        'visiblePassword',
        'boolean',
        'false',
        'If the input is of the password type, it is modified to show the password.',
        'false'
      ]
    ])
    const slots = ref([
      ['icon', 'Slot', '', 'Add an icon to the alert.', ''],
      ['message', 'Slot', '', '	Add an informative text below the input.', '']
    ])

    const usageUrl = (lineIndex: number) => {
      switch (lineIndex) {
        case 0:
          return 'input#label-placeholder'

        case 1:
          return 'input#label'

        case 2:
          return 'input#label-placeholder'

        case 3:
          return 'input#color'

        case 4:
          return 'input#state'

        case 5:
          return 'input#progress'

        case 6:
          return 'input#loading'

        case 7:
          return 'input#input-type'

        case 8:
          return 'input#border'

        case 9:
          return 'input#shadow'

        case 10:
          return 'input#icon'
        default:
          return ''
      }
    }
    const slotsUrl = (lineIndex: number) => {
      switch (lineIndex) {
        case 0:
          return 'input#icon'

        case 1:
          return 'input#message'

        default:
          return ''
      }
    }

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
                  ))
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
                  ))
              }}
            ></VsTable>
          </div>
        </div>
      </div>
    )
  }
})

export default AlertApi
