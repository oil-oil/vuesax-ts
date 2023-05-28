import { DefineComponent } from "vue";

declare global {
  type Size = "xs" | "sm" | "md" | "lg" | "xl";
  type Status = "success" | "warn" | "danger" | "primary";

  type CompWithAttr<Comp, Attr extends HTMLAttributes> = Comp &
    DefineComponent<Attr>;
}
