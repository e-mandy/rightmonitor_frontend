import ARCompany from "../components/at_risk/ARCompany";
import TotalARR from "../components/at_risk/TotalARR";
import TotalAtRiskCompanies from "../components/at_risk/TotalAtRiskCompanies";
import type { CustomerScoreType } from "../components/dashboard/CustomerScore";
import { useCompanyMetrics } from "../hooks/useCompaniesMetrics";

const AtRisk = () => {
  const { getCompanyWithMetrics } = useCompanyMetrics();
  return (
    <div className="view" id="view-atrisk">
      <div className="ph">
        <div>
          <div className="ph-title">At-Risk Companies</div>
          <TotalAtRiskCompanies />
        </div>
      </div>
      <TotalARR />
      {getCompanyWithMetrics("at-risk").map((element: CustomerScoreType) => (
        <ARCompany {...element} />
      ))}
    </div>
  );
};

export default AtRisk;
