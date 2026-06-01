import { Spinner } from "react-bootstrap";
import { useCurrentCompany } from "../../hooks/useCurrentCompany";
import HeadDetails from "./HeadDetails";
import HardwareHealthDetailsCardContainer from "./hardware/HardwareHealthDetailsCardContainer";
import { ErrorBoundary } from "../ErrorBoundary";
import HardwareExplanation from "./hardware/HardwareExplanation";

const HardwareDetails = () => {
  const { companyWithMetrics, isReady } = useCurrentCompany();

  return (
    <div>
      <HeadDetails
        section_name="Hardware Health"
        value={
          !isReady ? (
            <Spinner />
          ) : (
            Math.round(companyWithMetrics?.hardware_health)
          )
        }
      />
      <ErrorBoundary>
        <HardwareHealthDetailsCardContainer />
      </ErrorBoundary>
      <HardwareExplanation />
    </div>
  );
};

export default HardwareDetails;
