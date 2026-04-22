import { companies } from "../../constants/at_risk.constants";
import { useAtRiskStore } from "../../store/at-risk.store";
import type { AtRiskCompaniesType } from "../../types/atrisk_companies.types";
import { getFormatDate } from "../../utils/functions/getFormatDate";

const ARCompany = ({ ...data }: AtRiskCompaniesType) => {
  const setIsOpenedModal = useAtRiskStore.getState().setIsOpenedModal;

  const currentCompany = companies.find(
    (company) => company.id === data.company_id,
  );

  const handleModal = () => {
    setIsOpenedModal(true, data.company_id);
  };
  return (
    currentCompany && (
      <div className="ar-card">
        <div className="ar-head">
          <div
            className="ar-logo"
            style={{
              background: "#fee2e2",
              color: "#b91c1c",
              overflow: "hidden",
            }}
          >
            <img src={currentCompany?.logo} alt="" />
          </div>
          <div>
            <div className="ar-name">{currentCompany?.name}</div>
            <div className="ar-since">
              {currentCompany?.industry} · {currentCompany?.region} · Client
              since {getFormatDate(currentCompany.created_at)}
            </div>
          </div>
          <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <div className="ar-score-val" style={{ color: "#b91c1c" }}>
              {data.health_score}
            </div>
            <div
              style={{ fontSize: "10px", color: "var(--t3)", fontWeight: 600 }}
            >
              Health Score
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px", marginLeft: "16px" }}>
            <button
              className="btn btn-ghost open-modal"
              data-name="BCEAO Sénégal"
              data-init="BC"
              data-bg="#fee2e2"
              data-col="#b91c1c"
              data-score="38"
              onClick={handleModal}
            >
              Score Details
            </button>
            <button
              className="btn btn-blue co-row"
              data-name="BCEAO Sénégal"
              data-init="BC"
              data-bg="#fee2e2"
              data-col="#b91c1c"
              data-score="38"
              data-sbg="#fee2e2"
              data-scol="#b91c1c"
            >
              View Profile →
            </button>
          </div>
        </div>
        <div className="ar-body">
          <div className="ar-flags">
            <div className="ar-flag ar-flag-r">
              🔴 SaaS adoption critically low ({data.saas_health}%)
            </div>
            <div className="ar-flag ar-flag-r">
              🔴 Relationship health deteriorating ({data.relationship}%)
            </div>
            <div className="ar-flag ar-flag-a">
              ⚠ Onboarding behind schedule
            </div>
            <div className="ar-flag ar-flag-a">
              ⚠ No QBR completed since onboarding
            </div>
          </div>
          <div className="ar-metrics">
            <div className="ar-metric">
              <div className="ar-metric-val" style={{ color: "#b91c1c" }}>
                {data.saas_health}%
              </div>
              <div className="ar-metric-lbl">SaaS Health</div>
            </div>
            <div className="ar-metric">
              <div className="ar-metric-val" style={{ color: "#b45309" }}>
                {data.hw_health}%
              </div>
              <div className="ar-metric-lbl">HW Health</div>
            </div>
            <div className="ar-metric">
              <div className="ar-metric-val" style={{ color: "#b91c1c" }}>
                {data.relationship}%
              </div>
              <div className="ar-metric-lbl">Relationship</div>
            </div>
            <div className="ar-metric">
              {/** We have to fix the value here */}
              <div className="ar-metric-val">${data.arr}</div>
              <div className="ar-metric-lbl">ARR at Risk</div>
            </div>
          </div>
          <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
            <button className="btn btn-primary">📞 Call Now</button>
            <button className="btn btn-ghost">📅 Schedule QBR</button>
            <button className="btn btn-ghost">✉ Send Email</button>
          </div>
        </div>
      </div>
    )
  );
};

export default ARCompany;
