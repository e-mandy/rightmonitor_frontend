import { ErrorBoundary } from "../../ErrorBoundary";
import AverageHealth from "./AverageHealth";
import RiskTrend from "./RiskTrend";

const GlobalCustomerKPI = () => {
  return (
    <div className="d-flex gap-8 align-items-center my-8">
      <ErrorBoundary>
        <AverageHealth />
      </ErrorBoundary>
      <RiskTrend />
    </div>
  );
};

export default GlobalCustomerKPI;
