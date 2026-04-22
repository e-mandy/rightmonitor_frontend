import { atRiskCompanies } from "../../constants/at_risk.constants";

const TotalARR = () => {
  const totalARR = atRiskCompanies
    .map((company) => company.arr)
    .reduce((total, currentCompanyARR) => total + currentCompanyARR, 0);
  return (
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
        <strong>${totalARR}</strong>
      </span>
    </div>
  );
};

export default TotalARR;
