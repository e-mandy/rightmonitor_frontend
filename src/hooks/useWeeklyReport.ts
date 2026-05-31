import { useQuery } from "@tanstack/react-query";
import { useCompaniesId } from "./useCompaniesId";
import { useCompany } from "./useCompany";
import { useCompanies } from "./useCompanies";
import {
  healthChanges,
  newlyRisk,
  worseningHealthTrend,
} from "../api/weekly_report.api";
import type { CompanyType } from "../types/company.type";
import type { newlyAtRiskType } from "../types/weekly_report.types";

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

  const getHealthChanges = useQuery<
    {
      company: string;
      previous: number;
      current: number;
      change: number;
    }[]
  >({
    queryKey: ["health_changes"],
    queryFn: () => {
      return healthChanges(companiesId);
    },
    enabled: isReady,
  });

  const getNewlyAtRisk = useQuery({
    queryKey: ["newly_risk"],
    queryFn: () => {
      return newlyRisk(companiesId);
    },
    enabled: isReady,
  });

  const getWorseningHealthTrend = useQuery({
    queryKey: ["worseningHS"],
    queryFn: () => worseningHealthTrend(companiesId),
    enabled: isReady,
  });

  const getCompanyInfo = (company_id: string) => {
    let company = null;
    if (fetchCompanies.isSuccess) {
      company = fetchCompanies.data.find(
        (company: CompanyType) => company.company_id === company_id,
      );
    }

    return company;
  };

  return {
    getHealthChanges,
    getCompanyInfo,
    getWorseningHealthTrend,
    getNewlyAtRisk,
  };
};
