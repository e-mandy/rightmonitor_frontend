import EChartsReact from "echarts-for-react";
import type { EchartsBarType } from "../types/echats-graph.types";

const EchartSComponent = ({ ...data }: EchartsBarType) => {
  const option = {
    title: { text: data.title },
    tooltip: {
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      data: data.xData,
    },
    yAxis: {},
    series: [
      {
        name: data.series.name,
        type: "bar",
        data: data.series.data,
      },
    ],
  };

  return (
    <div>
      <EChartsReact option={option} />
    </div>
  );
};

export default EchartSComponent;
