export const getFormatTime = (decimalValue: number): string => {
  const hours = Math.floor(decimalValue);
  const minutes = Math.round(decimalValue - hours);

  return `${hours}h ${minutes}m`;
};
