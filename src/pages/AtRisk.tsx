import ARCompany from "../components/at_risk/ARCompany";
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
      <div
        style={{
          background: "#fee2e2",
          border: "1px solid #fca5a5",
          borderRadius: "var(--r3)",
          padding: "12px 16px",
          marginBottom: "16px",
          fontSize: "12px",
          color: "#b91c1c",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="#b91c1c" stroke-width="1.5" />
          <path
            d="M8 4v5M8 11v.5"
            stroke="#b91c1c"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <span>
          High churn risk. Immediate outreach required. Combined ARR at risk:{" "}
          <strong>$38,400</strong>
        </span>
      </div>
      {atRiskCompanies.map((element: AtRiskCompaniesType) => (
        <ARCompany {...element} />
      ))}
    </div>
  );
};

export default AtRisk;
