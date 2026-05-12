import { useQuery } from "@tanstack/react-query";
import {
  getCompanies,
  getCompaniesMetrics,
  getCompanyMetrics,
  getKPIStats,
} from "../api/companies.api";
import type { CompanyType } from "../types/company.type";
import { useLocation } from "react-router-dom";
import { useCompanies } from "./useCompanies";

export const useCompany = () => {
  const { companies } = useCompanies();
  const { state } = useLocation();

  const id: null | string = state?.id ?? null;

  const fetchCompanies = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
    throwOnError: true,
  });

  const fetchCompaniesMetrics = useQuery({
    queryKey: ["companies_metrics", companies],
    queryFn: () => {
      const companiesId =
        companies.length > 0
          ? companies
          : (fetchCompanies?.data?.map(
              (company: CompanyType) => company.company_id,
            ) ?? []);
      if (companiesId.lengt === 0) return null;

      return getCompaniesMetrics(companiesId);
    },
    enabled:
      fetchCompanies.isSuccess && (fetchCompanies?.data?.length ?? 0) > 0,
  });

  const fetchCompaniesKPI = useQuery({
    queryKey: ["companies_kpi", companies],
    queryFn: () => {
      const companiesId =
        companies.length > 0
          ? companies
          : (fetchCompanies?.data?.map(
              (company: CompanyType) => company.company_id,
            ) ?? []);
      return getKPIStats(companiesId);
    },
    enabled:
      fetchCompanies.isSuccess &&
      (companies.length > 0 || (fetchCompanies?.data?.length ?? 0) > 0),
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
