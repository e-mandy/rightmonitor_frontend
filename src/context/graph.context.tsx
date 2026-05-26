import { createContext } from "react";

type GraphContextType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  echartInstance: null | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setEchartInstance: (echart: any) => void;
};

export const GraphContext = createContext<GraphContextType>({
  echartInstance: null,
  setEchartInstance: () => {},
});
