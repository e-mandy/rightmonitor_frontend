import { useNavigate } from "react-router-dom";
import { useCompanyMetrics } from "../../hooks/useCompaniesMetrics";
import { useCurrentCompanyStore } from "../../store/current-company.store";
import { getCompanyStatus } from "../../utils/functions/getCompanyStatus";
import { getFormatDate } from "../../utils/functions/getFormatDate";
import { getScoreColor } from "../../utils/functions/getScoreColor";
import { getTargetColor } from "../../utils/functions/getTargetColor";
import type { CustomerScoreType } from "../dashboard/CustomerScore";
import { Modal } from "@rightcom/right-lib";

const ScoreDetailsCard = () => {
  const setIsOpenedModal = useCurrentCompanyStore.getState().setIsOpenedModal;
  const { currentCompanyId, isOpenedModal } = useCurrentCompanyStore();
  const { getCompanyWithMetrics } = useCompanyMetrics();
  const navigate = useNavigate();

  const companyMetric: undefined | CustomerScoreType = getCompanyWithMetrics(
    "all",
  ).find(
    (company: CustomerScoreType) => company.company_id === currentCompanyId,
  );

  const handleCompanyProfile = (id: string) => {
    setIsOpenedModal(false, "");
    navigate("/company-profile", {
      state: { id },
    });
  };
  return (
    companyMetric && (
      <Modal
        show={isOpenedModal}
        onHide={() => setIsOpenedModal(false, "")}
        id="rm-modal"
        onClick={() => setIsOpenedModal(false, "")}
      >
        <div className="rm-modal" onClick={(e) => e.stopPropagation()}>
          <Modal.Header closeButton className="rm-modal-head">
            <div className="rm-modal-title">Health Score Breakdown</div>
          </Modal.Header>
          <Modal.Body className="rm-modal-body">
            <div className="rm-modal-co">
              <div className="rm-modal-co-av" id="m-logo">
                {companyMetric.name.slice(0, 2).toUpperCase()}
              </div>
              <div style={{ flex: 1 }}>
                <div className="rm-modal-co-name" id="m-name">
                  {companyMetric.name}
                </div>
                <div className="rm-modal-co-sub">
                  {`${companyMetric.industry} · ${companyMetric?.region} · Client since ${getFormatDate(companyMetric?.created_at)}`}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 900,
                    letterSpacing: "-1px",
                    lineHeight: 1,
                    color: getScoreColor(companyMetric?.overall_health).color,
                  }}
                  id="m-score"
                >
                  {Math.round(companyMetric?.overall_health)}
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
                  className="bx"
                  style={{
                    backgroundColor: getScoreColor(companyMetric.overall_health)
                      .bg,
                    color: getScoreColor(companyMetric.overall_health).color,
                  }}
                  id="m-bx"
                >
                  {getCompanyStatus(
                    companyMetric.overall_health,
                  )[0].toUpperCase() +
                    getCompanyStatus(companyMetric.overall_health).slice(1)}
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
                    style={{
                      color: getScoreColor(companyMetric.saas_health).color,
                    }}
                  >
                    {Math.round(companyMetric.saas_health)} / 100
                  </span>
                </div>
              </div>
              <div className="rm-modal-bar-wrap">
                <div
                  className="rm-modal-bar"
                  style={{
                    width: companyMetric.saas_health + "%",
                    background: getScoreColor(companyMetric.saas_health).color,
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
                    style={{
                      color: getScoreColor(companyMetric?.hardware_health)
                        .color,
                    }}
                  >
                    {Math.round(companyMetric?.hardware_health)} / 100
                  </span>
                </div>
              </div>
              <div className="rm-modal-bar-wrap">
                <div
                  className="rm-modal-bar"
                  style={{
                    width: companyMetric?.hardware_health + "%",
                    background: getScoreColor(companyMetric?.hardware_health)
                      .color,
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
                    {Math.round(companyMetric.rma_rate)}%
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
                    style={{
                      color: getScoreColor(companyMetric?.relationship_health)
                        .color,
                    }}
                  >
                    {Math.round(companyMetric?.relationship_health)} / 100
                  </span>
                </div>
              </div>
              <div className="rm-modal-bar-wrap">
                <div
                  className="rm-modal-bar"
                  style={{
                    width: companyMetric?.relationship_health + "%",
                    background: getScoreColor(
                      companyMetric?.relationship_health,
                    ).color,
                  }}
                ></div>
              </div>
              <div className="rm-modal-sub-grid">
                <div className="rm-modal-sub">
                  <div className="rm-modal-sub-label">NPS Score</div>
                  <div
                    className="rm-modal-sub-val"
                    style={{
                      color:
                        companyMetric.implementation_nps.nps < 0
                          ? getTargetColor("red").color
                          : getTargetColor("green").color,
                    }}
                  >
                    {Math.round(companyMetric.implementation_nps.nps)}
                  </div>
                  <div
                    className="rm-modal-sub-trend"
                    style={{
                      color:
                        companyMetric.implementation_nps.nps < 0
                          ? getTargetColor("red").color
                          : getTargetColor("green").color,
                    }}
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
                onClick={() => handleCompanyProfile(companyMetric.company_id)}
              >
                View Full Profile →
              </button>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    )
  );
};

export default ScoreDetailsCard;
