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
import { getFormatMoney } from "../../utils/functions/fetFormatMoney";

const AggregatesContainer = () => {
  const {
    fetchCompanies: { data: companies },
    fetchCompaniesKPI: { data: companiesKPI },
  } = useCompany();

  const { getCompanyWithMetrics } = useCompanyMetrics();

  const AGGREGATES_FIELDS: AggregateCardType[] = [
    {
      color: "green",
      icon: <Circle size="18" color={getTargetColor("green").color} />,
      label: "Total Companies",
      value: companies?.length ?? 0,
      hasView: true,
      link: "all",
    },
    {
      color: "green",
      icon: <CheckCircleFill size="18" color={getTargetColor("green").color} />,
      label: "Healthy",
      value: getCompanyWithMetrics("healthy").length,
      hasView: true,
      link: "healthy",
    },
    {
      color: "orange",
      icon: (
        <ExclamationCircle size="18" color={getTargetColor("orange").color} />
      ),
      label: "Warning",
      value: getCompanyWithMetrics("warning").length,
      hasView: true,
      link: "warning",
    },
    {
      color: "red",
      icon: <XCircleFill size="18" color={getTargetColor("red").color} />,
      label: "At Risk",
      value: getCompanyWithMetrics("at-risk").length,
      hasView: true,
      link: "at-risk",
    },
    {
      color: "neutral",
      icon: <HouseDoorFill size="18" color={getTargetColor("blue").color} />,
      label: "Pipeline",
      value: getFormatMoney(companiesKPI?.global_grr),
      hasView: false,
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
