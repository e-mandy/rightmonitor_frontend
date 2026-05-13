import { Spinner } from "react-bootstrap";
import { useCompany } from "../../hooks/useCompany";
import KPICard from "./KPICard";
import { getFormatMoney } from "../../utils/functions/fetFormatMoney";

const KPIContainer = () => {
  const {
    fetchCompaniesKPI: { data: companiesKPI, isPending },
  } = useCompany();

  console.log(companiesKPI);
  return (
    <div className="krow">
      <KPICard
        label="Gross Revenue Retention"
        value={isPending ? <Spinner /> : `${companiesKPI?.avg_grr?.current}%`}
        trend="▲ +1.3% vs last month"
        target="Target: &lt;90%"
        color="neutral"
      />
      <KPICard
        label="Net Revenue Retention"
        value={isPending ? <Spinner /> : `${companiesKPI?.avg_nrr?.current}%`}
        trend="▲ +3.1% vs last month"
        target="Target: &lt;105%"
        color="neutral"
      />
      <KPICard
        label="Logo Churn"
        value={
          isPending ? <Spinner /> : `${companiesKPI?.logo_churn?.current}%`
        }
        trend="▲ +0.4% — near threshold"
        target="Target: &lt;2%"
        color="neutral"
      />
      <KPICard
        label="Expansion Pipeline"
        value={
          isPending ? (
            <Spinner />
          ) : (
            `${getFormatMoney(companiesKPI?.global_grr)}`
          )
        }
        trend="4 active upsell opportunities"
        target={
          <>
            Monthly target:{" "}
            {isPending ? <Spinner /> : getFormatMoney(companiesKPI?.mrr)}
          </>
        }
        color="neutral"
      />
    </div>
  );
};

export default KPIContainer;
