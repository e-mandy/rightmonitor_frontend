import { type CustomerScoreType } from "./CustomerScore";
import { useState } from "react";
import { useCompanyMetrics } from "../../hooks/useCompaniesMetrics";
import { Card, DataTable } from "@rightcom/right-lib";
import { getScoreColor } from "../../utils/functions/getScoreColor";
import CustomScoreRow from "./CustomScoreRow";
import { getCompanyStatus } from "../../utils/functions/getCompanyStatus";
import { useCurrentCompanyStore } from "../../store/current-company.store";
import { getFormatDate } from "../../utils/functions/getFormatDate";

type HealthScoreType = "all" | "at-risk" | "healthy" | "warning";

const customStyles = {
  rows: {
    style: {
      minHeight: "65px",
    },
  },
  headCells: {
    style: {},
  },
  cells: {
    style: {},
  },
};

const CustomHealthScoreContainer = () => {
  const { getCompanyWithMetrics } = useCompanyMetrics();
  const [currentSection, setCurrentSection] = useState<HealthScoreType>("all");
  const setIsOpenedModal = useCurrentCompanyStore.getState().setIsOpenedModal;

  const sections: HealthScoreType[] = ["all", "at-risk", "healthy", "warning"];

  const columns = [
    {
      name: "Company",
      cell: (row: CustomerScoreType) => (
        <div>
          <div className="cname">{row.name}</div>
          <div className="csince">Since {getFormatDate(row.created_at)}</div>
        </div>
      ),
    },
    {
      name: "Score",
      cell: (row: CustomerScoreType) => (
        <div className="d-flex flex-column align-items-center">
          <div className="sbar-w">
            <div
              className="sbar"
              style={{
                backgroundColor: getScoreColor(row.overall_health).color,
                width: row.overall_health + "%",
              }}
            ></div>
          </div>
          <div className="sv">{Math.round(row.overall_health)}</div>
        </div>
      ),
    },
    {
      name: "SAAS 40%",
      cell: (row: CustomerScoreType) => (
        <CustomScoreRow data={row.saas_health} />
      ),
    },
    {
      name: "HW 30%",
      cell: (row: CustomerScoreType) => (
        <CustomScoreRow data={row.hardware_health} />
      ),
    },
    {
      name: "RELATION 30%",
      cell: (row: CustomerScoreType) => (
        <CustomScoreRow data={row.relationship_health} />
      ),
    },
    {
      name: "Status",
      cell: (row: CustomerScoreType) => (
        <span
          className="bx"
          style={{
            backgroundColor: getScoreColor(row.overall_health).bg,
            color: getScoreColor(row.overall_health).color,
          }}
        >
          {getCompanyStatus(row.overall_health)}
        </span>
      ),
    },
    {
      name: "Actions",
      cell: (row: CustomerScoreType) => (
        <button
          className="open-modal btn btn-ghost"
          onClick={() => setIsOpenedModal(true, row.company_id)}
        >
          View →
        </button>
      ),
    },
  ];
  return (
    <Card className="card">
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
        <DataTable
          customStyles={customStyles}
          responsive
          pagination
          columns={columns}
          data={getCompanyWithMetrics(currentSection)}
        />
      </div>
      {/* <div className="cb">
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
      </div> */}
    </Card>
  );
};

export default CustomHealthScoreContainer;
