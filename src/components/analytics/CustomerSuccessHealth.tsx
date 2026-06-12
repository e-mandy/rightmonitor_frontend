import GlobalCustomerKPI from "./customer_success/GlobalCustomerKPI";
import PipelineExpansion from "./customer_success/PipelineExpansion";

const CustomerSuccessHealth = () => {
  return (
    <div>
      <GlobalCustomerKPI />
      <div className="d-flex">
        <PipelineExpansion />
      </div>
    </div>
  );
};

export default CustomerSuccessHealth;
