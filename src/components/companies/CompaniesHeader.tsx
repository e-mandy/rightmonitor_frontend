import { useCompany } from "../../hooks/useCompany";

const CompaniesHeader = () => {
  const {
    fetchCompanies: { data: companies },
  } = useCompany();
  return (
    <div className="ph">
      <div>
        <div className="ph-title">Companies</div>
        <div className="ph-sub">
          All companies · {companies?.length} companies
        </div>
      </div>
    </div>
  );
};

export default CompaniesHeader;
