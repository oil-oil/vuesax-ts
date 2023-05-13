import { Size } from "@/types/size";

export type ButtonProps = {
  disabled?: boolean;
  ripple?: string;
  activeDisabled?: boolean;
  flat?: boolean;
  border?: boolean;
  gradient?: boolean;
  relief?: boolean;
  transparent?: boolean;
  shadow?: boolean;
  floating?: boolean;
  icon?: boolean;
  circle?: boolean;
  square?: boolean;
  size?: Size;
  loading?: boolean;
  upload?: boolean;
  block?: boolean;
  animationType?: string;
  animateInactive?: boolean;
  to?: string | null;
  href?: string | null;
  blank?: boolean;
};
