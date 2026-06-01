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
    legend: {
      data: data.legend,
    },
    xAxis: {
      data: data.xData,
    },
    yAxis: {},
    series: [
      {
        name: data.series.name,
        type: data.series.type,
        data: data.series.data,
        min: data.series.min,
        max: data.series.max,
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
