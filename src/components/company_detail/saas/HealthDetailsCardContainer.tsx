import HealthDetailsCard from "../HealthDetailsCard";

const HealthDetailsCardContainer = () => {
  const DETAILS_INFORMATIONS = [
    {
      head_name: "Frequency of usage score",
      score: 68,
      label: "Sessions / active days",
    },
    {
      head_name: "Feature adoption score",
      score: 68,
      label: "Module adopted / available",
    },
  ];

  return (
    <div className="d-flex my-6 gap-6">
      {DETAILS_INFORMATIONS.map((e) => (
        <HealthDetailsCard />
      ))}
    </div>
  );
};

export default HealthDetailsCardContainer;
