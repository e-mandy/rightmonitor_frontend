import { Card } from "@rightcom/right-lib";
import { useState } from "react";
import CustomerHealthChanges from "./CustomerHealthChanges";
import RisksEscalations from "./RisksEscalations";
import { ErrorBoundary } from "../ErrorBoundary";

type SectionName = "risks" | "adoptions" | "changes";

const WeeklyDetails = () => {
  const [section, setSection] = useState<SectionName>("changes");

  const SECTIONS_COMPONENTS = {
    changes: <CustomerHealthChanges />,
    risks: <RisksEscalations />,
    adoptions: <></>,
  };

  return (
    <>
      <div>
        <Card className="overflow-hidden ps-3 my-6">
          <Card.Body className="d-flex gap-5 p-0">
            <div
              className={`w-kpi-section ${section === "changes" && "active"}`}
              onClick={() => setSection("changes")}
            >
              Changes
            </div>
            <div
              className={`w-kpi-section ${section === "risks" && "active"}`}
              onClick={() => setSection("risks")}
            >
              Risks
            </div>
            <div
              className={`w-kpi-section ${section === "adoptions" && "active"}`}
              onClick={() => setSection("adoptions")}
            >
              Adoptions
            </div>
          </Card.Body>
        </Card>
      </div>
      <ErrorBoundary>
        <div>{SECTIONS_COMPONENTS[section]}</div>
      </ErrorBoundary>
    </>
  );
};

export default WeeklyDetails;
