import { Spinner } from "react-bootstrap";
import { useCurrentCompany } from "../../hooks/useCurrentCompany";
import HeadDetails from "./HeadDetails";

const RelationshipDetails = () => {
  const { isReady, companyWithMetrics } = useCurrentCompany();
  return (
    <div>
      <HeadDetails
        section_name="Saas Health"
        value={
          !isReady ? <Spinner /> : Math.round(companyWithMetrics?.saas_health)
        }
      />
    </div>
  );
};

export default RelationshipDetails;
