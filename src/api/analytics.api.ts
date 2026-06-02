import Parse from "parse";

export const fetchAnalytics = async (companies: number[]) => {
  const response = await Parse.Cloud.run("global_stats", {
    companies: companies,
  });

  return response.data;
};
