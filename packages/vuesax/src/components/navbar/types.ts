export type NavbarProvider = {
  setModel: (id: string) => void
  setLeftLine: (left: number, transition?: boolean) => void
  setWidthLine: (width: number) => void
}
