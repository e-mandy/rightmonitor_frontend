import { ErrorBoundary } from "../components/ErrorBoundary";
import WeeklySummary from "../components/weekly_report/WeeklySummary";
import WeelkyDetails from "../components/weekly_report/WeelkyDetails";
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
      <ErrorBoundary>
        <WeeklySummary />
      </ErrorBoundary>
      <ErrorBoundary>
        <WeelkyDetails />
      </ErrorBoundary>
    </div>
  );
};

export default WeeklyReport;
