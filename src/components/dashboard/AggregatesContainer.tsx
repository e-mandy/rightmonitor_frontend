import {
  CheckCircleFill,
  Circle,
  ExclamationCircle,
  HouseDoorFill,
  XCircleFill,
} from "react-bootstrap-icons";
import AggregateCard, { type AggregateCardType } from "./AggregateCard";
import { getTargetColor } from "../../utils/functions/getTargetColor";
import { useCompany } from "../../hooks/useCompany";

const AggregatesContainer = () => {
  const { data: companies } = useCompany();

  const AGGREGATES_FIELDS: AggregateCardType[] = [
    {
      color: "green",
      icon: <Circle size="18" color={getTargetColor("green").color} />,
      label: "Total Companies",
      value: companies?.length,
    },
    {
      color: "green",
      icon: <CheckCircleFill size="18" color={getTargetColor("green").color} />,
      label: "Healthy",
      value: "17",
    },
    {
      color: "orange",
      icon: (
        <ExclamationCircle size="18" color={getTargetColor("orange").color} />
      ),
      label: "Warning",
      value: "4",
    },
    {
      color: "red",
      icon: <XCircleFill size="18" color={getTargetColor("red").color} />,
      label: "At Risk",
      value: "24",
    },
    {
      color: "blue",
      icon: <HouseDoorFill size="18" color={getTargetColor("blue").color} />,
      label: "Pipeline",
      value: "142k",
    },
  ];
  return (
    <div className="strip">
      {AGGREGATES_FIELDS.map((aggregate) => (
        <AggregateCard {...aggregate} />
      ))}
    </div>
  );
};

export default AggregatesContainer;
