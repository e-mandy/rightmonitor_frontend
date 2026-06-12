import { useCompany } from "../../hooks/useCompany";
import CompaniesSelection from "../companies/CompaniesSelection";

const DashboardHeader = () => {
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
        <CompaniesSelection />
      </div>
    </div>
  );
};

export default DashboardHeader;
