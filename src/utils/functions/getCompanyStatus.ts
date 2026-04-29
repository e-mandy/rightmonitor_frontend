export const getCompanyStatus = (
  health_score: number,
): "healthy" | "at risk" | "warning" => {
  if (health_score >= 70) return "healthy";
  if (health_score >= 50 && health_score < 70) return "warning";
  return "at risk";
};
