import { useNavigate } from "react-router-dom";
import { companies } from "../../constants/at_risk.constants";
import { useAtRiskStore } from "../../store/at-risk.store";
import type { AtRiskCompaniesType } from "../../types/atrisk_companies.types";
import { getFormatDate } from "../../utils/functions/getFormatDate";
import { getScoreColor } from "../../utils/getScoreColor";
import { Card } from "@rightcom/right-lib";

const ARCompany = ({ ...data }: AtRiskCompaniesType) => {
  const setIsOpenedModal = useAtRiskStore.getState().setIsOpenedModal;
  const navigate = useNavigate();

  const currentCompany = companies.find(
    (company) => company.id === data.company_id,
  );

  const handleModal = () => {
    setIsOpenedModal(true, data.company_id);
  };

  const handleCompanyProfile = (id: string) => {
    navigate("/company-profile", {
      state: { id },
    });
  };

  return (
    currentCompany && (
      <Card className="ar-card">
        <Card.Body className="ar-head">
          <div
            className="ar-logo"
            style={{
              background: "#fee2e2",
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
              onClick={() => handleCompanyProfile(data.company_id)}
            >
              View Profile →
            </button>
          </div>
        </Card.Body>
        <div className="ar-body">
          <div className="ar-flags">
            {data.saas_health < 50 && (
              <div className="ar-flag ar-flag-r">
                🔴 SaaS adoption critically low ({data.saas_health}%)
              </div>
            )}
            {data.relationship < 50 && (
              <div className="ar-flag ar-flag-r">
                🔴 Relationship health deteriorating ({data.relationship}%)
              </div>
            )}

            <div className="ar-flag ar-flag-a">
              ⚠ Onboarding behind schedule
            </div>
            <div className="ar-flag ar-flag-a">
              ⚠ No QBR completed since onboarding
            </div>
          </div>
          <div className="ar-metrics">
            <div className="ar-metric">
              <div
                className="ar-metric-val"
                style={{ color: getScoreColor(data.saas_health).color }}
              >
                {data.saas_health}%
              </div>
              <div className="ar-metric-lbl">SaaS Health</div>
            </div>
            <div className="ar-metric">
              <div
                className="ar-metric-val"
                style={{ color: getScoreColor(data.hw_health).color }}
              >
                {data.hw_health}%
              </div>
              <div className="ar-metric-lbl">HW Health</div>
            </div>
            <div className="ar-metric">
              <div
                className="ar-metric-val"
                style={{ color: getScoreColor(data.relationship).color }}
              >
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
      </Card>
    )
  );
};

export default ARCompany;
