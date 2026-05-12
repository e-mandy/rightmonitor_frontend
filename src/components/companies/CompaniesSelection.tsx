import { ReactSelect } from "@rightcom/right-lib";
import { useCompany } from "../../hooks/useCompany";
import type { CompanyType } from "../../types/company.type";
import { useState } from "react";
import { useCompanies } from "../../hooks/useCompanies";

const CompaniesSelection = () => {
  const { setCompaniesValue, companies } = useCompanies();

  const {
    fetchCompanies: { data },
  } = useCompany();

  const selectedCompanies = companies.map((company) => {
    const companyData: CompanyType = data.find(
      (c: CompanyType) => c.company_id == company.toString(),
    );
    return { value: companyData.company_id, label: companyData.name };
  });

  const [selectedCurrentCompanies, setSelectedCurrentCompanies] = useState<
    null | { value: string; label: string }[]
  >(selectedCompanies ?? []);

  const options =
    data?.map((company: CompanyType) => ({
      value: company.company_id,
      label: company.name,
    })) ?? [];

  const handleSelection = () => {
    const companiesId =
      selectedCurrentCompanies?.map((v) => parseInt(v.value)) ?? [];
    setCompaniesValue(companiesId);
  };
  return (
    <div className="d-flex align-items-center gap-4">
      <ReactSelect
        placeholder="All companies"
        options={options}
        isMulti={true}
        value={selectedCurrentCompanies}
        onChange={setSelectedCurrentCompanies}
      />
      <button
        className="btn btn-primary"
        style={{
          height: "100%",
        }}
        onClick={handleSelection}
      >
        Filter
      </button>
    </div>
  );
};

export default CompaniesSelection;
