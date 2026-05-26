import type React from "react";
import { GraphContext } from "../context/graph.context";
import { useState } from "react";

const GraphProvider = ({ children }: { children: React.ReactNode }) => {
  const [echart, setEchart] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setEchartInstance = (echart: any) => {
    setEchart(echart);
  };

  return (
    <GraphContext.Provider
      value={{
        echartInstance: echart,
        setEchartInstance: setEchartInstance,
      }}
    >
      {children}
    </GraphContext.Provider>
  );
};

export default GraphProvider;
