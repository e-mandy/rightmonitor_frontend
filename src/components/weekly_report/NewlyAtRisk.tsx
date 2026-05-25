import { DataTable, Card } from "@rightcom/right-lib";
import { customStyles } from "../../constants/styles.constants";
import { useState } from "react";
import { getTargetColor } from "../../utils/functions/getTargetColor";

const DUMMY_COMPANIES: {
  name: string;
  status: "warning" | "critical";
  trend: number;
  healthscore: number;
}[] = [
  {
    name: "Alpha Corp",
    status: "critical",
    trend: -12, // En baisse
    healthscore: 28,
  },
  {
    name: "Beta Logistics",
    status: "warning",
    trend: 5, // En légère hausse
    healthscore: 65,
  },
  {
    name: "Gamma CyberSec",
    status: "critical",
    trend: -24, // Chute brutale
    healthscore: 12,
  },
  {
    name: "Delta FinTech",
    status: "warning",
    trend: -1,
    healthscore: 72,
  },
  {
    name: "Epsilon Agro",
    status: "critical",
    trend: -2,
    healthscore: 45,
  },
  {
    name: "Omega Health",
    status: "critical",
    trend: -18,
    healthscore: 78,
  },
  {
    name: "Zeta Energy",
    status: "critical",
    trend: -8,
    healthscore: 33,
  },
];

const NewlyAtRisk = () => {
  const [perPage, setPerPage] = useState(5);
  const columns = [
    {
      name: "Company",
      cell: (row) => (
        <span className="d-flex gap-4 justify-content-start">
          <p>{row?.name}</p>
        </span>
      ),
    },
    {
      name: "Status",
      cell: (row: any) => (
        <span
          className="bx"
          style={{
            color:
              row.trend < -10
                ? getTargetColor("red").color
                : getTargetColor("orange").color,
            backgroundColor:
              row.trend < -10
                ? getTargetColor("red").bg
                : getTargetColor("orange").bg,
          }}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: "Trend",
      selector: (row) => row.trend,
    },
    {
      name: "Health Score",
      cell: (row) => <p>{row.healthscore}</p>,
    },
  ];

  return (
    <Card className="flex-grow-1 px-8 py-6">
      <div>
        <h4>Companies newly at risk</h4>
      </div>
      <DataTable
        key={perPage}
        customStyles={customStyles}
        columns={columns}
        responsive
        data={DUMMY_COMPANIES}
        pagination
        paginationPerPage={perPage}
        paginationRowsPerPageOptions={[5, 10, 20]}
      />
    </Card>
  );
};

export default NewlyAtRisk;
