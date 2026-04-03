const Onboarding = () => {
  return (
    <div className="view" id="view-onboarding">
      <div className="ph">
        <div>
          <div className="ph-title">Onboarding Tracker</div>
          <div className="ph-sub">All companies · Implementation progress</div>
        </div>
        <div className="ph-right">
          <button className="btn btn-ghost">↓ Export</button>
          <button className="btn btn-primary">+ New Onboarding</button>
        </div>
      </div>
      <div className="ob-stats">
        <div className="ob-stat">
          <div className="ob-stat-val">8</div>
          <div className="ob-stat-lbl">Active Onboardings</div>
        </div>
        <div className="ob-stat">
          <div
            className="ob-stat-val"
            style={{
              color: "#15803d",
            }}
          >
            3
          </div>
          <div className="ob-stat-lbl">On Track</div>
        </div>
        <div className="ob-stat">
          <div className="ob-stat-val" style={{ color: "#b45309" }}>
            3
          </div>
          <div className="ob-stat-lbl">Delayed</div>
        </div>
        <div className="ob-stat">
          <div className="ob-stat-val" style={{ color: "#b91c1c" }}>
            2
          </div>
          <div className="ob-stat-lbl">Behind Schedule</div>
        </div>
      </div>
      <div className="card">
        <div className="ch">
          <div className="ch-t">All Onboardings</div>
          <span className="ch-a">Filter ▾</span>
        </div>
        <div className="cb">
          <table className="ob-table">
            <thead>
              <tr>
                <th
                  style={{
                    width: "22%",
                  }}
                >
                  Company
                </th>
                <th>Stage</th>
                <th>Progress</th>
                <th>Days</th>
                <th>CSA</th>
                <th>Go-live</th>
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
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "var(--t1)",
                    }}
                  >
                    Ecobank GH
                  </div>
                  <div style={{ fontSize: "10px", color: "var(--t3)" }}>
                    Banking · Ghana
                  </div>
                </td>
                <td>
                  <span className="bx bx-g">Fully Deployed</span>
                </td>
                <td>
                  <div className="ob-pw">
                    <div
                      className="ob-p"
                      style={{ width: "100%", background: "#80b500" }}
                    ></div>
                  </div>
                </td>
                <td style={{ fontWeight: "700", color: "#15803d" }}>12 / 30</td>
                <td style={{ color: "var(--t2)" }}>Amos A.</td>
                <td style={{ color: "#15803d", fontWeight: "700" }}>✓ Done</td>
                <td>
                  <span className="bx bx-g">On Track</span>
                </td>
                <td>
                  <span className="vlink">View →</span>
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
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "var(--t1)",
                    }}
                  >
                    MTN Ghana
                  </div>
                  <div style={{ fontSize: "10px", color: "var(--t3)" }}>
                    Telecom · Ghana
                  </div>
                </td>
                <td>
                  <span className="bx bx-b">Training</span>
                </td>
                <td>
                  <div className="ob-pw">
                    <div
                      className="ob-p"
                      style={{ width: "82%", background: "#80b500" }}
                    ></div>
                  </div>
                </td>
                <td style={{ fontWeight: "700", color: "#15803d" }}>45 / 60</td>
                <td style={{ color: "var(--t2)" }}>Amos A.</td>
                <td style={{ color: "var(--t2)" }}>Apr 15</td>
                <td>
                  <span className="bx bx-g">On Track</span>
                </td>
                <td>
                  <span className="vlink">View →</span>
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
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "var(--t1)",
                    }}
                  >
                    Standard Bank
                  </div>
                  <div style={{ fontSize: "10px", color: "var(--t3)" }}>
                    Banking · Nigeria
                  </div>
                </td>
                <td>
                  <span className="bx bx-a">Device Setup</span>
                </td>
                <td>
                  <div className="ob-pw">
                    <div
                      className="ob-p"
                      style={{ width: "55%", background: "#f59e0b" }}
                    ></div>
                  </div>
                </td>
                <td style={{ fontWeight: 700, color: "#b45309" }}>20 / 30</td>
                <td style={{ color: "var(--t2)" }}>Amos A.</td>
                <td style={{ color: "#b45309", fontWeight: 700 }}>Apr 8 ⚠</td>
                <td>
                  <span className="bx bx-a">Delayed</span>
                </td>
                <td>
                  <span className="vlink">View →</span>
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
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "var(--t1)",
                    }}
                  >
                    BCEAO Sénégal
                  </div>
                  <div style={{ fontSize: "10px", color: "var(--t3)" }}>
                    Finance · Sénégal
                  </div>
                </td>
                <td>
                  <span className="bx bx-r">Kickoff</span>
                </td>
                <td>
                  <div className="ob-pw">
                    <div
                      className="ob-p"
                      style={{ width: "28%", background: "#ef4444" }}
                    ></div>
                  </div>
                </td>
                <td style={{ fontWeight: 700, color: "#b91c1c" }}>8 / 30</td>
                <td style={{ color: "var(--t2)" }}>Amos A.</td>
                <td style={{ color: "#b91c1c", fontWeight: 700 }}>r 3 ✗</td>
                <td>
                  <span className="bx bx-r">Behind</span>
                </td>
                <td>
                  <span className="vlink">View →</span>
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
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "var(--t1)",
                    }}
                  >
                    Airtel Nigeria
                  </div>
                  <div style={{ fontSize: "10px", color: "var(--t3)" }}>
                    Telecom · Nigeria
                  </div>
                </td>
                <td>
                  <span className="bx bx-r">Kickoff</span>
                </td>
                <td>
                  <div className="ob-pw">
                    <div
                      className="ob-p"
                      style={{ width: "18%", background: "#ef4444" }}
                    ></div>
                  </div>
                </td>
                <td style={{ fontWeight: 700, color: "#b91c1c" }}>5 / 30</td>
                <td style={{ color: "var(--t2)" }}>Marie K.</td>
                <td style={{ color: "#b91c1c", fontWeight: 700 }}>Apr 12 ✗</td>
                <td>
                  <span className="bx bx-r">Behind</span>
                </td>
                <td>
                  <span className="vlink">View →</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
