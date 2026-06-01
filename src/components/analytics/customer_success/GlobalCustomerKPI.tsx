import HealthDetailsCard from "../../company_detail/HealthDetailsCard";
import EchartSComponent from "../../EchartSComponent";

const GlobalCustomerKPI = () => {
  return (
    <div className="d-flex gap-8">
      <HealthDetailsCard
        head_name="Avg Health Score"
        score={70}
        label="/ 100 %"
      />
      <div className="flex-grow-1">
        <EchartSComponent
          series={{
            type: "",
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
            splitNumber: 20,
            data: [{ value: 75 }],
          }}
        />
      </div>
    </div>
  );
};

export default GlobalCustomerKPI;
