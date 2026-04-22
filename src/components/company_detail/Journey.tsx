const Journey = () => {
  return (
    <div className="tp active" id="pane-pjourney">
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
              Agent Martial served customer at counter 3. Handling time: 8m 14s
              — within SLA.
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
            <div className="te-desc">Low score triggered auto-escalation.</div>
            <span className="te-prod tp-g">RightSurvey</span>
            <div className="te-card">
              <b>Response:</b> "The agent was not helpful and I waited over 30
              minutes."
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
            <div className="te-desc">Auto-created from low survey score.</div>
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
  );
};

export default Journey;
