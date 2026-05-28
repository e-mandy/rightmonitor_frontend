import type { Color } from "../types/colors.types";

type GraphType = {
  value: number;
  trend: number;
  color?: Color;
};

const Graph = ({ ...data }: GraphType) => {
  const quotient = Math.abs(data.trend) / 4;
  const levels = [1, 1, 3, 4];
  const absciss = levels.map((level) => {
    return ((Math.abs(data.value) + quotient * level) * 20) / 100;
  });

  return (
    <svg viewBox="0 0 40 20" width="40" height="20">
      <rect
        x="0"
        y={20 - absciss[3]}
        width="7"
        height={absciss[3]}
        rx="1"
        fill="#F09595"
      />
      <rect
        x="11"
        y={20 - absciss[2]}
        width="7"
        height={absciss[2]}
        rx="1"
        fill="#E24B4A"
      />
      <rect
        x="22"
        y={20 - absciss[1]}
        width="7"
        height={absciss[1]}
        rx="1"
        fill="#A32D2D"
      />
      <rect
        x="33"
        y={20 - absciss[0]}
        width="7"
        height={absciss[0]}
        rx="1"
        fill="#791F1F"
      />
    </svg>
  );
};

export default Graph;
