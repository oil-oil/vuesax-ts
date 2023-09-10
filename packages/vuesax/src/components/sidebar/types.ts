import { Ref } from 'vue'

export type SidebarProvider = {
  active: Ref<string | undefined>
  updateActive: (id: string) => void
  collapsed: Ref<boolean>
}
