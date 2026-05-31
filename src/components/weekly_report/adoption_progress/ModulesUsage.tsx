import EchartSComponent from "../../EchartSComponent";

const ModulesUsage = () => {
  const WEEK_DAYS = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  return (
    <div>
      <EchartSComponent
        title="Adoption fluctuation"
        xData={WEEK_DAYS}
        series={{ name: "Modules used", data: [12, 30, 40, 100, 10, 3, 50] }}
      />
    </div>
  );
};

export default ModulesUsage;
