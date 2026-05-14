import WeeklySummary from "../components/weekly_report/WeeklySummary";
import { getWeek } from "../utils/functions/getFormatDate";

const WeeklyReport = () => {
  const start_date = getWeek().start_date.getDate();
  const end_date = getWeek().end_date.getDate();
  const weekly_part = getWeek().start_date.toDateString().split(" ");

  return (
    <div className="view" id="view-report">
      <div className="ph">
        <div>
          <div className="ph-title">Weekly Report</div>
          <div className="ph-sub">
            Week of {start_date} - {end_date} {weekly_part[1]} {weekly_part[3]}
          </div>
        </div>
        <div className="ph-right">
          <button className="btn btn-ghost">↓ Download PDF</button>
          <button className="btn btn-primary">✉ Send to Team</button>
        </div>
      </div>
      <WeeklySummary />
      <div className="g2">
        <div className="wr-sec">
          <div className="wr-sec-head">
            <div className="wr-sec-title">Health Score Changes</div>
          </div>
          <div className="wr-sec-body">
            <table className="wr-table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Prev.</th>
                  <th>Current</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 700, color: "var(--t1)" }}>
                    Ecobank GH
                  </td>
                  <td>79</td>
                  <td style={{ color: "#15803d", fontWeight: 700 }}>82</td>
                  <td style={{ color: "#15803d", fontWeight: 700 }}>▲ +3</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700, color: "var(--t1)" }}>
                    MTN Ghana
                  </td>
                  <td>74</td>
                  <td style={{ color: "#15803d", fontWeight: 700 }}>76</td>
                  <td style={{ color: "#15803d", fontWeight: 700 }}>▲ +2</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700, color: "var(--t1)" }}>
                    Standard Bank
                  </td>
                  <td>63</td>
                  <td style={{ color: "#b45309", fontWeight: 700 }}>58</td>
                  <td style={{ color: "#b91c1c", fontWeight: 700 }}>▼ −5</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700, color: "var(--t1)" }}>
                    BCEAO Sénégal
                  </td>
                  <td>44</td>
                  <td style={{ color: "#b91c1c", fontWeight: 700 }}>38</td>
                  <td style={{ color: "#b91c1c", fontWeight: 700 }}>▼ −6</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 700, color: "var(--t1)" }}>
                    Airtel Nigeria
                  </td>
                  <td>49</td>
                  <td style={{ color: "#b91c1c", fontWeight: 700 }}>43</td>
                  <td style={{ color: "#b91c1c", fontWeight: 700 }}>▼ −6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="wr-sec">
          <div className="wr-sec-head">
            <div className="wr-sec-title">Product Activity This Week</div>
          </div>
          <div className="wr-sec-body">
            <table className="wr-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Events</th>
                  <th>Active Cos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600, color: "var(--t1)" }}>
                    RightQ
                  </td>
                  <td>6,842 tickets</td>
                  <td style={{ color: "#15803d", fontWeight: 700 }}>22</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: "var(--t1)" }}>
                    RightSurvey
                  </td>
                  <td>1,204 responses</td>
                  <td style={{ color: "#15803d", fontWeight: 700 }}>18</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: "var(--t1)" }}>
                    RightDesk
                  </td>
                  <td>47 complaints</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600, color: "var(--t1)" }}>
                    RightTime
                  </td>
                  <td>38 appointments</td>
                  <td>12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="wr-sec">
        <div className="wr-sec-head">
          <div className="wr-sec-title">Key Highlights &amp; Actions</div>
        </div>
        <div className="wr-sec-body">
          <div className="wr-hl">
            <b>Ecobank GH health score improved to 82</b> — NPS rose to +68.
            Onboarding completed. Next QBR: April 2.
          </div>
          <div className="wr-hl">
            <b>MTN Ghana hardware warning</b> — 2 kiosk devices offline at
            Branch 7. IT team notified.
          </div>
          <div className="wr-hl warn">
            <b>Standard Bank declined to 58 (−5 pts)</b> — Low adoption and 3
            open complaints. Recommend QBR this week.
          </div>
          <div className="wr-hl risk">
            <b>BCEAO Sénégal at critical risk (38)</b> — Onboarding delayed, no
            exec engagement. Urgent call required. ARR at risk: $18K.
          </div>
          <div className="wr-hl risk">
            <b>Airtel Nigeria declining (43, −6 pts)</b> — 3 unresolved
            complaints. NPS +12. Immediate action needed. ARR: $20.4K.
          </div>
          <div className="wr-hl">
            <b>RightData upsell at Ecobank GH</b> — Follow-up call recommended.
            Est. value: $4,200/yr.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReport;
