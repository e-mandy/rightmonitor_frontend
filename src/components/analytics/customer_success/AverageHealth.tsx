import EchartSComponent from "../../EchartSComponent";
import { Card } from "@rightcom/right-lib";

const AverageHealth = () => {
  return (
    <Card style={{ width: "30%" }}>
      <Card.Body>
        <h4>Average Health Score</h4>
        <EchartSComponent
          style={{ height: "300px" }}
          series={{
            type: "gauge",
            startAngle: 200,
            endAngle: -20,
            min: 0,
            max: 100,
            progress: {
              show: true,
              width: 30,
            },
            axisTick: {
              distance: -45,
              splitNumber: 5,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            splitLine: {
              distance: -52,
              length: 14,
              lineStyle: {
                width: 3,
                color: "#999",
              },
            },
            axisLine: { lineStyle: { width: 30 } },
            itemStyle: {
              color: "#6b9900",
            },
            detail: {
              valueAnimation: true,
              formatter: "{value}%",
              fontSize: 20,
            },
            pointer: {
              show: false,
            },
            splitNumber: 10,
            data: [{ value: 48 }],
          }}
        />
      </Card.Body>
    </Card>
  );
};

export default AverageHealth;
