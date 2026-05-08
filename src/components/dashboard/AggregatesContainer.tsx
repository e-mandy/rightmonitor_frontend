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
import { useCompanyMetrics } from "../../hooks/useCompaniesMetrics";

const AggregatesContainer = () => {
  const {
    fetchCompanies: { data: companies },
  } = useCompany();

  const { getCompanyWithMetrics } = useCompanyMetrics();

  console.log(getCompanyWithMetrics("all"));
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
      value: getCompanyWithMetrics("healthy").length,
    },
    {
      color: "orange",
      icon: (
        <ExclamationCircle size="18" color={getTargetColor("orange").color} />
      ),
      label: "Warning",
      value: getCompanyWithMetrics("warning").length,
    },
    {
      color: "red",
      icon: <XCircleFill size="18" color={getTargetColor("red").color} />,
      label: "At Risk",
      value: getCompanyWithMetrics("at-risk").length,
    },
    {
      color: "neutral",
      icon: <HouseDoorFill size="18" color={getTargetColor("blue").color} />,
      label: "Pipeline",
      value: "142k",
    },
  ];
  return (
    <div className="strip">
      {AGGREGATES_FIELDS.map((aggregate, index) => (
        <AggregateCard {...aggregate} key={index} />
      ))}
    </div>
  );
};

export default AggregatesContainer;
