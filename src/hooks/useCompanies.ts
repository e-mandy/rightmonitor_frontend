import { useContext } from "react";
import { CompaniesContext } from "../context/companies.context";

export const useCompanies = () => {
  const context = useContext(CompaniesContext);

  if (!context) {
    throw new Error(
      "useCompanies doit être utilisé dans un CompaniesProvider !",
    );
  }

  return context;
};
