import EChartsReact from "echarts-for-react";

const EchartSComponent = () => {
  const option = {
    title: { text: "Adoption progression" },
    tooltip: {
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      data: [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche",
      ],
    },
    yAxis: {},
    series: [{ name: "sales", type: "bar", data: [5, 20, 36, 10, 10, 20, 30] }],
  };

  return (
    <div>
      <EChartsReact option={option} />
    </div>
  );
};

export default EchartSComponent;
