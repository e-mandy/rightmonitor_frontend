import type { CompanyMetricType, CompanyType } from "../types/company.type";
import { useCompany } from "./useCompany";

type CompanyMetricStatus = "warning" | "at-risk" | "healthy" | "all";
export const useCompanyMetrics = () => {
  const {
    fetchCompanies: { data: companies },
    fetchCompaniesMetrics: { data: companiesMetrics },
  } = useCompany();

  const getCompanyWithMetrics = (status: CompanyMetricStatus) => {
    if (!companies || !companiesMetrics) return [];
    let data = [];
    if (status !== "all") {
      data = companiesMetrics[`${status}`];
    } else {
      data = [
        ...companiesMetrics["warning"],
        ...companiesMetrics["healthy"],
        ...companiesMetrics["at-risk"],
      ];
    }
    return data
      .map((metric: CompanyMetricType) => {
        let currentCompany = companies.find(
          (company: CompanyType) => company.company_id === metric.company_id,
        );
        if (!currentCompany) return;
        currentCompany = { ...currentCompany, ...metric };
        return currentCompany;
      })
      .filter(Boolean);
  };

  return { getCompanyWithMetrics };
};
