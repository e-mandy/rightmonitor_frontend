import KPICard from "../dashboard/KPICard";

const AnalyticsKPIContainer = () => {
  return (
    <div className="krow" style={{ marginBottom: "16px" }}>
      <KPICard
        label="Total Tickets"
        value="28441"
        trend="▲ +12% vs last month"
      />
      <KPICard
        label="Survey Reponses"
        value="4,892"
        trend="▲ +8% vs last month"
      />
      <KPICard
        label="Complaints Opened"
        value="147"
        trend="▲ +5 vs last month"
      />
      <KPICard
        label="Avg Health Score"
        value="67.4"
        trend="▼ −1.2 vs last month"
      />
    </div>
  );
};

export default AnalyticsKPIContainer;
