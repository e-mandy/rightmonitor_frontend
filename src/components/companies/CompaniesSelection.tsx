import { ReactSelect } from "@rightcom/right-lib";
import { useCompany } from "../../hooks/useCompany";
import type { CompanyType } from "../../types/company.type";
import { useState } from "react";
import { useSelectedCompaniesKPIStore } from "../../store/kpi.store";

const CompaniesSelection = () => {
  const [selectedCurrentCompanies, setSelectedCurrentCompanies] = useState<
    null | { value: string; label: string }[]
  >(null);

  const setSelectedCompanies =
    useSelectedCompaniesKPIStore.getState().setSelectedCompanies;

  const {
    fetchCompanies: { data },
  } = useCompany();

  const options =
    data?.map((company: CompanyType) => ({
      value: company.company_id,
      label: company.name,
    })) ?? [];

  const handleSelection = () => {
    const companiesId =
      selectedCurrentCompanies?.map((v) => parseInt(v.value)) ?? [];
    setSelectedCompanies(companiesId);
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
