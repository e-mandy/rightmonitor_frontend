import { useQuery } from "@tanstack/react-query";
import { getCompanies, getCompaniesMetrics } from "../api/companies.api";

export const useCompany = () => {
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

  return { fetchCompanies, fetchCompaniesMetrics };
};
