import { ref, createApp, onMounted, onUnmounted, computed } from "vue";

import Modal, { ModalProps } from "./Modal";
import { VsButton } from "@/components";

type ModalHookProps = Omit<ModalProps, "modelValue"> & {
  title?: string;
  content?: string;
  cancelText?: string;
  confirmText?: string;
  showCancel?: boolean;
  showConfirm?: boolean;
  noFooter?: boolean;
};

const useModal = (props: ModalHookProps) => {
  const isVisible = ref(false);

  const {
    title = "",
    content = "",
    cancelText = "Cancel",
    confirmText = "Confirm",
    showCancel = true,
    showConfirm = true,
    noFooter = false,
    ...rest
  } = props;

  const ModalDom = document.createElement("div");
  const app = computed(() =>
    createApp({
      render: () => (
        <Modal
          v-model={isVisible.value}
          {...rest}
          v-slots={{
            header: () => (
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                {title}
              </span>
            ),
            footer: () =>
              !noFooter && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  {showCancel && (
                    <VsButton transparent dark>
                      {cancelText || "Cancel"}
                    </VsButton>
                  )}
                  {showConfirm && (
                    <VsButton transparent>{confirmText || "Confirm"}</VsButton>
                  )}
                </div>
              ),
          }}
        >
          {props?.content}
        </Modal>
      ),
    })
  );

  const mountModal = () => {
    app.value.mount(ModalDom);
    document.body.appendChild(ModalDom);
  };

  const unMountModal = () => {
    app.value.unmount();
    document.body.removeChild(ModalDom);
  };

  onMounted(() => {
    mountModal();
  });

  onUnmounted(() => {
    unMountModal();
  });

  const open = () => {
    isVisible.value = true;
  };

  const close = () => {
    isVisible.value = false;
  };

  return { open, close };
};

export default useModal;
