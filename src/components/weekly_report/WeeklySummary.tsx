import { useEffect, useMemo } from "react";
import { useDateStore } from "../../store/current_date.store";
import { getWeek } from "../../utils/functions/getFormatDate";
import WeeklyKPI from "./WeeklyKPI";

const WeeklySummary = () => {
  const { start_date, end_date } = useMemo(() => getWeek(), []);

  const setDate = useDateStore((state) => state.setDate);
  useEffect(() => {
    setDate(start_date, end_date);
  }, [end_date, start_date, setDate]);

  return (
    <div className="wr-header">
      <div className="wr-kpis p-0">
        <WeeklyKPI label="Gross Revenue Retention" value="102%" trend="+1.2%" />
        <WeeklyKPI label="Net Revenue Retention" value="102%" trend="+1.2%" />
        <WeeklyKPI label="Logo churn" value="102%" trend="+1.2%" />
        <WeeklyKPI label="Pipeline" value="123$" trend="+12$" />
      </div>
    </div>
  );
};

export default WeeklySummary;
