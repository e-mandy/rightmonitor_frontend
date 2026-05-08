import Parse from "parse";

export const getCompanies = async () => {
  const query = await Parse.Cloud.run("companies");
  return query.data;
};

export const getCompaniesMetrics = async (companies: string[]) => {
  const query = await Parse.Cloud.run("companies_metrics", {
    companies: companies,
  });
  return query.data;
};

export const getKPIStats = async (companies: string[]) => {
  const query = await Parse.Cloud.run("global_stats", {
    companies: companies,
  });
  return query.data;
};

export const getCompanyMetrics = async (company_id: string) => {
  const now = new Date();
  const query = await Parse.Cloud.run("company_metrics", {
    company_id: parseInt(company_id),
    start_date: new Date(now.getFullYear(), now.getMonth(), 1),
  });
  return query.data;
};
