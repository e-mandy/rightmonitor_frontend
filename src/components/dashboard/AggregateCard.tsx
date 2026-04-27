import { Card } from "@rightcom/right-lib";
import { getTargetColor } from "../../utils/functions/getTargetColor";
import type { Color } from "../../types/colors.types";

export type AggregateCardType = {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: Color;
};

const AggregateCard = ({ ...data }: AggregateCardType) => {
  return (
    <Card className="scard">
      <Card.Body className="d-flex flex-row gap-5 justify-content-start">
        <div
          className="p-3 d-flex rounded-3 justify-content-center"
          style={{
            background: getTargetColor(data.color).bg,
          }}
        >
          {data.icon}
        </div>
        <div>
          <div
            className="scard-val"
            style={{
              color: getTargetColor(data.color).color,
            }}
          >
            {data.value}
          </div>
          <div className="scard-lbl">{data.label}</div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AggregateCard;
