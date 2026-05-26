import { useCurrentCompany } from "../../../hooks/useCurrentCompany";
import HealthDetailsCard from "../HealthDetailsCard";

const HardwareHealthDetailsCardContainer = () => {
  const { companyWithMetrics } = useCurrentCompany();

  const DETAILS_INFORMATIONS: {
    head_name: string;
    score: number;
    label: string;
  }[] = [
    {
      head_name: "Uptime",
      score: 0,
      label: "Last 30 days",
    },
    {
      head_name: "Offline terminals",
      score: 0,
      label: "of 28 total",
    },
    {
      head_name: "RMA Open",
      score: Math.round(companyWithMetrics?.rma_rate),
      label: "of 28 total",
    },
    {
      head_name: "Offline terminals",
      score: 0,
      label: "of 28 total",
    },
  ];

  return (
    <div className="d-flex my-6 gap-6">
      {DETAILS_INFORMATIONS.map((e) => (
        <HealthDetailsCard {...e} />
      ))}
    </div>
  );
};

export default HardwareHealthDetailsCardContainer;
