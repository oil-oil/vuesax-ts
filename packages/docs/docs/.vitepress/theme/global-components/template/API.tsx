import { useData } from 'vitepress'
import { defineComponent } from 'vue'
import { VsTable, VsTh, VsTr, VsTd } from 'vuesax-ts'

const DocsApi = defineComponent({
  name: 'DocsApi',
  setup() {
    const { frontmatter } = useData()
    return () => (
      <div class="api">
        <h2 class="title" id="api">
          API
        </h2>
        <div class="content">
          {frontmatter.value.props && (
            <>
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
                      frontmatter.value.props.map(
                        (line: {
                          name: string
                          type: string
                          values: string
                          description: string
                          default: string
                          usageUrl: string
                        }) => (
                          <VsTr>
                            <VsTh>{line.name}</VsTh>
                            <VsTh>{line.type}</VsTh>
                            <VsTh>{line.values}</VsTh>
                            <VsTh>{line.description}</VsTh>
                            <VsTh>{line.default}</VsTh>
                            <VsTh>
                              {line.usageUrl && (
                                <a href={line.usageUrl}>
                                  Usage<i class="bx bx-code-block"></i>
                                </a>
                              )}
                            </VsTh>
                            <VsTh>
                              <a
                                href={`https://github.com/oil-oil/vuesax-ts/issues/new?title=[Notification]%20prop%20(${line.name})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`}
                              >
                                <i class="bx bx-bug"></i>
                              </a>
                            </VsTh>
                          </VsTr>
                        )
                      )
                  }}
                ></VsTable>
              </div>
            </>
          )}

          {frontmatter.value.slots && (
            <>
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
                      frontmatter.value.slots.map(
                        (line: {
                          name: string
                          type: string
                          values: string
                          description: string
                          default: string
                          usageUrl: string
                        }) => (
                          <VsTr>
                            <VsTd>{line.name}</VsTd>
                            <VsTd>{line.type}</VsTd>
                            <VsTd>{line.values}</VsTd>
                            <VsTd>{line.description}</VsTd>
                            <VsTd>{line.default}</VsTd>
                            <VsTd>
                              {line.usageUrl && (
                                <a href={line.usageUrl}>
                                  Usage<i class="bx bx-code-block"></i>
                                </a>
                              )}
                            </VsTd>
                            <VsTd>
                              <a
                                href={`https://github.com/lusaxweb/vuesax/issues/new?title=[Alert]%20prop%20(${line.name})%20-%20Your%20Bug%20Name&body=**Steps%20to%20Reproduce**%0A1.%20Do%20something%0A2.%20Do%20something%20else.%0A3.%20Do%20one%20last%20thing.%0A%0A**Expected**%0AThe%20icon%20should%20do%20this%0A%0A**Result**%0AThe%20icon%20does%20not%20do%20this%0A%0A**Testcase**%0A(fork%20this%20to%20get%20started)%0Ahttp://jsfiddle.net/example-bug/1/`}
                              >
                                <i class="bx bx-bug"></i>
                              </a>
                            </VsTd>
                          </VsTr>
                        )
                      )
                  }}
                ></VsTable>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
})

export default DocsApi
