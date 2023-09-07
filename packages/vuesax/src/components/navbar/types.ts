import { Ref } from 'vue'

export type NavbarProvider = {
  active: Ref<string>
  setModel: (id: string) => void
  setLineLeft: (left: number, transition?: boolean) => void
  setLineWidth: (width: number) => void
}

export type NavbarGroupProvider = {
  setGroupLineLeft: () => void
}
