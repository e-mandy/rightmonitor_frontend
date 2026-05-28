import type { Color } from "../types/colors.types";

type GraphType = {
  value: number;
  trend: number;
  color: Color;
};

const Graph = ({ ...data }: GraphType) => {
  const quotient = data.trend / 4;
  const value = Math.abs(data.value);

  return (
    <svg viewBox="0 0 40 20" width="40" height="20">
      <rect
        x="0"
        y="4"
        width="7"
        height={value + quotient * 4}
        rx="1"
        fill="#F09595"
      />
      <rect
        x="11"
        y="8"
        width="7"
        height={value + quotient * 3}
        rx="1"
        fill="#E24B4A"
      />
      <rect
        x="22"
        y="12"
        width="7"
        height={value + quotient * 2}
        rx="1"
        fill="#A32D2D"
      />
      <rect
        x="33"
        y="16"
        width="7"
        height={value + quotient * 1}
        rx="1"
        fill="#791F1F"
      />
    </svg>
  );
};

export default Graph;
