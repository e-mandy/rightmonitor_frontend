import { APP_COLORS } from "../../constants/colors.constants";
import type { Color } from "../../types/colors.types";

export const getTargetColor = (value: Color) => {
  return APP_COLORS[value];
};
