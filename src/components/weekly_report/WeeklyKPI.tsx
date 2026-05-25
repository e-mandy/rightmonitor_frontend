import { Card } from "@rightcom/right-lib";
import type { KPICardType } from "../dashboard/KPICard";

const WeeklyKPI = ({ ...data }: KPICardType) => {
  return (
    <Card className="shadow-none border-2">
      <Card.Body>
        <div className="klbl">{data.label}</div>
        <div className="kval">{data.value}</div>
        {<div className="ktrend">{data?.trend} vs last week</div>}
      </Card.Body>
    </Card>
  );
};

export default WeeklyKPI;
