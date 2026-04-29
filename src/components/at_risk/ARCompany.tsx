import { useNavigate } from "react-router-dom";
import { useCurrentCompanyStore } from "../../store/current-company.store";
import { getFormatDate } from "../../utils/functions/getFormatDate";
import { Card } from "@rightcom/right-lib";
import { getScoreColor } from "../../utils/functions/getScoreColor";
import type { CustomerScoreType } from "../dashboard/CustomerScore";

const ARCompany = ({ ...data }: CustomerScoreType) => {
  const setIsOpenedModal = useCurrentCompanyStore.getState().setIsOpenedModal;
  const navigate = useNavigate();

  const handleModal = () => {
    setIsOpenedModal(true, data.company_id);
  };

  const handleCompanyProfile = (id: string) => {
    navigate("/company-profile", {
      state: { id },
    });
  };

  return (
    <Card className="ar-card">
      <Card.Body className="ar-head">
        <div className="rm-modal-co-av" id="m-logo">
          {data.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <div className="ar-name">{data?.name}</div>
          <div className="ar-since">
            {data?.industry} · {data?.region} · Client since{" "}
            {getFormatDate(data.created_at)}
          </div>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div className="ar-score-val" style={{ color: "#b91c1c" }}>
            {Math.round(data.overall_health)}
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
            data-bg="#fee2e2"
            data-col="#b91c1c"
            data-score="38"
            onClick={handleModal}
          >
            Score Details
          </button>
          <button
            className="btn btn-blue co-row"
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
              🔴 SaaS adoption critically low ({Math.round(data.saas_health)}%)
            </div>
          )}
          {data.relationship_health < 50 && (
            <div className="ar-flag ar-flag-r">
              🔴 Relationship health deteriorating (
              {Math.round(data.relationship_health)}%)
            </div>
          )}

          <div className="ar-flag ar-flag-a">⚠ Onboarding behind schedule</div>
          <div className="ar-flag ar-flag-a">
            ⚠ No QBR completed since onboarding
          </div>
        </div>
        <div className="ar-metrics">
          <div className="ar-metric">
            <div
              className="ar-metric-val"
              style={{
                color: getScoreColor(Math.round(data.saas_health)).color,
              }}
            >
              {Math.round(data.saas_health)}%
            </div>
            <div className="ar-metric-lbl">SaaS Health</div>
          </div>
          <div className="ar-metric">
            <div
              className="ar-metric-val"
              style={{ color: getScoreColor(data.hardware_health).color }}
            >
              {Math.round(data.hardware_health)}%
            </div>
            <div className="ar-metric-lbl">HW Health</div>
          </div>
          <div className="ar-metric">
            <div
              className="ar-metric-val"
              style={{ color: getScoreColor(data.relationship_health).color }}
            >
              {Math.round(data.relationship_health)}%
            </div>
            <div className="ar-metric-lbl">Relationship</div>
          </div>
          <div className="ar-metric">
            {/** We have to fix the value here */}
            <div className="ar-metric-val">$ 143000</div>
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
  );
};

export default ARCompany;
