import type { CustomerScoreType } from "../components/dashboard/CustomerScore";
import { useCompany } from "./useCompany";

export const useCurrentCompany = () => {
  const {
    fetchCurrentCompany: { data: company, isSuccess: successCompany },
    fetchCompanyMetrics: {
      data: companyMetrics,
      isSuccess: successCompanyMetrics,
    },
  } = useCompany();

  const companyWithMetrics: CustomerScoreType =
    successCompany && successCompanyMetrics
      ? Object.assign(companyMetrics, company[0])
      : null;

  return { companyWithMetrics };
};
