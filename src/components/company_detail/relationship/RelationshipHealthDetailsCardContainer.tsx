import { useCurrentCompany } from "../../../hooks/useCurrentCompany";
import HealthDetailsCard from "../HealthDetailsCard";

const RelationshipHealthDetailsCardContainer = () => {
  const { companyWithMetrics } = useCurrentCompany();

  const DETAILS_INFORMATIONS: {
    head_name: string;
    score: number;
    label: string;
  }[] = [
    {
      head_name: "NPS score",
      score: companyWithMetrics?.implementation_nps?.nps,
      label: `${companyWithMetrics?.implementation_nps?.promoters_pct} respondants`,
    },
    {
      head_name: "Support sentiment",
      score: 0,
      label: "Handled",
    },
    {
      head_name: "QBR Completion",
      score: 0,
      label: "Module adopted / available",
    },
    {
      head_name: "Support sentiment",
      score: 0,
      label: "Module adopted / available",
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

export default RelationshipHealthDetailsCardContainer;
