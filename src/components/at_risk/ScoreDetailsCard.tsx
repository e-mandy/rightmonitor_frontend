import { atRiskCompanies, companies } from "../../constants/at_risk.constants";
import { useAtRiskStore } from "../../store/at-risk.store";
import { getFormatDate } from "../../utils/functions/getFormatDate";
import { getScoreColor } from "../../utils/getScoreColor";

const ScoreDetailsCard = () => {
  const setIsOpenedModal = useAtRiskStore.getState().setIsOpenedModal;
  const { currentCompanyId, isOpenedModal } = useAtRiskStore();

  const company = companies.find((company) => company.id === currentCompanyId);
  const ar_data = atRiskCompanies.find(
    (company) => company.company_id === currentCompanyId,
  );
  return (
    company &&
    ar_data && (
      <div
        className={`rm-modal-overlay ${isOpenedModal ? "open" : ""}`}
        id="rm-modal"
        onClick={() => setIsOpenedModal(false, "")}
      >
        <div className="rm-modal" onClick={(e) => e.stopPropagation()}>
          <div className="rm-modal-head">
            <div className="rm-modal-title">Health Score Breakdown</div>
            <div
              className="rm-modal-close"
              id="rm-modal-close"
              onClick={() => setIsOpenedModal(false, "")}
            >
              ✕
            </div>
          </div>
          <div className="rm-modal-body">
            <div className="rm-modal-co">
              <div className="rm-modal-co-av" id="m-logo">
                {company.name.slice(0, 2).toUpperCase()}
              </div>
              <div style={{ flex: 1 }}>
                <div className="rm-modal-co-name" id="m-name">
                  {company.name}
                </div>
                <div className="rm-modal-co-sub">
                  {`${company.industry} · ${company.region} · Client since ${getFormatDate(company.created_at)}`}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 900,
                    letterSpacing: "-1px",
                    lineHeight: 1,
                    color: getScoreColor(ar_data.health_score),
                  }}
                  id="m-score"
                >
                  {ar_data?.health_score}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--t3)",
                    fontWeight: 600,
                  }}
                >
                  Overall Score
                </div>
                <span
                  className={`bx ${ar_data?.health_score > 50 ? "bx-g" : "bx-r"}`}
                  id="m-bx"
                >
                  {ar_data.health_score > 50 ? "Healthy" : "At Risk"}
                </span>
              </div>
            </div>
            <div className="rm-modal-dim">
              <div className="rm-modal-dim-head">
                <div className="rm-modal-dim-name">SaaS Health</div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span className="rm-modal-dim-wt">Weight: 40%</span>
                  <span
                    className="rm-modal-dim-score"
                    style={{ color: getScoreColor(ar_data.saas_health) }}
                  >
                    {ar_data.saas_health} / 100
                  </span>
                </div>
              </div>
              <div className="rm-modal-bar-wrap">
                <div
                  className="rm-modal-bar"
                  style={{
                    width: ar_data.saas_health + "%",
                    background: getScoreColor(ar_data.saas_health),
                  }}
                ></div>
              </div>
              <div className="rm-modal-sub-grid">
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">Platform Usage</div>
                  <div
                    className="rm-modal-sub-val"
                    style={{ color: "#15803d" }}
                  >
                    Daily
                  </div>
                  <div
                    className="rm-modal-sub-trend"
                    style={{ color: "#15803d" }}
                  >
                    ▲ +8% sessions this month
                  </div>
                </div>
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">Feature Adoption</div>
                  <div className="rm-modal-sub-val">6 / 8</div>
                  <div
                    className="rm-modal-sub-trend"
                    style={{ color: "var(--t3)" }}
                  >
                    RightData unused
                  </div>
                </div>
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">Active Users</div>
                  <div
                    className="rm-modal-sub-val"
                    style={{ color: "#15803d" }}
                  >
                    14 / 16
                  </div>
                  <div
                    className="rm-modal-sub-trend"
                    style={{ color: "var(--t3)" }}
                  >
                    2 pending login
                  </div>
                </div>
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">SLA Compliance</div>
                  <div
                    className="rm-modal-sub-val"
                    style={{ color: "#15803d" }}
                  >
                    96%
                  </div>
                  <div
                    className="rm-modal-sub-trend"
                    style={{ color: "#15803d" }}
                  >
                    ▲ Above 90% target
                  </div>
                </div>
              </div>
            </div>
            <div className="rm-modal-dim">
              <div className="rm-modal-dim-head">
                <div className="rm-modal-dim-name">Hardware Health</div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span className="rm-modal-dim-wt">Weight: 30%</span>
                  <span
                    className="rm-modal-dim-score"
                    style={{ color: getScoreColor(ar_data.health_score) }}
                  >
                    {ar_data.health_score} / 100
                  </span>
                </div>
              </div>
              <div className="rm-modal-bar-wrap">
                <div
                  className="rm-modal-bar"
                  style={{
                    width: ar_data.hw_health + "%",
                    background: getScoreColor(ar_data.hw_health),
                  }}
                ></div>
              </div>
              <div className="rm-modal-sub-grid">
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">Active Terminals</div>
                  <div
                    className="rm-modal-sub-val"
                    style={{ color: "#b45309" }}
                  >
                    14 / 16
                  </div>
                  <div
                    className="rm-modal-sub-trend"
                    style={{ color: "#b45309" }}
                  >
                    2 offline
                  </div>
                </div>
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">RMA Rate</div>
                  <div
                    className="rm-modal-sub-val"
                    style={{ color: "#15803d" }}
                  >
                    2.1%
                  </div>
                  <div
                    className="rm-modal-sub-trend"
                    style={{ color: "#15803d" }}
                  >
                    ▼ Below 5% threshold
                  </div>
                </div>
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">Device Uptime</div>
                  <div
                    className="rm-modal-sub-val"
                    style={{ color: "#15803d" }}
                  >
                    98.2%
                  </div>
                </div>
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">Offline Errors</div>
                  <div className="rm-modal-sub-val">3</div>
                  <div
                    className="rm-modal-sub-trend"
                    style={{ color: "var(--t3)" }}
                  >
                    This month
                  </div>
                </div>
              </div>
            </div>
            <div className="rm-modal-dim">
              <div className="rm-modal-dim-head">
                <div className="rm-modal-dim-name">Relationship Health</div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span className="rm-modal-dim-wt">Weight: 30%</span>
                  <span
                    className="rm-modal-dim-score"
                    style={{ color: getScoreColor(ar_data.relationship) }}
                  >
                    {ar_data.relationship} / 100
                  </span>
                </div>
              </div>
              <div className="rm-modal-bar-wrap">
                <div
                  className="rm-modal-bar"
                  style={{
                    width: ar_data.relationship + "%",
                    background: getScoreColor(ar_data.relationship),
                  }}
                ></div>
              </div>
              <div className="rm-modal-sub-grid">
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">NPS Score</div>
                  <div
                    className="rm-modal-sub-val"
                    style={{ color: "#15803d" }}
                  >
                    +68
                  </div>
                  <div
                    className="rm-modal-sub-trend"
                    style={{ color: "#15803d" }}
                  >
                    ▲ +4 vs last quarter
                  </div>
                </div>
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">Support Sentiment</div>
                  <div className="rm-modal-sub-val">Positive</div>
                  <div
                    className="rm-modal-sub-trend"
                    style={{ color: "#15803d" }}
                  >
                    84% positive
                  </div>
                </div>
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">QBRs Completed</div>
                  <div
                    className="rm-modal-sub-val"
                    style={{ color: "#15803d" }}
                  >
                    2 / 2
                  </div>
                </div>
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">Exec Alignment</div>
                  <div
                    className="rm-modal-sub-val"
                    style={{ color: "#15803d" }}
                  >
                    Strong
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
              <button
                className="btn btn-ghost"
                id="rm-modal-cancel"
                style={{ flex: 1, justifyContent: "center" }}
                onClick={() => setIsOpenedModal(false, "")}
              >
                Close
              </button>
              <button
                className="btn btn-primary"
                id="rm-modal-profile"
                style={{ flex: 1, justifyContent: "center" }}
              >
                View Full Profile →
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ScoreDetailsCard;
