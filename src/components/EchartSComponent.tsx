import EChartsReact from "echarts-for-react";
import type { EchartsBarType } from "../types/echats-graph.types";

interface EchartsComponentProps extends Partial<EchartsBarType> {
  option?: any;
  style?: React.CSSProperties;
}

const EchartSComponent = ({
  option: customOption,
  style,
  ...data
}: EchartsComponentProps) => {
  if (customOption) {
    return (
      <div style={style}>
        <EChartsReact option={customOption} style={style} />
      </div>
    );
  }

  const isGauge = data.series?.type === "gauge";

  const option = {
    title: data.title ? { text: data.title } : undefined,
    tooltip: {
      trigger: isGauge ? "item" : "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: data.legend ? { data: data.legend } : undefined,
    ...(isGauge
      ? {}
      : {
          xAxis: {
            type: "category",
            data: data.xData,
          },
          yAxis: {
            type: "value",
          },
        }),
    series: data.series
      ? [
          {
            ...data.series,
          },
        ]
      : [],
  };

  return (
    <div style={style}>
      <EChartsReact option={option} style={style} />
    </div>
  );
};

export default EchartSComponent;
