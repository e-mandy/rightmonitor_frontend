import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../api/companies.api";
import { useCompanies } from "./useCompanies";
import { useCompaniesId } from "./useCompaniesId";
import { fetchAnalytics } from "../api/analytics.api";

export const useAnalytics = () => {
  const { companies } = useCompanies();
  const fetchCompanies = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
    throwOnError: true,
  });

  const { companiesId, isReady } = useCompaniesId(
    { data: fetchCompanies.data, isSuccess: fetchCompanies.isSuccess },
    companies,
  );

  const getAnalytics = useQuery({
    queryKey: ["analytics"],
    queryFn: () => fetchAnalytics(companiesId),
    enabled: isReady,
  });

  return { getAnalytics };
};
