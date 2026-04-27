import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../api/companies.api";

export const useCompany = () => {
  return useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
    throwOnError: true,
  });
};
