import { create } from "zustand";

interface SelectedCompaniesKPIType {
  selectedCompanies: number[] | [];
  setSelectedCompanies: (companiesId: number[]) => void;
}

export const useSelectedCompaniesKPIStore = create<SelectedCompaniesKPIType>(
  (set) => ({
    selectedCompanies: [],
    setSelectedCompanies: (companiesId: number[] | []) =>
      set({ selectedCompanies: companiesId }),
  }),
);
