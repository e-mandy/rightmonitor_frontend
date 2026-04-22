export const getFormatDate = (date: string) => {
  const dateObj = new Date(date);

  const formatData = dateObj.toDateString().split(" ");

  return formatData[1] + " " + formatData[3];
};
