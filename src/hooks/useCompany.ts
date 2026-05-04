import { useQuery } from "@tanstack/react-query";
import {
  getCompanies,
  getCompaniesMetrics,
  getKPIStats,
} from "../api/companies.api";
import { useSelectedCompaniesKPIStore } from "../store/kpi.store";
import type { CompanyType } from "../types/company.type";

export const useCompany = () => {
  const { selectedCompanies } = useSelectedCompaniesKPIStore();

  const fetchCompanies = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
    throwOnError: true,
  });

  const fetchCompaniesMetrics = useQuery({
    queryKey: ["companies_metrics"],
    queryFn: getCompaniesMetrics,
    throwOnError: true,
  });

  const fetchCompaniesKPI = useQuery({
    queryKey: ["companies_kpi", selectedCompanies],
    queryFn: () => {
      const companiesId =
        selectedCompanies.length > 0
          ? selectedCompanies
          : (fetchCompanies?.data?.map(
              (company: CompanyType) => company.company_id,
            ) ?? []);
      return getKPIStats(companiesId);
    },
    enabled:
      fetchCompanies.isSuccess &&
      (selectedCompanies.length > 0 || (fetchCompanies?.data?.length ?? 0) > 0),
  });

  return { fetchCompanies, fetchCompaniesMetrics, fetchCompaniesKPI };
};
