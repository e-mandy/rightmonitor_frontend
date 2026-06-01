import { Link, useParams } from "react-router-dom";
import { getScoreColor } from "../../utils/functions/getScoreColor";
import { getCompanyStatus } from "../../utils/functions/getCompanyStatus";
import { getTargetColor } from "../../utils/functions/getTargetColor";
import { useCompany } from "../../hooks/useCompany";
import { Spinner } from "react-bootstrap";

const Overview = () => {
  const { company_id } = useParams<{ company_id: string }>();
  const {
    fetchCompanyMetrics: { data: companyMetrics, isPending, isSuccess },
  } = useCompany();

  const circonference = 314;
  const offset = companyMetrics
    ? circonference - (companyMetrics?.overall_health / 100) * circonference
    : 314;

  return (
    isSuccess &&
    !!companyMetrics && (
      <div className="tp active" id="pane-overview">
        <div className="sec-t">
          Health Score Breakdown{" "}
          <Link
            to={{
              pathname: `/company-profile/${company_id}/health/details`,
            }}
          >
            View more details
          </Link>
        </div>
        <div className="score-ov">
          <div style={{ textAlign: "center", width: "140px", flexShrink: 0 }}>
            <div className="score-ring">
              <svg viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#f0f0f0"
                  stroke-width="10"
                />
                <circle
                  id="co-arc"
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke={
                    getScoreColor(companyMetrics?.overall_health ?? 0).color
                  }
                  stroke-width="10"
                  stroke-dasharray="314"
                  stroke-dashoffset={offset}
                  stroke-linecap="round"
                />
              </svg>
              <div className="score-center">
                <div className="score-num" id="co-score-num">
                  {isPending ? (
                    <Spinner />
                  ) : (
                    Math.round(companyMetrics?.overall_health ?? 0)
                  )}
                </div>
                <div className="score-lbl">/ 100</div>
              </div>
            </div>
            <span
              className="score-stat"
              id="co-score-stat"
              style={{
                background: getScoreColor(companyMetrics?.overall_health ?? 0)
                  .bg,
                color: getScoreColor(companyMetrics?.overall_health ?? 0).color,
              }}
            >
              {getCompanyStatus(
                companyMetrics?.overall_health ?? 0,
              )[0].toUpperCase() +
                getCompanyStatus(companyMetrics?.overall_health ?? 0).slice(1)}
            </span>
          </div>
          <div>
            <div className="dim-row">
              <div className="dim-label">
                SaaS Health
                <div className="dim-sub">Platform usage &amp; adoption</div>
              </div>
              <div className="dim-bw">
                <div
                  className="dim-b"
                  style={{
                    width: companyMetrics?.saas_health + "%",
                    background: getScoreColor(companyMetrics?.saas_health ?? 0)
                      .color,
                  }}
                ></div>
              </div>
              <div
                className="dim-sc"
                style={{
                  color: getScoreColor(companyMetrics?.saas_health ?? 0).color,
                }}
              >
                {Math.round(companyMetrics?.saas_health ?? 0)}
              </div>
              <div className="dim-wt">×40%</div>
            </div>
            <div className="dim-row">
              <div className="dim-label">
                Hardware Health
                <div className="dim-sub">Device uptime &amp; RMA</div>
              </div>
              <div className="dim-bw">
                <div
                  className="dim-b"
                  style={{
                    width: companyMetrics?.hardware_health + "%",
                    background: getScoreColor(
                      companyMetrics?.hardware_health ?? 0,
                    ).color,
                  }}
                ></div>
              </div>
              <div
                className="dim-sc"
                style={{
                  color: getScoreColor(companyMetrics?.hardware_health).color,
                }}
              >
                {Math.round(companyMetrics?.hardware_health)}
              </div>
              <div className="dim-wt">×30%</div>
            </div>
            <div className="dim-row">
              <div className="dim-label">
                Relationship Health
                <div className="dim-sub">NPS, QBRs, sentiment</div>
              </div>
              <div className="dim-bw">
                <div
                  className="dim-b"
                  style={{
                    width: companyMetrics?.relationship_health + "%",
                    background: getScoreColor(
                      companyMetrics?.relationship_health,
                    ).color,
                  }}
                ></div>
              </div>
              <div
                className="dim-sc"
                style={{
                  color: getScoreColor(companyMetrics?.relationship_health)
                    .color,
                }}
              >
                {Math.round(companyMetrics?.relationship_health)}
              </div>
              <div className="dim-wt">×30%</div>
            </div>
          </div>
        </div>
        <div className="sec-t">Key Metrics</div>
        <div className="kpi-mini">
          <div className="km">
            <div className="km-lbl">NPS Score</div>
            <div
              className="km-val"
              style={{
                color:
                  companyMetrics?.implementation_nps.nps < 0
                    ? getTargetColor("red").color
                    : getTargetColor("green").color,
              }}
            >
              {Math.round(companyMetrics?.implementation_nps.nps)}
            </div>
            <div
              className="km-sub"
              style={{
                color:
                  companyMetrics?.implementation_nps.nps < 0
                    ? getTargetColor("red").color
                    : getTargetColor("green").color,
              }}
            >
              ▲ +4 vs last quarter
            </div>
          </div>
          <div className="km">
            <div className="km-lbl">Avg. Handling Time</div>
            <div className="km-val">8m 22s</div>
            <div className="km-sub" style={{ color: "var(--t3)" }}>
              RightQ · This month
            </div>
          </div>
          <div className="km">
            <div className="km-lbl">Open Complaints</div>
            <div className="km-val c-a">3</div>
            <div className="km-sub c-a">2 escalated</div>
          </div>
          <div className="km">
            <div className="km-lbl">Active Devices</div>
            <div className="km-val c-b">14 / 16</div>
            <div className="km-sub" style={{ color: "var(--t3)" }}>
              2 offline
            </div>
          </div>
          <div className="km">
            <div className="km-lbl">Tickets This Month</div>
            <div className="km-val">1,243</div>
            <div className="km-sub c-g">▲ +12% vs last mo.</div>
          </div>
          <div className="km">
            <div className="km-lbl">Onboarding</div>
            <div className="km-val c-g">100%</div>
            <div className="km-sub c-g">Completed Day 12</div>
          </div>
          <div className="km">
            <div className="km-lbl">Survey Response Rate</div>
            <div className="km-val">74%</div>
            <div className="km-sub" style={{ color: "var(--t3)" }}>
              Industry avg: 60%
            </div>
          </div>
          <div className="km">
            <div className="km-lbl">Contract Renewal</div>
            <div className="km-val c-b">Jan 2027</div>
            <div className="km-sub" style={{ color: "var(--t3)" }}>
              10 months away
            </div>
          </div>
        </div>
        {/* <div className="sec-t">Product Adoption</div>
        <div className="prod-grid">
          <div className="prod-card">
            <div className="prod-head">
              <svg width="20" height="20" viewBox="0 0 36 36">
                <circle cx="14" cy="18" r="9" fill="#2B8AC9" />
                <circle cx="22" cy="18" r="6" fill="#80B500" />
              </svg>
              <span className="prod-name">RightQ — PRO</span>
              <span className="prod-status ps-g">Active</span>
            </div>
            <div className="prod-metric">
              <span>Tickets today</span>
              <b>87</b>
            </div>
            <div className="prod-metric">
              <span>Avg wait time</span>
              <b>4m 12s</b>
            </div>
            <div className="prod-metric">
              <span>SLA compliance</span>
              <b className="c-g">96%</b>
            </div>
          </div>
          <div className="prod-card">
            <div className="prod-head">
              <svg width="20" height="20" viewBox="0 0 36 36">
                <rect
                  x="4"
                  y="9"
                  width="22"
                  height="14"
                  rx="5"
                  fill="#80B500"
                />
                <circle cx="11" cy="16" r="2" fill="#fff" />
                <circle cx="18" cy="16" r="2" fill="#fff" />
                <circle cx="25" cy="16" r="2" fill="#fff" />
              </svg>
              <span className="prod-name">RightSurvey</span>
              <span className="prod-status ps-g">Active</span>
            </div>
            <div className="prod-metric">
              <span>Surveys sent</span>
              <b>342</b>
            </div>
            <div className="prod-metric">
              <span>Response rate</span>
              <b className="c-g">74%</b>
            </div>
            <div className="prod-metric">
              <span>Avg score</span>
              <b className="c-g">4.1 / 5</b>
            </div>
          </div>
          <div className="prod-card">
            <div className="prod-head">
              <svg width="20" height="20" viewBox="0 0 36 36">
                <rect
                  x="4"
                  y="6"
                  width="22"
                  height="20"
                  rx="5"
                  fill="#80B500"
                />
              </svg>
              <span className="prod-name">RightDesk</span>
              <span className="prod-status ps-a">3 Open</span>
            </div>
            <div className="prod-metric">
              <span>Open tickets</span>
              <b className="c-a">3</b>
            </div>
            <div className="prod-metric">
              <span>Avg resolution</span>
              <b>1d 4h</b>
            </div>
            <div className="prod-metric">
              <span>FRT</span>
              <b className="c-g">48m</b>
            </div>
          </div>
          <div className="prod-card">
            <div className="prod-head">
              <svg width="20" height="20" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="12" fill="#2B8AC9" />
                <circle cx="18" cy="18" r="8.5" fill="#fff" />
                <path
                  d="M18 11v7l4 4"
                  stroke="#2B8AC9"
                  stroke-width="2.2"
                  fill="none"
                  stroke-linecap="round"
                />
              </svg>
              <span className="prod-name">RightTime</span>
              <span className="prod-status ps-g">Active</span>
            </div>
            <div className="prod-metric">
              <span>Appointments</span>
              <b>18</b>
            </div>
            <div className="prod-metric">
              <span>Completion rate</span>
              <b className="c-g">94%</b>
            </div>
            <div className="prod-metric">
              <span>Next QBR</span>
              <b>Apr 2</b>
            </div>
          </div>
          <div className="prod-card">
            <div className="prod-head">
              <svg width="20" height="20" viewBox="0 0 36 36">
                <rect
                  x="4"
                  y="9"
                  width="28"
                  height="18"
                  rx="4"
                  fill="#80B500"
                />
                <polygon points="14,13 14,23 25,18" fill="#fff" />
              </svg>
              <span className="prod-name">RightPlayer</span>
              <span className="prod-status ps-g">Active</span>
            </div>
            <div className="prod-metric">
              <span>Screens active</span>
              <b>6</b>
            </div>
            <div className="prod-metric">
              <span>Campaigns live</span>
              <b>2</b>
            </div>
            <div className="prod-metric">
              <span>Uptime</span>
              <b className="c-g">99.1%</b>
            </div>
          </div>
          <div className="prod-card">
            <div className="prod-head">
              <svg width="20" height="20" viewBox="0 0 36 36">
                <rect
                  x="6"
                  y="20"
                  width="6"
                  height="10"
                  rx="1.5"
                  fill="#2B8AC9"
                />
                <rect
                  x="15"
                  y="14"
                  width="6"
                  height="16"
                  rx="1.5"
                  fill="#80B500"
                />
              </svg>
              <span className="prod-name">RightData</span>
              <span className="prod-status ps-n">Upsell</span>
            </div>
            <div className="prod-metric">
              <span>Status</span>
              <b className="c-a">Not adopted</b>
            </div>
            <div className="prod-metric">
              <span>Est. value</span>
              <b>$4,200/yr</b>
            </div>
            <div className="prod-metric">
              <span>Action</span>
              <b className="c-b">Send proposal →</b>
            </div>
          </div>
        </div> */}
      </div>
    )
  );
};

export default Overview;
