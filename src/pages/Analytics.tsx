import AnalyticsSections from "../components/analytics/AnalyticsSections";

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
      <AnalyticsSections />
    </div>
  );
};

export default Analytics;
