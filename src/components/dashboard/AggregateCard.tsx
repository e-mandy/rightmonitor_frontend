import { Card } from "@rightcom/right-lib";
import { getTargetColor } from "../../utils/functions/getTargetColor";
import type { Color } from "../../types/colors.types";
import { Link } from "react-router-dom";

export type AggregateCardType = {
  value: string | number;
  label: string;
  icon: React.ReactNode;
  color: Color;
  hasView: boolean;
  link?: string;
};

const AggregateCard = ({ ...data }: AggregateCardType) => {
  return (
    <Card className="flex-grow-1">
      <Card.Body className="d-flex flex-row gap-5 justify-content-start align-items-center">
        <div
          className="p-3 d-flex rounded-3 justify-content-center align-items-center"
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
          <div
            className="scard-lbl"
            style={{
              fontSize: "12px",
            }}
          >
            {data.label}
          </div>
          {data.hasView && data.link && (
            <div className="my-1 fs-7">
              <Link
                to={{
                  pathname: "/companies",
                  search: `?filter=${data.link.toLowerCase()}`,
                }}
                className="text-primary fw-bold"
              >
                View
              </Link>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default AggregateCard;
