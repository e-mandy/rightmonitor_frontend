import CustomerScore, { type CustomerScoreType } from "./CustomerScore";
import { useState } from "react";
import { useCompanyMetrics } from "../../hooks/useCompaniesMetrics";

type HealthScoreType = "all" | "at-risk" | "healthy" | "warning";

const CustomHealthScoreContainer = () => {
  const { getCompanyWithMetrics } = useCompanyMetrics();
  const [currentSection, setCurrentSection] = useState<HealthScoreType>("all");

  const sections: HealthScoreType[] = ["all", "at-risk", "healthy", "warning"];
  return (
    <div className="card">
      <div className="ch" style={{ paddingBottom: "0" }}>
        <div className="ch-t">Customer Health Scores</div>
        <span className="ch-a">View all 24 →</span>
      </div>
      <div className="tabs">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`tab ${currentSection === section ? "on" : ""}`}
            onClick={() => setCurrentSection(section)}
          >
            {section[0].toUpperCase() + section.slice(1)}
          </div>
        ))}
      </div>
      <div className="cb">
        <table className="ht">
          <thead>
            <tr>
              <th
                style={{
                  width: "26%",
                }}
              >
                Company
              </th>
              <th>Score</th>
              <th>SaaS 40%</th>
              <th>HW 30%</th>
              <th>Relation 30%</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {getCompanyWithMetrics(currentSection)?.map(
              (company: CustomerScoreType) => (
                <tr className="co-row" key={company.company_id}>
                  <CustomerScore {...company} />
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomHealthScoreContainer;
