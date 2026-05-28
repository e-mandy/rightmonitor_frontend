import Parse from "parse";

export const healthChanges = async (
  companiesId: number[],
  start_date: string | null = null,
  end_date: string | null = null,
) => {
  const response = await Parse.Cloud.run("health_changes", {
    companies: companiesId,
    start_date: start_date,
    end_date: end_date,
  });

  return response.data;
};

// export const newlyRIsk = async () => {
//   const response = await Parse.Cloud.run("newlyAtRisk");
// };

export const worseningHealthTrend = async (
  companiesId: number[],
  start_date: string | null = null,
  end_date: string | null = null,
) => {
  const response = await Parse.Cloud.run("worseningHS", {
    companies: companiesId,
    start_date: start_date,
    end_date: end_date,
  });

  return response.data;
};
