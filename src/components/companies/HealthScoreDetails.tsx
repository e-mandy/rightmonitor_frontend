import { useState } from "react";
import { Card } from "@rightcom/right-lib";
import { ErrorBoundary } from "../ErrorBoundary";
import SaasDetails from "../company_detail/SaasDetails";
import HardwareDetails from "../company_detail/HardwareDetails";
import RelationshipDetails from "../company_detail/RelationshipDetails";
import { useCompany } from "../../hooks/useCompany";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const HealthScoreDetails = () => {
  const navigate = useNavigate();
  const [section, setSection] = useState<"saas" | "hardware" | "relationship">(
    "saas",
  );
  const {
    fetchCurrentCompany: { data },
  } = useCompany();

  const SECTIONS_COMPONENTS = {
    saas: <SaasDetails />,
    hardware: <HardwareDetails />,
    relationship: <RelationshipDetails />,
  };

  return (
    <div className="px-15">
      <button
        className="d-flex align-items-center gap-2 px-2 py-1 rounded bg-white border-0 fs-4 my-2 shadow-sm"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft /> Back
      </button>
      <div>
        <Card className="overflow-hidden ps-3 my-6">
          <Card.Body className="d-flex flex-column px-4 py-0 pt-4">
            <div className="mb-4">
              <p>Company</p>
              <h4>{data?.name}</h4>
            </div>
            <div className="d-flex gap-5 p-0">
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
