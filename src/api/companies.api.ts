import Parse from "parse";

export const getCompanies = async () => {
  const query = await Parse.Cloud.run("companies");
  return query.data;
};

export const getCompaniesMetrics = async (companies: number[]) => {
  const query = await Parse.Cloud.run("companies_metrics", {
    companies: companies,
  });
  return query.data;
};

export const getKPIStats = async (
  companies: number[],
  start_date: string | null = null,
  end_date: string | null = null,
) => {
  const query = await Parse.Cloud.run("global_stats", {
    companies: companies,
    start_date: start_date,
    end_date: end_date,
  });
  return query.data;
};

export const getCompanyMetrics = async (company_id: number) => {
  const now = new Date();
  const query = await Parse.Cloud.run("company_metrics", {
    company_id: company_id,
    start_date: new Date(now.getFullYear(), now.getMonth(), 1),
  });
  return query.data;
};

export const getCompany = async (id: string) => {
  const query = await Parse.Cloud.run("company", {
    id: id,
  });

  return query.data;
};
