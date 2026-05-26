import { Spinner } from "react-bootstrap";
import { useCurrentCompany } from "../../hooks/useCurrentCompany";
import HeadDetails from "./HeadDetails";
import HealthDetailsCardContainer from "./saas/HealthDetailsCardContainer";
import { ErrorBoundary } from "../ErrorBoundary";
import SaasExplanation from "./saas/SaasExplanation";

const SaasDetails = () => {
  const { companyWithMetrics, isReady } = useCurrentCompany();
  return (
    <div>
      <HeadDetails
        section_name="Saas Health"
        value={
          !isReady ? <Spinner /> : Math.round(companyWithMetrics?.saas_health)
        }
      />
      <ErrorBoundary>
        <HealthDetailsCardContainer />
      </ErrorBoundary>
      <SaasExplanation />
    </div>
  );
};

export default SaasDetails;
