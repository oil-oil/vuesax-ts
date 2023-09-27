// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    VsAlert: (typeof import('../'))['VsAlert']
    VsAvatar: (typeof import('../'))['VsAvatar']
    VsAvatarGroup: (typeof import('../'))['VsAvatarGroup']
    VsButton: (typeof import('../'))['VsButton']
    VsButtonGroup: (typeof import('../'))['VsButtonGroup']
    VsCard: (typeof import('../'))['VsCard']
    VsCardGroup: (typeof import('../'))['VsCardGroup']
    VsCheckbox: (typeof import('../'))['VsCheckbox']
    VsModal: (typeof import('../'))['VsModal']
    VsInput: (typeof import('../'))['VsInput']
    VsNavbar: (typeof import('../'))['VsNavbar']
    VsNavbarItem: (typeof import('../'))['VsNavbarItem']
    VsNavbarGroup: (typeof import('../'))['VsNavbarGroup']
    VsOption: (typeof import('../'))['VsOption']
    VsOptionGroup: (typeof import('../'))['VsOptionGroup']
    VsPagination: (typeof import('../'))['VsPagination']
    VsRadio: (typeof import('../'))['VsRadio']
    VsSelect: (typeof import('../'))['VsSelect']
    VsSidebarGroup: (typeof import('../'))['VsSidebarGroup']
    VsSidebarItem: (typeof import('../'))['VsSidebarItem']
    VsSidebar: (typeof import('../'))['VsSidebar']
    VsSwitch: (typeof import('../'))['VsSwitch']
    VsTable: (typeof import('../'))['VsTable']
    VsTh: (typeof import('../'))['VsTh']
    VsTd: (typeof import('../'))['VsTd']
    VsTr: (typeof import('../'))['VsTr']
    VsNotification: (typeof import('../'))['VsNotification']
  }
}

export {}
