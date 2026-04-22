const ScoreDetailsCard = () => {
  return (
    <div className={`modal-overlay`} id="modal">
      <div className="modal">
        <div className="modal-head">
          <div className="modal-title">Health Score Breakdown</div>
          <div className="modal-close" id="modal-close">
            ✕
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-co">
            <div className="modal-co-av" id="m-logo">
              EG
            </div>
            <div style={{ flex: 1 }}>
              <div className="modal-co-name" id="m-name">
                Ecobank GH
              </div>
              <div className="modal-co-sub">
                Banking · Ghana · Client since Jan 2024
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: 900,
                  letterSpacing: "-1px",
                  lineHeight: 1,
                }}
                id="m-score"
              >
                82
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
              <span className="bx bx-g" id="m-bx">
                Healthy
              </span>
            </div>
          </div>
          <div className="modal-dim">
            <div className="modal-dim-head">
              <div className="modal-dim-name" style={{ color: "#80b500" }}>
                SaaS Health
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span className="modal-dim-wt">Weight: 40%</span>
                <span className="modal-dim-score" style={{ color: "#15803d" }}>
                  88 / 100
                </span>
              </div>
            </div>
            <div className="modal-bar-wrap">
              <div
                className="modal-bar"
                style={{ width: "88%", background: "#80b500" }}
              ></div>
            </div>
            <div className="modal-sub-grid">
              <div className="modal-sub">
                <div className="modal-sub-label">Platform Usage</div>
                <div className="modal-sub-val" style={{ color: "#15803d" }}>
                  Daily
                </div>
                <div className="modal-sub-trend" style={{ color: "#15803d" }}>
                  ▲ +8% sessions this month
                </div>
              </div>
              <div className="modal-sub">
                <div className="modal-sub-label">Feature Adoption</div>
                <div className="modal-sub-val">6 / 8</div>
                <div className="modal-sub-trend" style={{ color: "var(--t3)" }}>
                  RightData unused
                </div>
              </div>
              <div className="modal-sub">
                <div className="modal-sub-label">Active Users</div>
                <div className="modal-sub-val" style={{ color: "#15803d" }}>
                  14 / 16
                </div>
                <div className="modal-sub-trend" style={{ color: "var(--t3)" }}>
                  2 pending login
                </div>
              </div>
              <div className="modal-sub">
                <div className="modal-sub-label">SLA Compliance</div>
                <div className="modal-sub-val" style={{ color: "#15803d" }}>
                  96%
                </div>
                <div className="modal-sub-trend" style={{ color: "#15803d" }}>
                  ▲ Above 90% target
                </div>
              </div>
            </div>
          </div>
          <div className="modal-dim">
            <div className="modal-dim-head">
              <div className="modal-dim-name" style={{ color: "#2b8ac9" }}>
                Hardware Health
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span className="modal-dim-wt">Weight: 30%</span>
                <span className="modal-dim-score" style={{ color: "#2b8ac9" }}>
                  79 / 100
                </span>
              </div>
            </div>
            <div className="modal-bar-wrap">
              <div
                className="modal-bar"
                style={{ width: "79%", background: "#2b8ac9" }}
              ></div>
            </div>
            <div className="modal-sub-grid">
              <div className="modal-sub">
                <div className="modal-sub-label">Active Terminals</div>
                <div className="modal-sub-val" style={{ color: "#b45309" }}>
                  14 / 16
                </div>
                <div className="modal-sub-trend" style={{ color: "#b45309" }}>
                  2 offline
                </div>
              </div>
              <div className="modal-sub">
                <div className="modal-sub-label">RMA Rate</div>
                <div className="modal-sub-val" style={{ color: "#15803d" }}>
                  2.1%
                </div>
                <div className="modal-sub-trend" style={{ color: "#15803d" }}>
                  ▼ Below 5% threshold
                </div>
              </div>
              <div className="modal-sub">
                <div className="modal-sub-label">Device Uptime</div>
                <div className="modal-sub-val" style={{ color: "#15803d" }}>
                  98.2%
                </div>
              </div>
              <div className="modal-sub">
                <div className="modal-sub-label">Offline Errors</div>
                <div className="modal-sub-val">3</div>
                <div className="modal-sub-trend" style={{ color: "var(--t3)" }}>
                  This month
                </div>
              </div>
            </div>
          </div>
          <div className="modal-dim">
            <div className="modal-dim-head">
              <div className="modal-dim-name" style={{ color: "#7c3aed" }}>
                Relationship Health
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span className="modal-dim-wt">Weight: 30%</span>
                <span className="modal-dim-score" style={{ color: "#7c3aed" }}>
                  80 / 100
                </span>
              </div>
            </div>
            <div className="modal-bar-wrap">
              <div
                className="modal-bar"
                style={{ width: "80%", background: "#8b5cf6" }}
              ></div>
            </div>
            <div className="modal-sub-grid">
              <div className="modal-sub">
                <div className="modal-sub-label">NPS Score</div>
                <div className="modal-sub-val" style={{ color: "#15803d" }}>
                  +68
                </div>
                <div className="modal-sub-trend" style={{ color: "#15803d" }}>
                  ▲ +4 vs last quarter
                </div>
              </div>
              <div className="modal-sub">
                <div className="modal-sub-label">Support Sentiment</div>
                <div className="modal-sub-val">Positive</div>
                <div className="modal-sub-trend" style={{ color: "#15803d" }}>
                  84% positive
                </div>
              </div>
              <div className="modal-sub">
                <div className="modal-sub-label">QBRs Completed</div>
                <div className="modal-sub-val" style={{ color: "#15803d" }}>
                  2 / 2
                </div>
              </div>
              <div className="modal-sub">
                <div className="modal-sub-label">Exec Alignment</div>
                <div className="modal-sub-val" style={{ color: "#15803d" }}>
                  Strong
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
            <button
              className="btn btn-ghost"
              id="modal-cancel"
              style={{ flex: 1, justifyContent: "center" }}
            >
              Close
            </button>
            <button
              className="btn btn-primary"
              id="modal-profile"
              style={{ flex: 1, justifyContent: "center" }}
            >
              View Full Profile →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreDetailsCard;
