import { Card } from "@rightcom/right-lib";

export type KPICardType = {
  label: string;
  value: string | number | React.ReactNode;
  trend?: string | React.ReactNode;
  target?: string | React.ReactNode;
};

const KPICard = ({ ...data }: KPICardType) => {
  return (
    <Card>
      <Card.Body>
        <div className="klbl">{data.label}</div>
        <div className="kval">{data.value}</div>
        {<div className="ktrend">{data?.trend}</div>}

        <div className="ktgt">{data.target}</div>
      </Card.Body>
    </Card>
  );
};

export default KPICard;
