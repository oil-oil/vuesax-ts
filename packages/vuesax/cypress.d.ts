import { mount, VueTestUtils } from "cypress/vue";

type MountParams = Parameters<typeof mount>;

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Helper mount function for Vue Components
       * @param component Vue Component or JSX Element to mount
       * @param options Options passed to Vue Test Utils
       */
      mount(component: any, options?: OptionsParam): Chainable<any>;
    }
  }
  type VueWrapper = InstanceType<(typeof VueTestUtils)["VueWrapper"]>;
}
