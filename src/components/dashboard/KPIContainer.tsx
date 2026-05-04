import { useCompany } from "../../hooks/useCompany";
import KPICard from "./KPICard";

const KPIContainer = () => {
  const {
    fetchCompaniesKPI: { data: companiesKPI },
  } = useCompany();
  return (
    <div className="krow">
      <KPICard
        label="Gross Revenue Retention"
        value={`${companiesKPI?.avg_grr}%`}
        trend="▲ +1.3% vs last month"
        target="Target: &lt;90%"
        color="neutral"
      />
      <KPICard
        label="Net Revenue Retention"
        value={`${companiesKPI?.avg_nrr}%`}
        trend="▲ +3.1% vs last month"
        target="Target: &lt;105%"
        color="neutral"
      />
      <KPICard
        label="Logo Churn"
        value={`${companiesKPI?.logo_churn}%`}
        trend="▲ +0.4% — near threshold"
        target="Target: &lt;2%"
        color="neutral"
      />
      <KPICard
        label="Expansion Pipeline"
        value="$142.000"
        trend="4 active upsell opportunities"
        target="Monthly target: $200K"
        color="neutral"
      />
    </div>
  );
};

export default KPIContainer;
