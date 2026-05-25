import { type CustomerScoreType } from "./CustomerScore";
import { useState } from "react";
import { useCompanyMetrics } from "../../hooks/useCompaniesMetrics";
import { Card, DataTable } from "@rightcom/right-lib";
import { getScoreColor } from "../../utils/functions/getScoreColor";
import CustomScoreRow from "./CustomScoreRow";
import { getCompanyStatus } from "../../utils/functions/getCompanyStatus";
import { useCurrentCompanyStore } from "../../store/current-company.store";
import { getFormatDate } from "../../utils/functions/getFormatDate";
import { useNavigate, useSearchParams } from "react-router-dom";
import { customStyles } from "../../constants/styles.constants";

type HealthScoreType = "all" | "at-risk" | "healthy" | "warning";

const CustomHealthScoreContainer = () => {
  const { getCompanyWithMetrics } = useCompanyMetrics();
  const setIsOpenedModal = useCurrentCompanyStore.getState().setIsOpenedModal;

  const sections: HealthScoreType[] = ["all", "at-risk", "healthy", "warning"];
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const filter = searchParams.get("filter") as HealthScoreType;
  const [currentSection, setCurrentSection] = useState<HealthScoreType>(
    filter ?? "all",
  );

  if (!filter) {
    navigate("/dashboard", { replace: true });
    return null;
  }
  const columns = [
    {
      name: "Company",
      cell: (row: CustomerScoreType) => (
        <div>
          <div className="cname">{row.name}</div>
          <div className="csince">Since {getFormatDate(row.created_at)}</div>
        </div>
      ),
      style: {
        display: "flex",
        justifyContent: "start",
      },
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
    <Card>
      <Card.Body>
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
        <div className="my-4">
          <DataTable
            customStyles={customStyles}
            responsive
            pagination
            columns={columns}
            data={getCompanyWithMetrics(currentSection)}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomHealthScoreContainer;
