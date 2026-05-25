import { useQuery } from "@tanstack/react-query";
import {
  getCompanies,
  getCompaniesMetrics,
  getCompanyMetrics,
  getKPIStats,
} from "../api/companies.api";
import { useLocation } from "react-router-dom";
import { useCompanies } from "./useCompanies";
import { useCompaniesId } from "./useCompaniesId";
import type { KpiType } from "../types/kpi.types";
import { useDateStore } from "../store/current_date.store";

export const useCompany = () => {
  const { companies } = useCompanies();
  const { state } = useLocation();
  const start_date = useDateStore((state) => state.start_date);
  const end_date = useDateStore((state) => state.end_date);

  const id: null | string = state?.id ?? null;

  const fetchCompanies = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
    throwOnError: true,
  });

  const { companiesId, isReady } = useCompaniesId(
    { data: fetchCompanies.data, isSuccess: fetchCompanies.isSuccess },
    companies,
  );

  const fetchCompaniesMetrics = useQuery({
    queryKey: ["companies_metrics", companies],
    queryFn: () => getCompaniesMetrics(companiesId),
    enabled: isReady,
  });

  const fetchCompaniesKPI = useQuery<KpiType>({
    queryKey: ["companies_kpi", companies],
    queryFn: () =>
      getKPIStats(
        companiesId,
        start_date?.toISOString(),
        end_date?.toISOString(),
      ),
    enabled: isReady,
  });

  const fetchCompanyMetrics = useQuery({
    queryKey: ["company_metrics"],
    queryFn: () => {
      if (!id) return null;
      return getCompanyMetrics(parseInt(id));
    },
  });

  return {
    fetchCompanies,
    fetchCompaniesMetrics,
    fetchCompaniesKPI,
    fetchCompanyMetrics,
  };
};
