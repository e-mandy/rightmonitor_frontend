import { DateRangePicker } from "@rightcom/right-lib";
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
          <DateRangePicker />
        </div>
      </div>
      <AnalyticsSections />
    </div>
  );
};

export default Analytics;
