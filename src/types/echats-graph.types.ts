export type EchartsBarType = {
  title?: string;
  xData?: string[];
  series: {
    startAngle?: number;
    endAngle?: number;
    name?: string;
    data?: any;
    type: string;
    min?: number;
    max?: number;
    progress?: {
      show: boolean;
      width: number;
    };
    axisLine?: {
      lineStyle: {
        width: number;
      };
    };
    itemStyle?: {
      color: string;
    };
    splitNumber?: number;
    pointer?: {
      show: boolean;
    };
    detail?: {
      valueAnimation: boolean;
      formatter: string;
      fontSize: number;
    };
    [key: string]: any;
  };
  legend?: string[];
  option?: any;
  [key: string]: any;
  xAxis: {
    type: string;
    data: string[];
  };
};
