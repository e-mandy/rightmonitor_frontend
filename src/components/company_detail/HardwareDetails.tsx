import { Spinner } from "react-bootstrap";
import { useCurrentCompany } from "../../hooks/useCurrentCompany";
import HeadDetails from "./HeadDetails";

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
    </div>
  );
};

export default HardwareDetails;
