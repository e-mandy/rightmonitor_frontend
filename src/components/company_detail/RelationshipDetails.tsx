import { Spinner } from "react-bootstrap";
import { useCurrentCompany } from "../../hooks/useCurrentCompany";
import HeadDetails from "./HeadDetails";
import { ErrorBoundary } from "../ErrorBoundary";
import RelationshipHealthDetailsCardContainer from "./relationship/RelationshipHealthDetailsCardContainer";

const RelationshipDetails = () => {
  const { isReady, companyWithMetrics } = useCurrentCompany();
  return (
    <div>
      <HeadDetails
        section_name="Relationship Health"
        value={
          !isReady ? (
            <Spinner />
          ) : (
            Math.round(companyWithMetrics?.relationship_health)
          )
        }
      />
      <ErrorBoundary>
        <RelationshipHealthDetailsCardContainer />
      </ErrorBoundary>
    </div>
  );
};

export default RelationshipDetails;
