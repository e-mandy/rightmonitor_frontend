import { ErrorBoundary } from "../components/ErrorBoundary";
import WeeklySummary from "../components/weekly_report/WeeklySummary";
import WeeklyDetails from "../components/weekly_report/WeeklyDetails";
import Weekly_header from "../components/weekly_report/Weekly_header";

const WeeklyReport = () => {
  return (
    <div className="view" id="view-report">
      <Weekly_header />
      <ErrorBoundary>
        <WeeklySummary />
      </ErrorBoundary>
      <ErrorBoundary>
        <WeeklyDetails />
      </ErrorBoundary>
    </div>
  );
};

export default WeeklyReport;
