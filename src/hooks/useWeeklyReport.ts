import { useQuery } from "@tanstack/react-query";
import { useCompaniesId } from "./useCompaniesId";
import { useCompany } from "./useCompany";
import { useCompanies } from "./useCompanies";
import { healthChanges } from "../api/weekly_report.api";

export const useWeeklyReport = () => {
  const { fetchCompanies } = useCompany();
  const { companies } = useCompanies();
  const { isReady, companiesId } = useCompaniesId(
    {
      data: fetchCompanies.data,
      isSuccess: fetchCompanies.isSuccess,
    },
    companies,
  );

  const getHealthChanges = useQuery({
    queryKey: ["health_changes"],
    queryFn: () => {
      return healthChanges(companiesId);
    },
    enabled: isReady,
  });

  return { getHealthChanges };
};
