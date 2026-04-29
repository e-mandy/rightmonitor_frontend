import {
  BarChartFill,
  CardText,
  ChatDotsFill,
  CircleFill,
  ClockFill,
  FileEarmarkFill,
  FileTextFill,
  PersonFill,
  RecordCircle,
  RecordCircleFill,
  SquareFill,
} from "react-bootstrap-icons";
import { useCompany } from "../hooks/useCompany";
import AggregatesContainer from "../components/dashboard/AggregatesContainer";
import { ErrorBoundary } from "../components/ErrorBoundary";
import KPIContainer from "../components/dashboard/KPIContainer";
import CustomHealthScoreContainer from "../components/dashboard/CustomHealthScoreContainer";
import AlertAtRisk from "../components/dashboard/AlertAtRisk";

const Dashboard = () => {
  const {
    fetchCompanies: { data: companies },
  } = useCompany();
  return (
    <div className="view active" id="view-dashboard">
      <ErrorBoundary>
        <AlertAtRisk />
      </ErrorBoundary>
      <div className="ph">
        <div>
          <div className="ph-title">360° Overview</div>
          <div className="ph-sub">
            Real-time · All products · {companies?.length} companies
          </div>
        </div>
        <div className="ph-right">
          <button className="btn btn-ghost">↓ Export</button>
          <button className="btn btn-primary">+ Add Company</button>
        </div>
      </div>
      <ErrorBoundary>
        <AggregatesContainer />
      </ErrorBoundary>
      <ErrorBoundary>
        <KPIContainer />
      </ErrorBoundary>
      <div className="g64">
        <CustomHealthScoreContainer />
        <div className="card">
          <div className="ch">
            <div className="ch-t">Cross-Product Journey</div>
            <span className="ch-a" id="journey-link">
              All events →
            </span>
          </div>
          <div
            className="cb"
            style={{
              paddingTop: "8px",
            }}
          >
            <div className="jf">
              <div className="ji">
                <div
                  className="ji-dot"
                  style={{
                    background: "#f0f7e0",
                    borderColor: "#c6e68a",
                  }}
                >
                  <RecordCircleFill size={16} color="#2B8AC9" />
                </div>
                <div className="ji-body">
                  <div className="ji-ev">Ticket #SNK017 served</div>
                  <div className="ji-meta">Ecobank GH · Agent Martial</div>
                  <span className="ji-prod jp-g">RightQ</span>
                </div>
                <div className="ji-time">2m ago</div>
              </div>
              <div className="ji">
                <div
                  className="ji-dot"
                  style={{
                    background: "#f0f7e0",
                    borderColor: "#c6e68a",
                  }}
                >
                  <ChatDotsFill size={16} color="#80B500" />
                </div>
                <div className="ji-body">
                  <div className="ji-ev">Survey: 2/5 ★ — low score</div>
                  <div className="ji-meta">Ecobank GH · Auto-triggered</div>
                  <span className="ji-prod jp-g">RightSurvey</span>
                </div>
                <div className="ji-time">4m ago</div>
              </div>
              <div className="ji">
                <div
                  className="ji-dot"
                  style={{ background: "#fef9ee", borderColor: "#fde68a" }}
                >
                  <SquareFill size={16} color="#f59e0b" />
                </div>
                <div className="ji-body">
                  <div className="ji-ev">Complaint #D-441 opened</div>
                  <div className="ji-meta">Ecobank GH · Auto-escalation</div>
                  <span className="ji-prod jp-a">RightDesk</span>
                </div>
                <div className="ji-time">5m ago</div>
              </div>
              <div className="ji">
                <div
                  className="ji-dot"
                  style={{
                    background: "#e8f3fb",
                    borderColor: "#bfdbfe",
                  }}
                >
                  <ClockFill size={16} color="#2B8AC9" />
                </div>
                <div className="ji-body">
                  <div className="ji-ev">Appointment booked</div>
                  <div className="ji-meta">Ecobank GH · 22 Mar 10:00</div>
                  <span className="ji-prod jp-b">RightTime</span>
                </div>
                <div className="ji-time">10m ago</div>
              </div>
              <div className="ji">
                <div
                  className="ji-dot"
                  style={{
                    background: "#f3f4f6",
                    borderColor: "#e0e0e0",
                  }}
                >
                  <PersonFill size={16} color="#888" />
                </div>
                <div className="ji-body">
                  <div className="ji-ev">New contact created</div>
                  <div className="ji-meta">MTN Ghana · From RightQ ticket</div>
                  <span className="ji-prod jp-n">RightCom XP</span>
                </div>
                <div className="ji-time">22m ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="g333">
        <div className="card">
          <div className="ch">
            <div className="ch-t">Service Quality</div>
            <span className="ch-a">Details →</span>
          </div>
          <div className="cb">
            <div className="mr">
              <div>
                <div className="mr-name">First Response Time</div>
                <div className="mr-tgt">Target: &lt;2h</div>
              </div>
              <div className="mr-val mr-g">1h 24m</div>
            </div>
            <div className="mr">
              <div>
                <div className="mr-name">Support Tickets (mo.)</div>
                <div className="mr-tgt">This month total</div>
              </div>
              <div className="mr-val">47</div>
            </div>
            <div className="mr">
              <div>
                <div className="mr-name">RMA Rate</div>
                <div className="mr-tgt">Target: &lt;5%</div>
              </div>
              <div className="mr-val mr-g">2.1%</div>
            </div>
            <div className="mr">
              <div>
                <div className="mr-name">Implementation NPS</div>
                <div className="mr-tgt">Post-onboarding avg</div>
              </div>
              <div className="mr-val mr-g">+62</div>
            </div>
            <div className="mr">
              <div>
                <div className="mr-name">Time-to-Value</div>
                <div className="mr-tgt">Avg days to first use</div>
              </div>
              <div className="mr-val">12d</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="ch">
            <div className="ch-t">Product Adoption</div>
            <span className="ch-a">Breakdown →</span>
          </div>
          <div className="cb">
            <div className="ai">
              <CardText size={18} color="#80B500" />
              <span className="ai-name">RightQ</span>
              <div className="ai-bw">
                <div
                  className="ai-b"
                  style={{
                    width: "92%",
                    background: "#80b500",
                  }}
                ></div>
              </div>
              <span className="ai-pct">92%</span>
            </div>
            <div className="ai">
              <FileEarmarkFill size={18} color="#80B500" />
              <span className="ai-name">RightPlayer</span>
              <div className="ai-bw">
                <div
                  className="ai-b"
                  style={{
                    width: "87%",
                    background: "#80b500",
                  }}
                ></div>
              </div>
              <span className="ai-pct">87%</span>
            </div>
            <div className="ai">
              <FileTextFill size={18} color="#80B500" />
              <span className="ai-name">RightSurvey</span>
              <div className="ai-bw">
                <div
                  className="ai-b"
                  style={{
                    width: "78%",
                    background: "#80b500",
                  }}
                ></div>
              </div>
              <span className="ai-pct">78%</span>
            </div>
            <div className="ai">
              <CircleFill size={18} color="#2B8AC9" />
              <span className="ai-name">RightDesk</span>
              <div className="ai-bw">
                <div
                  className="ai-b"
                  style={{
                    width: "65%",
                    background: "#2b8ac9",
                  }}
                ></div>
              </div>
              <span className="ai-pct">65%</span>
            </div>
            <div className="ai">
              <RecordCircle size={18} color="#2B8AC9" />
              <span className="ai-name">RightTime</span>
              <div className="ai-bw">
                <div
                  className="ai-b"
                  style={{
                    width: "54%",
                    background: "#2b8ac9",
                  }}
                ></div>
              </div>
              <span className="ai-pct">54%</span>
            </div>
            <div className="ai">
              <BarChartFill size={18} color="#80B500" />
              <span className="ai-name">RightData</span>
              <div className="ai-bw">
                <div
                  className="ai-b"
                  style={{
                    width: "41%",
                    background: "#2b8ac9",
                  }}
                ></div>
              </div>
              <span className="ai-pct">41%</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="ch">
            <div className="ch-t">Onboarding Tracker</div>
            <span className="ch-a" id="ob-link">
              All →
            </span>
          </div>
          <div className="cb">
            <div className="oi">
              <div
                className="oi-av"
                style={{
                  background: "#dcfce7",
                  color: "#15803d",
                }}
              >
                EG
              </div>
              <div className="oi-info">
                <div className="oi-name">Ecobank GH</div>
                <div className="oi-day">Day 12 of 30 · On track</div>
              </div>
              <div className="oi-pw">
                <div
                  className="oi-p"
                  style={{
                    width: "100%",
                    background: "#80b500",
                  }}
                ></div>
              </div>
              <span
                className="oi-pct"
                style={{
                  color: "#15803d",
                }}
              >
                100%
              </span>
            </div>
            <div className="oi">
              <div
                className="oi-av"
                style={{
                  background: "#dcfce7",
                  color: "#15803d",
                }}
              >
                MT
              </div>
              <div className="oi-info">
                <div className="oi-name">MTN Ghana</div>
                <div className="oi-day">Day 45 of 60 · On track</div>
              </div>
              <div className="oi-pw">
                <div
                  className="oi-p"
                  style={{
                    width: "82%",
                    background: "#80b500",
                  }}
                ></div>
              </div>
              <span
                className="oi-pct"
                style={{
                  color: "#15803d",
                }}
              >
                82%
              </span>
            </div>
            <div className="oi">
              <div
                className="oi-av"
                style={{
                  background: "#fef3c7",
                  color: "#b45309",
                }}
              >
                SB
              </div>
              <div className="oi-info">
                <div className="oi-name">Standard Bank</div>
                <div className="oi-day">Day 20 of 30 · Delayed</div>
              </div>
              <div className="oi-pw">
                <div
                  className="oi-p"
                  style={{
                    width: "55%",
                    background: "#f59e0b",
                  }}
                ></div>
              </div>
              <span
                className="oi-pct"
                style={{
                  color: "#b45309",
                }}
              >
                55%
              </span>
            </div>
            <div className="oi">
              <div
                className="oi-av"
                style={{
                  background: "#fee2e2",
                  color: "#b91c1c",
                }}
              >
                BC
              </div>
              <div className="oi-info">
                <div className="oi-name">BCEAO Sénégal</div>
                <div className="oi-day">Day 8 of 30 · Behind</div>
              </div>
              <div className="oi-pw">
                <div
                  className="oi-p"
                  style={{
                    width: "28%",
                    background: "#ef4444",
                  }}
                ></div>
              </div>
              <span
                className="oi-pct"
                style={{
                  color: "#b91c1c",
                }}
              >
                28%
              </span>
            </div>
            <div className="oi">
              <div
                className="oi-av"
                style={{
                  background: "#fee2e2",
                  color: "#b91c1c",
                }}
              >
                AN
              </div>
              <div className="oi-info">
                <div className="oi-name">Airtel Nigeria</div>
                <div className="oi-day">Day 5 of 30 · Behind</div>
              </div>
              <div className="oi-pw">
                <div
                  className="oi-p"
                  style={{
                    width: "18%",
                    background: "#ef4444",
                  }}
                ></div>
              </div>
              <span
                className="oi-pct"
                style={{
                  color: "#b91c1c",
                }}
              >
                18%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
