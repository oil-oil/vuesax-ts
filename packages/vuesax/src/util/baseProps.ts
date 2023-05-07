import { PropType } from "vue";
import { getColor } from ".";

const baseProps = {
  color: {
    type: String,
    default: null,
  },
  getColor:{
    type:Function as PropType<typeof getColor>,
    default:getColor
  },
  danger: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  warn: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  componentColor: {
    type: String,
    default:null
  },
};

export default baseProps;
