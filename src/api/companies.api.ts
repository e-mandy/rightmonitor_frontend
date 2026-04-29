import Parse from "parse";

export const getCompanies = async () => {
  const query = await Parse.Cloud.run("companies");
  return query.data;
};

export const getCompaniesMetrics = async () => {
  const query = await Parse.Cloud.run("companies_metrics");
  console.log(query.data);
  return query.data;
};
