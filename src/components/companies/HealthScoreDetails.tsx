import { useState } from "react";
import { Card } from "@rightcom/right-lib";
import { ErrorBoundary } from "../ErrorBoundary";
import SaasDetails from "../company_detail/SaasDetails";
import HardwareDetails from "../company_detail/HardwareDetails";
import RelationshipDetails from "../company_detail/RelationshipDetails";

const HealthScoreDetails = () => {
  const [section, setSection] = useState<"saas" | "hardware" | "relationship">(
    "saas",
  );

  const SECTIONS_COMPONENTS = {
    saas: <SaasDetails />,
    hardware: <HardwareDetails />,
    relationship: <RelationshipDetails />,
  };

  return (
    <div className="px-15">
      <div>
        <Card className="overflow-hidden ps-3 my-6">
          <Card.Body className="d-flex gap-5 p-0">
            <div
              className={`w-kpi-section ${section === "saas" && "active"}`}
              onClick={() => setSection("saas")}
            >
              Saas Health
            </div>
            <div
              className={`w-kpi-section ${section === "hardware" && "active"}`}
              onClick={() => setSection("hardware")}
            >
              Hardware Health
            </div>
            <div
              className={`w-kpi-section ${section === "relationship" && "active"}`}
              onClick={() => setSection("relationship")}
            >
              Relationship Health
            </div>
          </Card.Body>
        </Card>
      </div>
      <ErrorBoundary>
        <div>{SECTIONS_COMPONENTS[section]}</div>
      </ErrorBoundary>
    </div>
  );
};

export default HealthScoreDetails;
