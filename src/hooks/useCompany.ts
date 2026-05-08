import { useQuery } from "@tanstack/react-query";
import {
  getCompanies,
  getCompaniesMetrics,
  getCompanyMetrics,
  getKPIStats,
} from "../api/companies.api";
import { useSelectedCompaniesKPIStore } from "../store/kpi.store";
import type { CompanyType } from "../types/company.type";
import { useLocation } from "react-router-dom";

export const useCompany = () => {
  const { selectedCompanies } = useSelectedCompaniesKPIStore();
  const { state } = useLocation();

  const id: null | string = state?.id ?? null;

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

  const fetchCompanyMetrics = useQuery({
    queryKey: ["company_metrics"],
    queryFn: () => {
      if (!id) return null;
      return getCompanyMetrics(id);
    },
  });

  return {
    fetchCompanies,
    fetchCompaniesMetrics,
    fetchCompaniesKPI,
    fetchCompanyMetrics,
  };
};
