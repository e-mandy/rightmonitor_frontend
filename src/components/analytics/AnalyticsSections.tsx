import { useState } from "react";
import { Card } from "react-bootstrap";
import { ErrorBoundary } from "../ErrorBoundary";
import CustomerSuccessHealth from "./CustomerSuccessHealth";
import ProductAdoption from "./ProductAdoption";
import SupportEffectiveness from "./SupportEffectiveness";
import RelationshipQuality from "./RelationshipQuality";

const AnalyticsSections = () => {
  const [section, setSection] = useState<
    "customer" | "adoption" | "support" | "relationship"
  >("customer");

  const SECTIONS_COMPONENTS = {
    customer: <CustomerSuccessHealth />,
    adoption: <ProductAdoption />,
    support: <SupportEffectiveness />,
    relationship: <RelationshipQuality />,
  };

  return (
    <div>
      <div>
        <Card className="overflow-hidden ps-3 my-6">
          <Card.Body className="d-flex flex-column px-4 py-0 pt-4">
            <div className="d-flex gap-5 p-0">
              <div
                className={`w-kpi-section ${section === "customer" && "active"}`}
                onClick={() => setSection("customer")}
              >
                Customer Success
              </div>
              <div
                className={`w-kpi-section ${section === "adoption" && "active"}`}
                onClick={() => setSection("adoption")}
              >
                Product Adoption
              </div>
              <div
                className={`w-kpi-section ${section === "support" && "active"}`}
                onClick={() => setSection("support")}
              >
                Support Effectiveness
              </div>
              <div
                className={`w-kpi-section ${section === "relationship" && "active"}`}
                onClick={() => setSection("relationship")}
              >
                Relationship Quality
              </div>
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

export default AnalyticsSections;
