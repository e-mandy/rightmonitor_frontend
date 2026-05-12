import { useQuery } from "@tanstack/react-query";
import { useCompaniesId } from "./useCompaniesId";
import { getServiceQuality } from "../api/service_quality.api";
import { useCompany } from "./useCompany";
import { useCompanies } from "./useCompanies";
import type { ServiceQualityType } from "../types/service_quality.types";

export const useQuality = () => {
  const {
    fetchCompanies: { data, isSuccess },
  } = useCompany();
  const { companies } = useCompanies();
  const { companiesId, isReady } = useCompaniesId(
    {
      data: data,
      isSuccess: isSuccess,
    },
    companies,
  );

  const fetchServiceQuality = useQuery<ServiceQualityType>({
    queryKey: ["service_quality"],
    queryFn: () => getServiceQuality(companiesId),
    enabled: isReady,
  });

  return { fetchServiceQuality };
};
