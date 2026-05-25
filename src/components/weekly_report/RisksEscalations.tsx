import NewlyAtRisk from "./NewlyAtRisk";
import WorseCompaniesHealth from "./WorseCompaniesHealth";

const RisksEscalations = () => {
  return (
    <div className="d-flex w-100 gap-10">
      <NewlyAtRisk />
      <WorseCompaniesHealth />
    </div>
  );
};

export default RisksEscalations;
