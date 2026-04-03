const Analytics = () => {
  return (
    <div className="view" id="view-analytics">
      <div className="ph">
        <div>
          <div className="ph-title">Analytics</div>
          <div className="ph-sub">
            Product performance &amp; customer trends · March 2026
          </div>
        </div>
        <div className="ph-right">
          <select className="tsel">
            <option>This Month</option>
            <option>Last Month</option>
            <option>Q1 2026</option>
            <option>Last 6 months</option>
          </select>
          <button className="btn btn-ghost">↓ Export</button>
        </div>
      </div>
      <div className="krow" style={{ marginBottom: "16px" }}>
        <div className="kcard kc-g">
          <div className="klbl">Total Tickets (RightQ)</div>
          <div className="kval" style={{ color: "#15803d", fontSize: "22px" }}>
            28,441
          </div>
          <div className="ktrend kt-g">▲ +12% vs last month</div>
        </div>
        <div className="kcard kc-b">
          <div className="klbl">Survey Responses</div>
          <div className="kval" style={{ color: "var(--b)", fontSize: "22px" }}>
            4,892
          </div>
          <div className="ktrend kt-g">▲ +8% vs last month</div>
        </div>
        <div className="kcard kc-a">
          <div className="klbl">Complaints Opened</div>
          <div className="kval" style={{ color: "#b45309", fontSize: "22px" }}>
            147
          </div>
          <div className="ktrend kt-a">▲ +5 vs last month</div>
        </div>
        <div className="kcard kc-p">
          <div className="klbl">Avg Health Score</div>
          <div className="kval" style={{ color: "#7c3aed", fontSize: "22px" }}>
            67.4
          </div>
          <div className="ktrend kt-n">▼ −1.2 vs last month</div>
        </div>
      </div>
      <div className="g2" style={{ marginBottom: "16px" }}>
        <div className="card">
          <div className="ch">
            <div className="ch-t">Ticket Volume — Last 6 Months</div>
          </div>
          <div className="cb">
            <div style={{ position: "relative", height: "220px" }}>
              <canvas id="chart-tickets"></canvas>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="ch">
            <div className="ch-t">Avg Health Score Trend</div>
          </div>
          <div className="cb">
            <div style={{ position: "relative", height: "220px" }}>
              <canvas id="chart-health"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="g333" style={{ marginBottom: "16px" }}>
        <div className="card">
          <div className="ch">
            <div className="ch-t">NPS Score by Company</div>
          </div>
          <div className="cb">
            <div style={{ position: "relative", height: "200px" }}>
              <canvas id="chart-nps"></canvas>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="ch">
            <div className="ch-t">Product Adoption Distribution</div>
          </div>
          <div className="cb">
            <div style={{ position: "relative", height: "200px" }}>
              <canvas id="chart-adoption"></canvas>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="ch">
            <div className="ch-t">Complaints by Category</div>
          </div>
          <div className="cb">
            <div style={{ position: "relative", height: "200px" }}>
              <canvas id="chart-complaints"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="ch">
          <div className="ch-t">Company Health Overview</div>
          <span className="ch-a">Export →</span>
        </div>
        <div className="cb">
          <table className="ht">
            <thead>
              <tr>
                <th style={{ width: "22%" }}>Company</th>
                <th>Health Score</th>
                <th>Tickets (mo.)</th>
                <th>NPS</th>
                <th>Open Complaints</th>
                <th>Trend</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="cname">Ecobank GH</div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="sbar-w">
                      <div className="sbar sb-g" style={{ width: "82%" }}></div>
                    </div>
                    <span className="sv sv-g">82</span>
                  </div>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "var(--t1)",
                  }}
                >
                  1,243
                </td>
                <td
                  style={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#15803d",
                  }}
                >
                  +68
                </td>
                <td style={{ textAlign: "center" }}>3</td>
                <td
                  style={{
                    textAlign: "center",
                    color: "#15803d",
                    fontWeight: 700,
                  }}
                >
                  ▲ +3
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cname">MTN Ghana</div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="sbar-w">
                      <div className="sbar sb-g" style={{ width: "76%" }}></div>
                    </div>
                    <span className="sv sv-g">76</span>
                  </div>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "var(--t1)",
                  }}
                >
                  2,108
                </td>
                <td
                  style={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#15803d",
                  }}
                >
                  +54
                </td>
                <td style={{ textAlign: "center" }}>1</td>
                <td
                  style={{
                    textAlign: "center",
                    color: "#15803d",
                    fontWeight: 700,
                  }}
                >
                  ▲ +2
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cname">Standard Bank</div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="sbar-w">
                      <div className="sbar sb-a" style={{ width: "58%" }}></div>
                    </div>
                    <span className="sv sv-a">58</span>
                  </div>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "var(--t1)",
                  }}
                >
                  876
                </td>
                <td
                  style={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#b45309",
                  }}
                >
                  +31
                </td>
                <td style={{ textAlign: "center" }}>5</td>
                <td
                  style={{
                    textAlign: "center",
                    color: "#b91c1c",
                    fontWeight: 700,
                  }}
                >
                  ▼ −5
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cname">BCEAO Sénégal</div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="sbar-w">
                      <div className="sbar sb-r" style={{ width: "38%" }}></div>
                    </div>
                    <span className="sv sv-r">38</span>
                  </div>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "var(--t1)",
                  }}
                >
                  212
                </td>
                <td
                  style={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#b91c1c",
                  }}
                >
                  +8
                </td>
                <td style={{ textAlign: "center" }}>7</td>
                <td
                  style={{
                    textAlign: "center",
                    color: "#b91c1c",
                    fontWeight: 700,
                  }}
                >
                  ▼ −6
                </td>
              </tr>
              <tr>
                <td>
                  <div className="cname">Airtel Nigeria</div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      justifyContent: "center",
                    }}
                  >
                    <div className="sbar-w">
                      <div className="sbar sb-r" style={{ width: "43%" }}></div>
                    </div>
                    <span className="sv sv-r">43</span>
                  </div>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "var(--t1)",
                  }}
                >
                  445
                </td>
                <td
                  style={{
                    textAlign: "center",
                    fontWeight: 700,
                    color: "#b91c1c",
                  }}
                >
                  +12
                </td>
                <td style={{ textAlign: "center" }}>6</td>
                <td
                  style={{
                    textAlign: "center",
                    color: "#b91c1c",
                    fontWeight: 700,
                  }}
                >
                  ▼ −6
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
