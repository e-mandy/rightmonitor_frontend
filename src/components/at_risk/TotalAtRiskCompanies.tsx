import { useCompanyMetrics } from "../../hooks/useCompaniesMetrics";

const TotalAtRiskCompanies = () => {
  const { getCompanyWithMetrics } = useCompanyMetrics();
  const total = getCompanyWithMetrics("at-risk")
    ? getCompanyWithMetrics("at-risk").length
    : 0;
  return (
    <div className="ph-sub">
      {total} companies requiring immediate attention
    </div>
  );
};

export default TotalAtRiskCompanies;
