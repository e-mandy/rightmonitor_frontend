import { useCompany } from "../../hooks/useCompany";

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
      <div className="ph-right">
        <button className="btn btn-ghost">↓ Export</button>
        <button className="btn btn-primary">+ Add Company</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
