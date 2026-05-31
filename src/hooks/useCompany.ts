import { useQuery } from "@tanstack/react-query";
import {
  getCompanies,
  getCompaniesMetrics,
  getCompany,
  getCompanyMetrics,
  getKPIStats,
} from "../api/companies.api";
import { useParams } from "react-router-dom";
import { useCompanies } from "./useCompanies";
import { useCompaniesId } from "./useCompaniesId";
import type { KpiType } from "../types/kpi.types";
import { useDateStore } from "../store/current_date.store";
import type { CompanyMetricType, CompanyType } from "../types/company.type";

export const useCompany = () => {
  const { companies } = useCompanies();
  const { company_id } = useParams<{ company_id: string }>();
  const start_date = useDateStore((state) => state.start_date);
  const end_date = useDateStore((state) => state.end_date);

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

  const fetchCompanyMetrics = useQuery<CompanyMetricType>({
    queryKey: ["company_metrics", company_id],
    queryFn: () => getCompanyMetrics(parseInt(company_id!)),
    enabled: !!company_id,
  });

  const fetchCurrentCompany = useQuery<CompanyType>({
    queryKey: ["current_company", company_id],
    queryFn: () => getCompany(parseInt(company_id!)),
    enabled: !!company_id,
  });

  return {
    fetchCompanies,
    fetchCompaniesMetrics,
    fetchCompaniesKPI,
    fetchCompanyMetrics,
    fetchCurrentCompany,
  };
};
