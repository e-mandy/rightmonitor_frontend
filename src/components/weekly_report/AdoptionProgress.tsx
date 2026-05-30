import InactiveModules from "./adoption_progress/InactiveModules";
import ModulesUsage from "./adoption_progress/ModulesUsage";
import NewlyAdopted from "./adoption_progress/NewlyAdopted";

const AdoptionProgress = () => {
  return (
    <div>
      <div className="d-flex gap-8">
        <div className="flex-grow-1">
          <NewlyAdopted />
        </div>
        <div className="flex-grow-1">
          <InactiveModules />
        </div>
      </div>
      <div>
        <ModulesUsage />
      </div>
    </div>
  );
};

export default AdoptionProgress;
