import Parse from "parse";

export const getCompanies = async () => {
  const query = await Parse.Cloud.run("companies");
  return query.data;
};

export const getCompaniesMetrics = async () => {
  const query = await Parse.Cloud.run("companies_metrics");
  return query.data;
};

export const getKPIStats = async (companies: string[]) => {
  const query = await Parse.Cloud.run("global_stats", {
    companies: companies,
  });
  return query.data;
};
