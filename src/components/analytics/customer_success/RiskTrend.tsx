import EchartSComponent from "../../EchartSComponent";
import { Card } from "@rightcom/right-lib";

const RiskTrend = () => {
  return (
    <Card className="flex-grow-1">
      <Card.Body>
        <h4>At Risk Trend</h4>
        <EchartSComponent
          series={{
            type: "line",
            data: [12, 34, 67, 78, 90, 10, 16],
          }}
          xData={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
          legend={["At risk Companies"]}
        />
      </Card.Body>
    </Card>
  );
};

export default RiskTrend;
