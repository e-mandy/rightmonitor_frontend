import ARCompany from "../components/at_risk/ARCompany";
import ScoreDetailsCard from "../components/at_risk/ScoreDetailsCard";
import TotalARR from "../components/at_risk/TotalARR";
import TotalAtRiskCompanies from "../components/at_risk/TotalAtRiskCompanies";
import { atRiskCompanies } from "../constants/at_risk.constants";
import type { AtRiskCompaniesType } from "../types/atrisk_companies.types";

const AtRisk = () => {
  return (
    <div className="view" id="view-atrisk">
      <div className="ph">
        <div>
          <div className="ph-title">At-Risk Companies</div>
          <TotalAtRiskCompanies />
        </div>
        <div className="ph-right">
          <button className="btn btn-primary">Schedule All QBRs</button>
        </div>
      </div>
      <TotalARR />
      {atRiskCompanies.map((element: AtRiskCompaniesType) => (
        <ARCompany {...element} />
      ))}
      {/** Modal Card */}
      <ScoreDetailsCard />
    </div>
  );
};

export default AtRisk;
