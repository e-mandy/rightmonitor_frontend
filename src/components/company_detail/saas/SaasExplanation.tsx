import FormulaCard from "../FormulaCard";
import ProgressBar from "../ProgressBar";

const SaasExplanation = () => {
  return (
    <div>
      <div>
        <h3>Saas health formula</h3>
        <ProgressBar label="Feature adpotion" value={40} />
        <ProgressBar label="Frequency of platform usage" value={50} />
      </div>
      <div className="mt-8">
        <FormulaCard
          order={1}
          formula_label="Frequency usage score"
          explanation="Measure whether a company is truly using a product over a given period."
          value_gained="frequency_usage"
          formula="(active_day / period_days) * 100"
        />
        <FormulaCard
          order={2}
          explanation="Measure how deeply a company is using the capabilities of a product, beyond simple platform access or platform activity frequency."
          formula_label="Feature adoption"
          value_gained="feature_adoption"
          formula="(active_day / period_days) * 100"
        />
      </div>
    </div>
  );
};

export default SaasExplanation;
