import type { CompanyType } from "../types/company.type";

export const useCompaniesId = (
  fetchCompanies: { isSuccess: boolean; data: CompanyType[] },
  selectedCompanies: number[],
) => {
  const companiesId =
    selectedCompanies.length > 0
      ? selectedCompanies
      : (fetchCompanies.data?.map((company: CompanyType) =>
          parseInt(company.company_id),
        ) ?? []);

  const isReady = companiesId.length > 0 && fetchCompanies.isSuccess;

  return { isReady, companiesId };
};
