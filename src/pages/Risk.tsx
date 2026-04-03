const Risk = () => {
  return (
    <div className="view" id="view-atrisk">
      <div className="ph">
        <div>
          <div className="ph-title">At-Risk Companies</div>
          <div className="ph-sub">
            2 companies requiring immediate attention
          </div>
        </div>
        <div className="ph-right">
          <button className="btn btn-primary">Schedule All QBRs</button>
        </div>
      </div>
      <div
        style={{
          background: "#fee2e2",
          border: "1px solid #fca5a5",
          borderRadius: "var(--r3)",
          padding: "12px 16px",
          marginBottom: "16px",
          fontSize: "12px",
          color: "#b91c1c",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="#b91c1c" stroke-width="1.5" />
          <path
            d="M8 4v5M8 11v.5"
            stroke="#b91c1c"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
        <span>
          High churn risk. Immediate outreach required. Combined ARR at risk:{" "}
          <strong>$38,400</strong>
        </span>
      </div>
      <div className="ar-card">
        <div className="ar-head">
          <div
            className="ar-logo"
            style={{ background: "#fee2e2", color: "#b91c1c" }}
          >
            BC
          </div>
          <div>
            <div className="ar-name">BCEAO Sénégal</div>
            <div className="ar-since">
              Banking · Sénégal · Client since Nov 2024
            </div>
          </div>
          <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <div className="ar-score-val" style={{ color: "#b91c1c" }}>
              38
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
            >
              View Profile →
            </button>
          </div>
        </div>
        <div className="ar-body">
          <div className="ar-flags">
            <div className="ar-flag ar-flag-r">
              🔴 SaaS adoption critically low (32%)
            </div>
            <div className="ar-flag ar-flag-r">
              🔴 Relationship health deteriorating (28%)
            </div>
            <div className="ar-flag ar-flag-a">
              ⚠ Onboarding behind schedule
            </div>
            <div className="ar-flag ar-flag-a">
              ⚠ No QBR completed since onboarding
            </div>
          </div>
          <div className="ar-metrics">
            <div className="ar-metric">
              <div className="ar-metric-val" style={{ color: "#b91c1c" }}>
                32%
              </div>
              <div className="ar-metric-lbl">SaaS Health</div>
            </div>
            <div className="ar-metric">
              <div className="ar-metric-val" style={{ color: "#b45309" }}>
                55%
              </div>
              <div className="ar-metric-lbl">HW Health</div>
            </div>
            <div className="ar-metric">
              <div className="ar-metric-val" style={{ color: "#b91c1c" }}>
                28%
              </div>
              <div className="ar-metric-lbl">Relationship</div>
            </div>
            <div className="ar-metric">
              <div className="ar-metric-val">$18K</div>
              <div className="ar-metric-lbl">ARR at Risk</div>
            </div>
          </div>
          <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
            <button className="btn btn-primary">📞 Call Now</button>
            <button className="btn btn-ghost">📅 Schedule QBR</button>
            <button className="btn btn-ghost">✉ Send Email</button>
          </div>
        </div>
      </div>
      <div className="ar-card">
        <div className="ar-head">
          <div
            className="ar-logo"
            style={{ background: "#fee2e2", color: "#b91c1c" }}
          >
            AN
          </div>
          <div>
            <div className="ar-name">Airtel Nigeria</div>
            <div className="ar-since">
              Telecom · Nigeria · Client since Feb 2025
            </div>
          </div>
          <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <div className="ar-score-val" style={{ color: "#b91c1c" }}>
              43
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
              data-name="Airtel Nigeria"
              data-init="AN"
              data-bg="#fee2e2"
              data-col="#b91c1c"
              data-score="43"
            >
              Score Details
            </button>
            <button
              className="btn btn-blue co-row"
              data-name="Airtel Nigeria"
              data-init="AN"
              data-bg="#fee2e2"
              data-col="#b91c1c"
              data-score="43"
              data-sbg="#fee2e2"
              data-scol="#b91c1c"
            >
              View Profile →
            </button>
          </div>
        </div>
        <div className="ar-body">
          <div className="ar-flags">
            <div className="ar-flag ar-flag-r">
              🔴 Platform usage very low — 3 logins this month
            </div>
            <div className="ar-flag ar-flag-r">
              🔴 3 unresolved complaints open &gt;5 days
            </div>
            <div className="ar-flag ar-flag-a">
              ⚠ Onboarding behind schedule (Day 5/30)
            </div>
            <div className="ar-flag ar-flag-a">
              ⚠ NPS dropped to +12 (was +44 at contract)
            </div>
          </div>
          <div className="ar-metrics">
            <div className="ar-metric">
              <div className="ar-metric-val" style={{ color: "#b91c1c" }}>
                40%
              </div>
              <div className="ar-metric-lbl">SaaS Health</div>
            </div>
            <div className="ar-metric">
              <div className="ar-metric-val" style={{ color: "#b45309" }}>
                52%
              </div>
              <div className="ar-metric-lbl">HW Health</div>
            </div>
            <div className="ar-metric">
              <div className="ar-metric-val" style={{ color: "#b91c1c" }}>
                36%
              </div>
              <div className="ar-metric-lbl">Relationship</div>
            </div>
            <div className="ar-metric">
              <div className="ar-metric-val">$20.4K</div>
              <div className="ar-metric-lbl">ARR at Risk</div>
            </div>
          </div>
          <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
            <button className="btn btn-primary">📞 Call Now</button>
            <button className="btn btn-ghost">📅 Schedule QBR</button>
            <button className="btn btn-ghost">✉ Send Email</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Risk;
