import { useCompany } from "../../hooks/useCompany";
import { DateRangePicker } from "@rightcom/right-lib";
import CompaniesSelection from "./CompaniesSelection";

const CompaniesHeader = () => {
  const {
    fetchCompanies: { data: companies },
  } = useCompany();
  return (
    <div className="ph">
      <div>
        <div className="ph-title">360° Overview</div>
        <div className="ph-sub">
          Real-time · All products · {companies?.length} companies
        </div>
      </div>
      <div className="ph-right d-flex align-items-center">
        <DateRangePicker />
        <CompaniesSelection />
      </div>
    </div>
  );
};

export default CompaniesHeader;
