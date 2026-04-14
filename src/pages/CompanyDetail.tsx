const CompanyDetail = () => {
  return (
    <div className="view" id="view-company">
      <div className="co-hero">
        <div className="co-logo" id="co-logo">
          EG
        </div>
        <div style={{ flex: 1 }}>
          <div className="co-name-big" id="co-name-big">
            Ecobank GH
          </div>
          <div className="co-meta">
            <span className="co-tag">Banking · Ghana · CSA: Amos Ahounou</span>
            <span
              id="co-status-badge"
              style={{
                fontSize: "11px",
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: "20px",
                background: "#dcfce7",
                color: "#15803d",
              }}
            >
              ● Active
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: "20px",
                background: "var(--bl)",
                color: "var(--bd)",
              }}
            >
              PRO License
            </span>
          </div>
        </div>
        <div className="co-actions">
          <button className="btn btn-ghost">📋 Notes</button>
          <button className="btn btn-ghost">📅 Schedule</button>
          <button className="btn btn-blue">✉ Contact</button>
          <button className="btn btn-primary">+ Log Activity</button>
        </div>
      </div>
      <div className="ptabs">
        <div className="ptab on" data-pane="overview">
          Overview
        </div>
        <div className="ptab" data-pane="pjourney">
          Journey Feed
        </div>
        <div className="ptab" data-pane="products">
          Products
        </div>
        <div className="ptab" data-pane="contacts">
          Contacts
        </div>
        <div className="ptab" data-pane="notes">
          Notes
        </div>
      </div>
      <div className="tab-body">
        <div className="tp active" id="pane-overview">
          <div className="sec-t">Health Score Breakdown</div>
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
                    stroke="#80B500"
                    stroke-width="10"
                    stroke-dasharray="314"
                    stroke-dashoffset="57"
                    stroke-linecap="round"
                  />
                </svg>
                <div className="score-center">
                  <div className="score-num" id="co-score-num">
                    82
                  </div>
                  <div className="score-lbl">/ 100</div>
                </div>
              </div>
              <span
                className="score-stat"
                id="co-score-stat"
                style={{ background: "#dcfce7", color: "#15803d" }}
              >
                Healthy
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
                    style={{ width: "88%", background: "#80b500" }}
                  ></div>
                </div>
                <div className="dim-sc c-g">88</div>
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
                    style={{ width: "79%", background: "#2b8ac9" }}
                  ></div>
                </div>
                <div className="dim-sc c-b">79</div>
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
                    style={{ width: "80%", background: "#8b5cf6" }}
                  ></div>
                </div>
                <div className="dim-sc" style={{ color: "#7c3aed" }}>
                  80
                </div>
                <div className="dim-wt">×30%</div>
              </div>
            </div>
          </div>
          <div className="sec-t">Key Metrics</div>
          <div className="kpi-mini">
            <div className="km">
              <div className="km-lbl">NPS Score</div>
              <div className="km-val c-g">+68</div>
              <div className="km-sub c-g">▲ +4 vs last quarter</div>
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
          <div className="sec-t">
            Product Adoption<span className="sec-link">Full breakdown →</span>
          </div>
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
          </div>
        </div>
        <div className="tp" id="pane-pjourney">
          <div className="sec-t" style={{ marginBottom: "16px" }}>
            Customer Journey<span className="sec-link">Filter ▾</span>
          </div>
          <div className="timeline">
            <div className="te">
              <div className="te-left">
                <div
                  className="te-dot"
                  style={{ background: "#f0f7e0", borderColor: "#c6e68a" }}
                >
                  <svg width="15" height="15" viewBox="0 0 36 36">
                    <circle cx="14" cy="18" r="9" fill="#2B8AC9" />
                    <circle cx="22" cy="18" r="6" fill="#80B500" />
                    <circle cx="18" cy="18" r="2" fill="#1c1c1e" />
                  </svg>
                </div>
                <div className="te-line"></div>
              </div>
              <div className="te-body">
                <div className="te-hd">
                  <span className="te-ev">Ticket #SNK017 served</span>
                  <span className="te-time">Today · 2m ago</span>
                </div>
                <div className="te-desc">
                  Agent Martial served customer at counter 3. Handling time: 8m
                  14s — within SLA.
                </div>
                <span className="te-prod tp-g">RightQ</span>
              </div>
            </div>
            <div className="te">
              <div className="te-left">
                <div
                  className="te-dot"
                  style={{ background: "#f0f7e0", borderColor: "#c6e68a" }}
                >
                  <svg width="15" height="15" viewBox="0 0 36 36">
                    <rect
                      x="4"
                      y="9"
                      width="22"
                      height="14"
                      rx="5"
                      fill="#80B500"
                    />
                    <circle cx="11" cy="16" r="2" fill="#fff" />
                  </svg>
                </div>
                <div className="te-line"></div>
              </div>
              <div className="te-body">
                <div className="te-hd">
                  <span className="te-ev">Survey submitted — 2/5 ★</span>
                  <span className="te-time">Today · 4m ago</span>
                </div>
                <div className="te-desc">
                  Low score triggered auto-escalation.
                </div>
                <span className="te-prod tp-g">RightSurvey</span>
                <div className="te-card">
                  <b>Response:</b> "The agent was not helpful and I waited over
                  30 minutes."
                </div>
              </div>
            </div>
            <div className="te">
              <div className="te-left">
                <div
                  className="te-dot"
                  style={{ background: "#fef9ee", borderColor: "#fde68a" }}
                >
                  <svg width="15" height="15" viewBox="0 0 36 36">
                    <rect
                      x="4"
                      y="6"
                      width="22"
                      height="20"
                      rx="5"
                      fill="#f59e0b"
                    />
                  </svg>
                </div>
                <div className="te-line"></div>
              </div>
              <div className="te-body">
                <div className="te-hd">
                  <span className="te-ev">Complaint #D-441 opened</span>
                  <span className="te-time">Today · 5m ago</span>
                </div>
                <div className="te-desc">
                  Auto-created from low survey score.
                </div>
                <span className="te-prod tp-a">RightDesk</span>
              </div>
            </div>
            <div className="te">
              <div className="te-left">
                <div
                  className="te-dot"
                  style={{ background: "#e8f3fb", borderColor: "#bfdbfe" }}
                >
                  <svg width="15" height="15" viewBox="0 0 36 36">
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
                </div>
              </div>
              <div className="te-body">
                <div className="te-hd">
                  <span className="te-ev">Appointment booked</span>
                  <span className="te-time">Today · 10m ago</span>
                </div>
                <div className="te-desc">
                  Customer accepted meeting to discuss resolution.
                </div>
                <span className="te-prod tp-b">RightTime</span>
                <div className="te-card">
                  <b>Scheduled:</b> 22 March 2026, 10:00 AM ·<b>With:</b> Amos
                  Ahounou
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp" id="pane-products">
          <div className="sec-t">Product &amp; License Overview</div>
          <div
            className="prod-grid"
            style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          >
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
                <span>License</span>
                <b>PRO · 16 devices</b>
              </div>
              <div className="prod-metric">
                <span>Renewal</span>
                <b>Jan 2027</b>
              </div>
              <div className="prod-metric">
                <span>MRR</span>
                <b className="c-b">$1,200</b>
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
                </svg>
                <span className="prod-name">RightSurvey — Standard</span>
                <span className="prod-status ps-g">Active</span>
              </div>
              <div className="prod-metric">
                <span>Renewal</span>
                <b>Jan 2027</b>
              </div>
              <div className="prod-metric">
                <span>MRR</span>
                <b className="c-b">$400</b>
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
                </svg>
                <span className="prod-name">RightPlayer — PRO</span>
                <span className="prod-status ps-g">Active</span>
              </div>
              <div className="prod-metric">
                <span>License</span>
                <b>6 screens</b>
              </div>
              <div className="prod-metric">
                <span>MRR</span>
                <b className="c-b">$300</b>
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
                <span className="prod-name">RightData — Not adopted</span>
                <span className="prod-status ps-n">Upsell</span>
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
          </div>
        </div>
        <div className="tp" id="pane-contacts">
          <div className="sec-t">
            Company Contacts<span className="sec-link">+ Add contact</span>
          </div>
          <table className="ct">
            <thead>
              <tr>
                <th style={{ width: "32%" }}>Name</th>
                <th>Role</th>
                <th>Source</th>
                <th>Email</th>
                <th>Last contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      className="ct-av"
                      style={{ background: "#dcfce7", color: "#15803d" }}
                    >
                      KM
                    </div>
                    <div>
                      <div className="ct-name">Kofi Mensah</div>
                      <div className="ct-role">Branch Manager</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="bx bx-b">Decision Maker</span>
                </td>
                <td>
                  <span
                    className="bx"
                    style={{ background: "var(--gl)", color: "var(--gd)" }}
                  >
                    RightQ
                  </span>
                </td>
                <td style={{ color: "var(--t2)" }}>k.mensah@ecobank.com</td>
                <td style={{ color: "var(--t3)" }}>Today</td>
              </tr>
              <tr>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div
                      className="ct-av"
                      style={{ background: "var(--bl)", color: "var(--bd)" }}
                    >
                      AA
                    </div>
                    <div>
                      <div className="ct-name">Abena Asante</div>
                      <div className="ct-role">IT Manager</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="bx bx-gy">Technical</span>
                </td>
                <td>
                  <span
                    className="bx"
                    style={{ background: "var(--gl)", color: "var(--gd)" }}
                  >
                    RightQ
                  </span>
                </td>
                <td style={{ color: "var(--t2)" }}>a.asante@ecobank.com</td>
                <td style={{ color: "var(--t3)" }}>3 days ago</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tp" id="pane-notes">
          <div className="sec-t">
            CSA Notes<span className="sec-link">+ Add note</span>
          </div>
          <div className="note-item">
            <div className="note-head">
              <div
                className="ct-av"
                style={{
                  background: "#dcfce7",
                  color: "#15803d",
                  width: "26px",
                  height: "26px",
                  fontSize: "9px",
                }}
              >
                AA
              </div>
              <span className="note-author">Amos Ahounou</span>
              <span className="note-date">17 Mar 2026 · 3:42 PM</span>
            </div>
            <div className="note-text">
              Spoke with Kofi Mensah about today's complaint. Key issue: agent
              training at branch 4. Scheduled video call for 22 March.
            </div>
          </div>
          <div className="note-item">
            <div className="note-head">
              <div
                className="ct-av"
                style={{
                  background: "#dcfce7",
                  color: "#15803d",
                  width: "26px",
                  height: "26px",
                  fontSize: "9px",
                }}
              >
                AA
              </div>
              <span className="note-author">Amos Ahounou</span>
              <span className="note-date">10 Mar 2026 · 11:00 AM</span>
            </div>
            <div className="note-text">
              Monthly check-in completed. NPS improved to +68. Interested in
              RightData. Renewal Jan 2027, no concerns.
            </div>
          </div>
          <div className="note-add">+ Add a note</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
