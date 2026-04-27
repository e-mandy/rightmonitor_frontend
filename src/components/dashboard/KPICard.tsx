import { Card } from "@rightcom/right-lib";
import type { Color } from "../../types/colors.types";
import { getTargetColor } from "../../utils/functions/getTargetColor";

type KPICardType = {
  label: string;
  value: string | number;
  trend?: string;
  details?: string;
  target: string;
  color: Color;
};

const KPICard = ({ ...data }: KPICardType) => {
  return (
    <Card className="kcard">
      <Card.Body>
        <div className="klbl">{data.label}</div>
        <div
          className="kval c-g"
          style={{
            color: getTargetColor(data.color).color,
          }}
        >
          {data.value}
        </div>
        {data?.trend && !data?.details ? (
          <div
            className="ktrend kt-g"
            style={{
              color: getTargetColor(data.color).color,
            }}
          >
            {data?.trend}
          </div>
        ) : (
          <div className="ktrend kt-g">{data.details}</div>
        )}

        <div className="ktgt">{data.target}</div>
      </Card.Body>
    </Card>
  );
};

export default KPICard;
