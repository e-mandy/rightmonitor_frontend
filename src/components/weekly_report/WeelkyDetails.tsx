import { Card } from "@rightcom/right-lib";
import { useState } from "react";
import CustomerHealthChanges from "./CustomerHealthChanges";

type SectionName = "performance" | "settings" | "reports" | "changes";

const WeelkyDetails = () => {
  const [section, setSection] = useState<SectionName>("performance");

  const SECTIONS_COMPONENTS = {
    performance: <CustomerHealthChanges />,
    settings: <></>,
    reports: <></>,
    changes: <></>,
  };

  return (
    <>
      <div>
        <Card className="overflow-hidden ps-3 my-6">
          <Card.Body className="d-flex gap-5 p-0">
            <div
              className={`w-kpi-section ${section === "performance" && "active"}`}
              onClick={() => setSection("performance")}
            >
              Performance
            </div>
            <div
              className={`w-kpi-section ${section === "settings" && "active"}`}
              onClick={() => setSection("settings")}
            >
              Settings
            </div>
            <div
              className={`w-kpi-section ${section === "reports" && "active"}`}
              onClick={() => setSection("reports")}
            >
              Reports
            </div>
            <div
              className={`w-kpi-section ${section === "changes" && "active"}`}
              onClick={() => setSection("changes")}
            >
              Changes
            </div>
          </Card.Body>
        </Card>
      </div>
      <div className="g2">{SECTIONS_COMPONENTS[section]}</div>
    </>
  );
};

export default WeelkyDetails;
