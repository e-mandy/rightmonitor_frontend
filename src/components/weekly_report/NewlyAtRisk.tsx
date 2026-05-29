import { DataTable, Card } from "@rightcom/right-lib";
import { customStyles } from "../../constants/styles.constants";
import { useState } from "react";

const DUMMY_COMPANIES: {
  name: string;
  trend: number;
  healthscore: number;
}[] = [
  {
    name: "Alpha Corp",
    trend: -12, // En baisse
    healthscore: 28,
  },
  {
    name: "Beta Logistics",
    trend: 5, // En légère hausse
    healthscore: 65,
  },
  {
    name: "Gamma CyberSec",
    trend: -24, // Chute brutale
    healthscore: 12,
  },
  {
    name: "Delta FinTech",
    trend: -1,
    healthscore: 72,
  },
  {
    name: "Epsilon Agro",
    trend: -2,
    healthscore: 45,
  },
  {
    name: "Omega Health",
    trend: -18,
    healthscore: 78,
  },
  {
    name: "Zeta Energy",
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
        // noDataComponent={isPending ? <Spinner /> : <p>No data found !!</p>}
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
