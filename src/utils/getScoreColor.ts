export const getScoreColor = (score: number) => {
  if (score < 35) {
    return { color: "#b91c1c", bg: "#fee2e2" };
  } else if (score >= 35 && score < 55) {
    return { color: "#b45309", bg: "#fee2e2" };
  } else {
    return { color: "#80B500", bg: "#dcfce7" };
  }
};
