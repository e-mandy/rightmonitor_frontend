import { Spinner } from "react-bootstrap";
import { useCompany } from "../../hooks/useCompany";
import KPICard from "./KPICard";
import { getFormatMoney } from "../../utils/functions/fetFormatMoney";
import { getEvolution } from "../../utils/functions/getEvolution";

const KPIContainer = () => {
  const {
    fetchCompaniesKPI: { data: companiesKPI, isPending },
  } = useCompany();

  return (
    <div className="krow">
      <KPICard
        label="Gross Revenue Retention"
        value={isPending ? <Spinner /> : `${companiesKPI?.avg_grr?.current}%`}
        trend={
          isPending ? (
            <Spinner />
          ) : (
            `${getEvolution(companiesKPI?.avg_grr.lvm ?? 0).symbol} ${getEvolution(companiesKPI?.avg_grr.lvm ?? 0).sign}${companiesKPI?.avg_grr.lvm}% vs last month`
          )
        }
        target="Target: &lt;90%"
        color="neutral"
      />
      <KPICard
        label="Net Revenue Retention"
        value={isPending ? <Spinner /> : `${companiesKPI?.avg_nrr?.current}%`}
        trend={
          isPending ? (
            <Spinner />
          ) : (
            `${getEvolution(companiesKPI?.avg_nrr.lvm ?? 0).symbol} ${getEvolution(companiesKPI?.avg_nrr.lvm ?? 0).sign}${companiesKPI?.avg_nrr.lvm}% vs last month`
          )
        }
        target="Target: &lt;105%"
        color="neutral"
      />
      <KPICard
        label="Logo Churn"
        value={
          isPending ? <Spinner /> : `${companiesKPI?.logo_churn?.current}%`
        }
        trend={
          isPending ? (
            <Spinner />
          ) : (
            `${getEvolution(companiesKPI?.logo_churn.lvm ?? 0).symbol} ${getEvolution(companiesKPI?.logo_churn.lvm ?? 0).sign}${companiesKPI?.logo_churn.lvm}% vs last month`
          )
        }
        target="Target: &lt;2%"
        color="neutral"
      />
      <KPICard
        label="Expansion Pipeline"
        value={
          isPending ? (
            <Spinner />
          ) : (
            `${getFormatMoney(companiesKPI?.global_grr ?? 0)}`
          )
        }
        trend="4 active upsell opportunities"
        target={
          <>
            Monthly target:{" "}
            {isPending ? (
              <Spinner size="sm" />
            ) : (
              getFormatMoney(companiesKPI?.mrr ?? 0)
            )}
          </>
        }
        color="neutral"
      />
    </div>
  );
};

export default KPIContainer;
