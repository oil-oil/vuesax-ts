import { nanoid } from 'nanoid/non-secure'
import { createApp, onMounted, ref, TransitionGroup, VNode } from 'vue'

import Notification, { NotificationProps } from './Notification'

type Position =
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'top-left'
  | 'top-right'
  | 'top-center'

type NotificationHookProps = Omit<NotificationProps, 'isVisible'> & {
  position?: Position
  icon?: VNode
  content?: VNode
}

const useNotification = () => {
  let root: HTMLDivElement

  const notificationPosition = {
    'top-left': ref<[string, JSX.Element][]>([]),
    'top-right': ref<[string, JSX.Element][]>([]),
    'top-center': ref<[string, JSX.Element][]>([]),
    'bottom-left': ref<[string, JSX.Element][]>([]),
    'bottom-right': ref<[string, JSX.Element][]>([]),
    'bottom-center': ref<[string, JSX.Element][]>([])
  }

  const app = createApp({
    render: () => (
      <>
        {Object.entries(notificationPosition).map(([position, elements]) => (
          <div
            class={[
              'vs-notification-parent',
              `vs-notification-parent--${position}`
            ]}
          >
            <TransitionGroup name="notification">
              {elements.value.map((element) => element[1])}
            </TransitionGroup>
          </div>
        ))}
      </>
    )
  })

  onMounted(() => {
    root = document.createElement('div')
    document.body.appendChild(root)
    app.mount(root)
  })

  const close = (key?: string, position?: Position) => {
    if (key && position) {
      Object.entries(notificationPosition[position].value).forEach(
        ([, elements], index) => {
          if (elements[0] === key) {
            notificationPosition[position].value.splice(index, 1)
          }
        }
      )
    } else if (!key && position) {
      Object.entries(notificationPosition[position].value).forEach(
        (positionArr) => {
          if (positionArr.length > 0) {
            notificationPosition[positionArr[0] as Position].value.shift()
          }
        }
      )
    } else if (key && !position) {
      Object.entries(notificationPosition).forEach((positionArr) => {
        positionArr[1].value.forEach((elementInfo, index) => {
          if (elementInfo[0] === key) {
            notificationPosition[positionArr[0] as Position].value.splice(
              index,
              1
            )
          }
        })
      })
    } else {
      Object.entries(notificationPosition).forEach((positionArr) => {
        if (positionArr[1].value.length > 0) {
          notificationPosition[positionArr[0] as Position].value.shift()
        }
      })
    }
  }

  const clear = () => {
    Object.entries(notificationPosition).forEach(([key]) => {
      notificationPosition[key as Position].value = []
    })
  }

  const open = (props: NotificationHookProps) => {
    const key = nanoid(10)
    const notification =
      notificationPosition[props.position || 'bottom-right'].value
    notification.push([
      key,
      <Notification
        {...props}
        isVisible
        onClickClose={() => {
          close(key, props.position || 'bottom-right')
        }}
        key={key}
        v-slots={{
          ...(props.icon ? { icon: () => props.icon } : {}),
          ...(props.content ? { content: () => props.content } : {})
        }}
      ></Notification>
    ])

    return key
  }

  return { open, close, clear }
}

export default useNotification

export type { NotificationHookProps, Position }
