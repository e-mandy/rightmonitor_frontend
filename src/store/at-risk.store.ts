import { create } from "zustand";

interface AtRiskStoreType {
  isOpenedModal: boolean;
  currentCompanyId: string;
  setIsOpenedModal: (value: boolean, companyId: string) => void;
}

export const useAtRiskStore = create<AtRiskStoreType>((set) => ({
  isOpenedModal: false,
  currentCompanyId: "",

  setIsOpenedModal: (value: boolean, companyId: string) => {
    set({ isOpenedModal: value, currentCompanyId: companyId });
  },
}));
