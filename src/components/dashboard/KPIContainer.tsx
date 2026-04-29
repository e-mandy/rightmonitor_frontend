import KPICard from "./KPICard";

const KPIContainer = () => {
  return (
    <div className="krow">
      <KPICard
        label="Gross Revenue Retention"
        value="94.2%"
        trend="▲ +1.3% vs last month"
        target="Target: &lt;90%"
        color="neutral"
      />
      <KPICard
        label="Net Revenue Retention"
        value="108.7%"
        trend="▲ +3.1% vs last month"
        target="Target: &lt;105%"
        color="neutral"
      />
      <KPICard
        label="Logo Churn"
        value="1.8%"
        trend="▲ +0.4% — near threshold"
        target="Target: &lt;2%"
        color="neutral"
      />
      <KPICard
        label="GrossRevenue Retention"
        value="$142.000"
        trend="4 active upsell opportunities"
        target="Monthly target: $200K"
        color="neutral"
      />
    </div>
  );
};

export default KPIContainer;
