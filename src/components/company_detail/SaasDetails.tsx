import { Spinner } from "react-bootstrap";
import { useCurrentCompany } from "../../hooks/useCurrentCompany";
import HeadDetails from "./HeadDetails";
import { ErrorBoundary } from "../ErrorBoundary";
import SaasExplanation from "./saas/SaasExplanation";
import SaasHealthDetailsCardContainer from "./saas/SaasHealthDetailsCardContainer";

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
        <SaasHealthDetailsCardContainer />
      </ErrorBoundary>
      <SaasExplanation />
    </div>
  );
};

export default SaasDetails;
