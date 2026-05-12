import { useState } from "react";
import { CompaniesContext } from "../context/companies.context";

export const CompaniesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [companies, setCompanies] = useState<number[]>([]);

  const setCompaniesValue = (companies: number[]) => {
    setCompanies(companies);
  };
  return (
    <CompaniesContext.Provider value={{ companies, setCompaniesValue }}>
      {children}
    </CompaniesContext.Provider>
  );
};
