import { App, Plugin } from "vue";

import Modal from "./Modal.tsx";
import type { ModalProps } from "./Modal.tsx";

Modal.install = (app: App) => {
  app.component(Modal.name, Modal);
  return app;
};

export type VsModalProps = ModalProps;
export default Modal as typeof Modal & Plugin;
