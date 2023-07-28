import { DefineComponent, HTMLAttributes } from "vue";

declare global {
  type Size = "xs" | "sm" | "md" | "lg" | "xl";
  type Status = "success" | "warn" | "danger" | "dark" | "primary";
  type RGB = `rgb(${number}, ${number}, ${number})`;
  type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
  type HEX = `#${string}`;
  type Color = Status | RGB | RGBA | HEX;

  type CompWithAttr<Comp, Attr extends HTMLAttributes> = Comp &
    DefineComponent<Attr>;

  type GetPropsType<T> = {
    [Key in keyof T]: T[Key]["type"] extends abstract new (...args: any) => any
      ? ReturnType<InstanceType<T[Key]["type"]>["valueOf"]>
      : T[Key]["type"] extends PropType<infer R>
      ? R
      : unknown;
  };
}
