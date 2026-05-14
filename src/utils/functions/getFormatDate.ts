export const getFormatDate = (date: string) => {
  const dateObj = new Date(date);

  const formatData = dateObj.toDateString().split(" ");

  return formatData[1] + " " + formatData[3];
};

export const getWeek = () => {
  const date = new Date();
  let end_date = null;
  let start_date = null;
  if (date.getDay() === 0) {
    end_date = new Date(date);
    start_date = new Date(date.setDate(date.getDate() - 6));
  } else if (date.getDay() === 1) {
    start_date = new Date(date);
    end_date = new Date(date.setDate(date.getDate() + 6));
  } else {
    start_date = new Date(date.setDate(date.getDate() - date.getDay() + 1));
    end_date = new Date(date.setDate(date.getDate() + (7 - date.getDay())));
  }

  return { start_date, end_date };
};
