import {
  BarChartFill,
  CardText,
  ChatDotsFill,
  CheckCircleFill,
  Circle,
  CircleFill,
  ClockFill,
  ExclamationCircle,
  ExclamationTriangleFill,
  FileEarmarkFill,
  FileTextFill,
  HouseDoorFill,
  PersonFill,
  RecordCircle,
  RecordCircleFill,
  SquareFill,
  XCircleFill,
} from "react-bootstrap-icons";

const Dashboard = () => {
  return (
    <div className="view active" id="view-dashboard">
      <div className="alert">
        <ExclamationTriangleFill size={16} color="#f59e0b" />
        <span>
          <strong>2 companies</strong> below health score 50.
          <span
            style={{
              color: "var(--b)",
              fontWeight: "700",
              cursor: "pointer",
            }}
            id="alert-atrisk"
          >
            View at-risk →
          </span>
        </span>
      </div>
      <div className="ph">
        <div>
          <div className="ph-title">360° Overview</div>
          <div className="ph-sub">Real-time · All products · 24 companies</div>
        </div>
        <div className="ph-right">
          <button className="btn btn-ghost">↓ Export</button>
          <button className="btn btn-primary">+ Add Company</button>
        </div>
      </div>
      <div className="strip">
        <div className="scard">
          <div
            className="scard-ico"
            style={{
              background: "#f0f7e0",
            }}
          >
            <Circle size={18} color="#80B500" />
          </div>
          <div>
            <div className="scard-val">24</div>
            <div className="scard-lbl">Total Companies</div>
          </div>
        </div>
        <div className="scard">
          <div
            className="scard-ico"
            style={{
              background: "#dcfce7",
            }}
          >
            <CheckCircleFill size={18} color="#15803d" />
          </div>
          <div>
            <div
              className="scard-val"
              style={{
                color: "#15803d",
              }}
            >
              17
            </div>
            <div className="scard-lbl">Healthy</div>
          </div>
        </div>
        <div className="scard">
          <div
            className="scard-ico"
            style={{
              background: "#fef3c7",
            }}
          >
            <ExclamationCircle size={18} color="#b45309" />
          </div>
          <div>
            <div
              className="scard-val"
              style={{
                color: "#b45309",
              }}
            >
              5
            </div>
            <div className="scard-lbl">Warning</div>
          </div>
        </div>
        <div className="scard">
          <div className="scard-ico" style={{ background: "#fee2e2" }}>
            <XCircleFill size={18} color="#b91c1c" />
          </div>
          <div>
            <div
              className="scard-val"
              style={{
                color: "#b91c1c",
              }}
            >
              2
            </div>
            <div className="scard-lbl">At Risk</div>
          </div>
        </div>
        <div className="scard">
          <div
            className="scard-ico"
            style={{
              background: "#e8f3fb",
            }}
          >
            <HouseDoorFill size={18} color="#2B8AC9" />
          </div>
          <div>
            <div
              className="scard-val"
              style={{
                color: "#2b8ac9",
              }}
            >
              $142K
            </div>
            <div className="scard-lbl">Pipeline</div>
          </div>
        </div>
      </div>
      <div className="krow">
        <div className="kcard kc-g">
          <div className="klbl">Gross Revenue Retention</div>
          <div className="kval c-g">94.2%</div>
          <div className="ktrend kt-g">▲ +1.3% vs last month</div>
          <div className="ktgt">Target: &gt;90%</div>
        </div>
        <div className="kcard kc-b">
          <div className="klbl">Net Revenue Retention</div>
          <div className="kval c-b">108.7%</div>
          <div className="ktrend kt-g">▲ +3.1% vs last month</div>
          <div className="ktgt">Target: &gt;105%</div>
        </div>
        <div className="kcard kc-a">
          <div className="klbl">Logo Churn</div>
          <div className="kval c-a">1.8%</div>
          <div className="ktrend kt-a">▲ +0.4% — near threshold</div>
          <div className="ktgt">Target: &lt;2% / month</div>
        </div>
        <div className="kcard kc-p">
          <div className="klbl">Expansion Pipeline</div>
          <div
            className="kval"
            style={{
              fontSize: "20px",
              paddingTop: "4px",
              color: "var(--t1)",
            }}
          >
            $142,000
          </div>
          <div className="ktrend kt-n">4 active upsell opportunities</div>
          <div className="ktgt">Monthly target: $200K</div>
        </div>
      </div>
      <div className="g64">
        <div className="card">
          <div className="ch" style={{ paddingBottom: "0" }}>
            <div className="ch-t">Customer Health Scores</div>
            <span className="ch-a">View all 24 →</span>
          </div>
          <div className="tabs">
            <div className="tab on">All</div>
            <div className="tab">At Risk</div>
            <div className="tab">Healthy</div>
            <div className="tab">Warning</div>
          </div>
          <div className="cb">
            <table className="ht">
              <thead>
                <tr>
                  <th
                    style={{
                      width: "26%",
                    }}
                  >
                    Company
                  </th>
                  <th>Score</th>
                  <th>SaaS 40%</th>
                  <th>HW 30%</th>
                  <th>Relation 30%</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="co-row"
                  data-name="Ecobank GH"
                  data-init="EG"
                  data-bg="#e8f3fb"
                  data-col="#2B8AC9"
                  data-score="82"
                  data-sbg="#dcfce7"
                  data-scol="#15803d"
                >
                  <td>
                    <div className="cname">Ecobank GH</div>
                    <div className="csince">Since Jan 2024</div>
                  </td>
                  <td>
                    <div className="sbar-w">
                      <div
                        className="sbar sb-g"
                        style={{
                          width: "82%",
                        }}
                      ></div>
                    </div>
                    <div className="sv sv-g">82</div>
                  </td>
                  <td>
                    <span className="bx bx-g">88%</span>
                  </td>
                  <td>
                    <span className="bx bx-g">79%</span>
                  </td>
                  <td>
                    <span className="bx bx-g">80%</span>
                  </td>
                  <td>
                    <span className="bx bx-g">Healthy</span>
                  </td>
                  <td>
                    <span className="vlink modal-btn">View →</span>
                  </td>
                </tr>
                <tr
                  className="co-row"
                  data-name="MTN Ghana"
                  data-init="MT"
                  data-bg="#f0f7e0"
                  data-col="#80B500"
                  data-score="76"
                  data-sbg="#dcfce7"
                  data-scol="#15803d"
                >
                  <td>
                    <div className="cname">MTN Ghana</div>
                    <div className="csince">Since Mar 2023</div>
                  </td>
                  <td>
                    <div className="sbar-w">
                      <div
                        className="sbar sb-g"
                        style={{
                          width: "76%",
                        }}
                      ></div>
                    </div>
                    <div className="sv sv-g">76</div>
                  </td>
                  <td>
                    <span className="bx bx-g">80%</span>
                  </td>
                  <td>
                    <span className="bx bx-a">65%</span>
                  </td>
                  <td>
                    <span className="bx bx-g">82%</span>
                  </td>
                  <td>
                    <span className="bx bx-g">Healthy</span>
                  </td>
                  <td>
                    <span className="vlink modal-btn">View →</span>
                  </td>
                </tr>
                <tr
                  className="co-row"
                  data-name="Standard Bank"
                  data-init="SB"
                  data-bg="#fef3c7"
                  data-col="#b45309"
                  data-score="58"
                  data-sbg="#fef3c7"
                  data-scol="#b45309"
                >
                  <td>
                    <div className="cname">Standard Bank</div>
                    <div className="csince">Since Aug 2023</div>
                  </td>
                  <td>
                    <div className="sbar-w">
                      <div
                        className="sbar sb-a"
                        style={{
                          width: "58%",
                        }}
                      ></div>
                    </div>
                    <div className="sv sv-a">58</div>
                  </td>
                  <td>
                    <span className="bx bx-a">60%</span>
                  </td>
                  <td>
                    <span className="bx bx-a">55%</span>
                  </td>
                  <td>
                    <span className="bx bx-g">62%</span>
                  </td>
                  <td>
                    <span className="bx bx-a">Warning</span>
                  </td>
                  <td>
                    <span className="vlink modal-btn">View →</span>
                  </td>
                </tr>
                <tr
                  className="co-row"
                  data-name="BCEAO Sénégal"
                  data-init="BC"
                  data-bg="#fee2e2"
                  data-col="#b91c1c"
                  data-score="38"
                  data-sbg="#fee2e2"
                  data-scol="#b91c1c"
                >
                  <td>
                    <div className="cname">BCEAO Sénégal</div>
                    <div className="csince">Since Nov 2024</div>
                  </td>
                  <td>
                    <div className="sbar-w">
                      <div
                        className="sbar sb-r"
                        style={{
                          width: "38%",
                        }}
                      ></div>
                    </div>
                    <div className="sv sv-r">38</div>
                  </td>
                  <td>
                    <span className="bx bx-r">32%</span>
                  </td>
                  <td>
                    <span className="bx bx-a">55%</span>
                  </td>
                  <td>
                    <span className="bx bx-r">28%</span>
                  </td>
                  <td>
                    <span className="bx bx-r">At Risk</span>
                  </td>
                  <td>
                    <span className="vlink modal-btn">View →</span>
                  </td>
                </tr>
                <tr
                  className="co-row"
                  data-name="Airtel Nigeria"
                  data-init="AN"
                  data-bg="#fee2e2"
                  data-col="#b91c1c"
                  data-score="43"
                  data-sbg="#fee2e2"
                  data-scol="#b91c1c"
                >
                  <td>
                    <div className="cname">Airtel Nigeria</div>
                    <div className="csince">Since Feb 2025</div>
                  </td>
                  <td>
                    <div className="sbar-w">
                      <div
                        className="sbar sb-r"
                        style={{
                          width: "43%",
                        }}
                      ></div>
                    </div>
                    <div className="sv sv-r">43</div>
                  </td>
                  <td>
                    <span className="bx bx-r">40%</span>
                  </td>
                  <td>
                    <span className="bx bx-a">52%</span>
                  </td>
                  <td>
                    <span className="bx bx-r">36%</span>
                  </td>
                  <td>
                    <span className="bx bx-r">At Risk</span>
                  </td>
                  <td>
                    <span className="vlink modal-btn">View →</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
