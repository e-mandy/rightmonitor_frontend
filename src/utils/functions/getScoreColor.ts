import { getTargetColor } from "./getTargetColor";

export const getScoreColor = (score: number) => {
  if (score < 50) {
    return { color: getTargetColor("red").color, bg: getTargetColor("red").bg };
  } else if (score >= 50 && score < 70) {
    return {
      color: getTargetColor("orange").color,
      bg: getTargetColor("orange").bg,
    };
  } else {
    return {
      color: getTargetColor("green").color,
      bg: getTargetColor("green").bg,
    };
  }
};
