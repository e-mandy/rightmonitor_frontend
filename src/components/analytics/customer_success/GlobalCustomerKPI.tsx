import AverageHealth from "./AverageHealth";
import RiskTrend from "./RiskTrend";

const GlobalCustomerKPI = () => {
  return (
    <div className="d-flex gap-8 align-items-center">
      <AverageHealth />
      <RiskTrend />
    </div>
  );
};

export default GlobalCustomerKPI;
