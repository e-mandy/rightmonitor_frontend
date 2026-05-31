import EchartSComponent from "../../EchartSComponent";
import { Card } from "@rightcom/right-lib";

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

  const legend = ["Modules used"];

  return (
    <Card className="mt-5">
      <Card.Body>
        <EchartSComponent
          title="Adoption fluctuation"
          legend={legend}
          xData={WEEK_DAYS}
          series={{ name: "Modules used", data: [12, 30, 40, 100, 10, 3, 50] }}
        />
      </Card.Body>
    </Card>
  );
};

export default ModulesUsage;
