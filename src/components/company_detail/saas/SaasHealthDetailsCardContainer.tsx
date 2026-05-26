import HealthDetailsCard from "../HealthDetailsCard";

const SaasHealthDetailsCardContainer = () => {
  const DETAILS_INFORMATIONS: {
    head_name: string;
    score: number;
    label: string;
  }[] = [
    {
      head_name: "Frequency of usage score",
      score: 0,
      label: "Sessions / active days",
    },
    {
      head_name: "Feature adoption score",
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

export default SaasHealthDetailsCardContainer;
