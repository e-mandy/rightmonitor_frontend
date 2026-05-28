import { ErrorBoundary } from "../ErrorBoundary";
import NewlyAtRisk from "./NewlyAtRisk";
import WorseCompaniesHealth from "./WorseCompaniesHealth";

const RisksEscalations = () => {
  return (
    <div className="d-flex w-100 gap-10">
      <ErrorBoundary>
        <NewlyAtRisk />
      </ErrorBoundary>
      <WorseCompaniesHealth />
    </div>
  );
};

export default RisksEscalations;
