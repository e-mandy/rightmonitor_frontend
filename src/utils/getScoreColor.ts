export const getScoreColor = (score: number): string => {
  if (score < 35) {
    return "#b91c1c";
  } else if (score >= 35 && score < 55) {
    return "#b45309";
  } else {
    return "#15803d";
  }
};
