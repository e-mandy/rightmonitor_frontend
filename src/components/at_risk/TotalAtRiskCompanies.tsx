import { atRiskCompanies } from "../../constants/at_risk.constants";

const TotalAtRiskCompanies = () => {
  const total = atRiskCompanies.length;
  return (
    <div className="ph-sub">
      {total} companies requiring immediate attention
    </div>
  );
};

export default TotalAtRiskCompanies;
