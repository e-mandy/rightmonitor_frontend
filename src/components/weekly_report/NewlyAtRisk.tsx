import { DataTable, Card } from "@rightcom/right-lib";
import { useState } from "react";
import { useWeeklyReport } from "../../hooks/useWeeklyReport";
import type { newlyAtRiskType } from "../../types/weekly_report.types";
import { Spinner } from "react-bootstrap";

const customStyles = {
  rows: {
    style: {
      height: "45px",
      marginTop: "8px",
      marginBottom: "8px",
    },
  },
};

const NewlyAtRisk = () => {
  const {
    getNewlyAtRisk: { data, isPending },
    getCompanyInfo,
  } = useWeeklyReport();
  const [perPage, setPerPage] = useState(5);

  const columns = [
    {
      name: "Company",
      cell: (row: newlyAtRiskType) => (
        <span className="d-flex gap-4 justify-content-start">
          <p>{getCompanyInfo(row?.company).name}</p>
        </span>
      ),
    },
    {
      name: "Trend",
      selector: (row: newlyAtRiskType) => row?.change,
      center: true,
    },
    {
      name: "Health Score",
      cell: (row: newlyAtRiskType) => <p>{Math.round(row?.current)}</p>,
      center: true,
    },
  ];

  return (
    <Card className="flex-grow-1 px-8 py-6">
      <div>
        <h4>Companies newly at risk</h4>
      </div>
      <DataTable
        noDataComponent={isPending ? <Spinner /> : <p>No data found !!</p>}
        key={perPage}
        customStyles={customStyles}
        columns={columns}
        responsive
        data={data ?? []}
        pagination
        paginationPerPage={perPage}
        paginationRowsPerPageOptions={[5, 10, 20]}
      />
    </Card>
  );
};

export default NewlyAtRisk;
