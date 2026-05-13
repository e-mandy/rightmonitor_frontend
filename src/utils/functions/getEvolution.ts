export const getEvolution = (
  value: number,
): { symbol: string; sign: string } => {
  return value >= 0
    ? {
        symbol: "▲",
        sign: "+",
      }
    : {
        symbol: "▼",
        sign: "-",
      };
};
