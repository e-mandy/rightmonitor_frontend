import { DateRangePicker } from "@rightcom/right-lib";
import { getWeek } from "../../utils/functions/getFormatDate";
import { useDateStore } from "../../store/current_date.store";

const Weekly_header = () => {
  const start_date = getWeek().start_date.getDate();
  const end_date = getWeek().end_date.getDate();
  const weekly_part = getWeek().start_date.toDateString().split(" ");
  const setDate = useDateStore().setDate;
  const handleWeeklyDate = (ranges: any) => {
    if (ranges != null) {
      const start_date = new Date(ranges[0]["$d"]);
      const end_date = new Date(ranges[1]["$d"]);
      setDate(start_date.toISOString(), end_date.toISOString());
    }
  };

  return (
    <div className="ph">
      <div>
        <div className="ph-title">Weekly Report</div>
        <div className="ph-sub">
          Week of {start_date} - {end_date} {weekly_part[1]} {weekly_part[3]}
        </div>
      </div>
      <div className="ph-right">
        <DateRangePicker onChange={handleWeeklyDate} />
      </div>
    </div>
  );
};

export default Weekly_header;
