import { createContext } from "react";

type CompaniesContextType = {
  companies: number[];
  setCompaniesValue: (data: number[]) => void;
};

export const CompaniesContext = createContext<CompaniesContextType>({
  companies: [],
  setCompaniesValue: () => {},
});
