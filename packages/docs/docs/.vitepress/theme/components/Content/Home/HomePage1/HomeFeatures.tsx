import { useData } from 'vitepress'
import { defineComponent, onMounted, onUnmounted, reactive, ref } from 'vue'
import {
  VsAvatar,
  VsAvatarGroup,
  VsButton,
  VsInput,
  VsCheckbox,
  VsSelect,
  VsOption,
  VsCard,
  VsSwitch,
  VsLoading
} from 'vuesax-ts'
import './HomeFeatures.scss'

const HomeFeatures = defineComponent({
  name: 'HomeFeatures',
  setup() {
    const { theme } = useData<{
      home: {
        avatarPart: {
          title: string
          text: string
          button: {
            red: string
            white: string
          }
        }
        checkPart: {
          input: string
          checkList: string[]
          button: string
        }
        search: string
        select: string
        card: {
          title: string
          text: string
        }
        custom: {
          title: string
          button: string
        }
      }
    }>()
    const selectValue = ref()
    const selectValue2 = ref()
    const switchPart = reactive({
      switchActive: false
    })
    onMounted(() => {
      document.body.classList.add('home')
    })
    onUnmounted(() => {
      document.body.classList.remove('home')
    })
    return () => (
      <>
        <div class="avatar-card">
          <VsAvatar
            badge
            badgeColor="danger"
            size="80"
            color="primary"
            v-slots={{ badge: () => 28 }}
          >
            <img src="/foto1.png" alt="" />
          </VsAvatar>

          <div class="content">
            <h6>{theme.value.home.avatarPart.title}</h6>
            <p>{theme.value.home.avatarPart.text}</p>
            <div class="button-box">
              <VsButton color="danger">
                {theme.value.home.avatarPart.button.red}
              </VsButton>
              <VsButton shadow>
                {theme.value.home.avatarPart.button.white}
              </VsButton>
            </div>
          </div>
        </div>

        <div class="check-card">
          <div class="header">
            <VsInput
              class="check-input"
              label-placeholder={theme.value.home.checkPart.input}
              color="primary"
            ></VsInput>
            <VsButton border icon size="xs">
              <i class="bx bx-chevron-right"></i>
            </VsButton>
          </div>

          <div class="content">
            {theme.value.home.checkPart.checkList.map((name) => (
              <VsCheckbox lineThrough>{name}</VsCheckbox>
            ))}
          </div>
          <VsButton style={{ width: '100%' }}>
            {theme.value.home.checkPart.button}
          </VsButton>
        </div>

        <div class="search-card">
          <VsInput
            icon-after
            placeholder={theme.value.home.search}
            status="primary"
            v-slots={{ icon: () => <i class="bx bx-search"></i> }}
          ></VsInput>
        </div>

        <div class="select-card">
          <VsSelect
            placeholder={theme.value.home.select}
            v-model={selectValue.value}
          >
            <div class="options">
              {['😉', '😺', '😽', '😎', '😂'].map((emoji, index) => (
                <VsOption label={emoji} value={index}></VsOption>
              ))}
            </div>
          </VsSelect>
        </div>

        <div class="button-card">
          <VsButton color="danger" icon size="xs">
            <i class="bx bx-play"></i>
          </VsButton>
          <VsButton color="warn" icon size="xs">
            <i class="bx bx-git-pull-request"></i>
          </VsButton>
          <VsButton color="dark" icon size="xs">
            <i class="bx bxl-github"></i>
          </VsButton>
        </div>

        <div class="home-card">
          <VsCard
            type={'1'}
            v-slots={{
              title: () => <h3>{theme.value.home.card.title}</h3>,
              img: () => <img src="/foto2.png"></img>,
              text: () => (
                <div class="content">
                  <p>{theme.value.home.card.text}</p>
                  <VsAvatarGroup>
                    <VsAvatar circle>
                      <img src="/foto9.png"></img>
                    </VsAvatar>
                    <VsAvatar circle>
                      <img src="/foto8.png"></img>
                    </VsAvatar>
                    <VsAvatar circle>
                      <img src="/foto7.png"></img>
                    </VsAvatar>
                  </VsAvatarGroup>
                </div>
              ),
              interactions: () => (
                <>
                  <VsButton size="xs" color="danger" icon>
                    <i class="bx bx-heart"></i>
                  </VsButton>
                  <VsButton shadow>
                    <i class="bx bx-chat"></i>
                    <span>54</span>
                  </VsButton>
                </>
              )
            }}
          ></VsCard>
        </div>

        <div class="switch-card">
          <VsSwitch
            color="success"
            v-model={switchPart.switchActive}
            v-slots={{
              on: () => <i class="bx bx-x"></i>,
              off: () => <i class="bx bx-check"></i>
            }}
          >
            isLoading
          </VsSwitch>
          <VsSwitch
            color="warn"
            loading={switchPart.switchActive}
            v-slots={{
              off: () => <i class="bx bxs-plane-alt"></i>,
              on: () => <>Active</>
            }}
          ></VsSwitch>
        </div>

        <div class="loading-card">
          <VsLoading type="waves" opacity="1"></VsLoading>
        </div>

        <div class="custom-card">
          <VsAvatar size="90">
            <img src="/foto3.png" alt="" />
          </VsAvatar>
          <h6>{theme.value.home.custom.title}</h6>
          <VsButton size="md">{theme.value.home.custom.button}</VsButton>
        </div>

        <div class="select-card2">
          <VsSelect
            placeholder={theme.value.home.select}
            v-model={selectValue2.value}
          >
            {['oil-oil', 'rCatman'].map((item, index) => (
              <VsOption label={item} value={index}></VsOption>
            ))}
          </VsSelect>
        </div>

        <div class="vue-card">
          <VsAvatar size="70" color="rgba(65, 184, 131, 0.8)">
            <img src="/vue-logo.png" alt="" />
          </VsAvatar>
          <h6>{theme.value.home.custom.title}</h6>
        </div>
      </>
    )
  }
})
export default HomeFeatures
