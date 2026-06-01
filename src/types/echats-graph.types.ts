export type EchartsBarType = {
  title?: string;
  xData?: string[];
  series: {
    startAngle?: number;
    endAngle?: number;
    name?: string;
    data?: number[] | [{ value: number; name?: string }];
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
  };
  legend?: string[];
};
