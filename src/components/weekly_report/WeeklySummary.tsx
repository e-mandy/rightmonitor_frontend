import { useEffect, useMemo } from "react";
import { useDateStore } from "../../store/current_date.store";
import { getWeek } from "../../utils/functions/getFormatDate";
import WeeklyKPI from "./WeeklyKPI";
import { useCompany } from "../../hooks/useCompany";
import { Spinner } from "react-bootstrap";
import { getEvolution } from "../../utils/functions/getEvolution";
import { getFormatMoney } from "../../utils/functions/fetFormatMoney";

const WeeklySummary = () => {
  const { start_date, end_date } = useMemo(() => getWeek(), []);

  const setDate = useDateStore((state) => state.setDate);

  useEffect(() => {
    setDate(start_date, end_date);
  }, [end_date, start_date, setDate]);

  const {
    fetchCompaniesKPI: { data: companiesKPI, isPending },
  } = useCompany();

  return (
    <div className="wr-header">
      <div className="wr-kpis p-0">
        <WeeklyKPI
          label="Gross Revenue Retention"
          value={isPending ? <Spinner /> : `${companiesKPI?.avg_grr.current}%`}
          trend={
            isPending ? (
              <Spinner />
            ) : (
              `${getEvolution(companiesKPI?.avg_grr.lvm ?? 0).symbol} ${getEvolution(companiesKPI?.avg_grr.lvm ?? 0).sign}${companiesKPI?.avg_grr.lvm}%`
            )
          }
        />
        <WeeklyKPI
          label="Net Revenue Retention"
          value={isPending ? <Spinner /> : `${companiesKPI?.avg_nrr.current}%`}
          trend={
            isPending ? (
              <Spinner />
            ) : (
              `${getEvolution(companiesKPI?.avg_nrr.lvm ?? 0).symbol} ${getEvolution(companiesKPI?.avg_nrr.lvm ?? 0).sign}${companiesKPI?.avg_nrr.lvm}%`
            )
          }
        />
        <WeeklyKPI
          label="Logo churn"
          value={
            isPending ? <Spinner /> : `${companiesKPI?.logo_churn.current}%`
          }
          trend={
            isPending ? (
              <Spinner />
            ) : (
              `${getEvolution(companiesKPI?.pipeline ?? 0).symbol} ${getEvolution(companiesKPI?.logo_churn.lvm ?? 0).sign}${companiesKPI?.logo_churn.lvm}%`
            )
          }
        />
        <WeeklyKPI
          label="Pipeline"
          value={
            isPending ? (
              <Spinner />
            ) : (
              `${getFormatMoney(companiesKPI?.pipeline ?? 0)}`
            )
          }
          trend="+12$"
        />
      </div>
    </div>
  );
};

export default WeeklySummary;
