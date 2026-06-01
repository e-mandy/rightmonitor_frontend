import FormulaCard from "../FormulaCard";

const HardwareExplanation = () => {
  return (
    <div>
      <div>
        <h3>Hardware health formula</h3>
      </div>
      <div className="mt-8">
        <FormulaCard
          order={1}
          formula_label="Return Merchandise Authorization"
          explanation="Evaluates the frequency of hardware returns, replacements, repairs, or device-related operational failures within the customer environment over a defined period."
          value_gained="return_merchandise_authorization"
          formula="number_of_rma_devices / total_deployed_devices"
        />
        <FormulaCard
          order={2}
          explanation="Measures the number of active devices over the defined period."
          formula_label="Uptime"
          value_gained="uptime"
          formula="coming later..."
        />
      </div>
    </div>
  );
};

export default HardwareExplanation;
