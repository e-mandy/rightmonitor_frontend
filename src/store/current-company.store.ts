import { create } from "zustand";

interface CurrentCompanyStoreType {
  isOpenedModal: boolean;
  currentCompanyId: string;
  setIsOpenedModal: (value: boolean, companyId: string) => void;
}

export const useCurrentCompanyStore = create<CurrentCompanyStoreType>(
  (set) => ({
    isOpenedModal: false,
    currentCompanyId: "",

    setIsOpenedModal: (value: boolean, companyId: string) => {
      set({ isOpenedModal: value, currentCompanyId: companyId });
    },
  }),
);
