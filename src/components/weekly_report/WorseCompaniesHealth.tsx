import { DataTable, Card } from "@rightcom/right-lib";
import Graph from "../Graph";

const customStyles = {
  rows: {
    style: {
      minHeight: "60px",
      padding: "16px",
    },
  },
};

const WorseCompaniesHealth = () => {
  const DATA = [
    {
      name: "Bro bor bro",
      trend: -50,
      healthscore: 80,
    },
  ];

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
      cell: (row) => <Graph value={row.healthscore} trend={row.trend} />,
      center: true,
    },
    {
      name: "Health Score",
      selector: (row) => row.healthscore,
      center: true,
    },
  ];

  return (
    <Card className="flex-grow-1">
      <DataTable
        customStyles={customStyles}
        columns={columns}
        responsive
        data={DATA}
      />
    </Card>
  );
};

export default WorseCompaniesHealth;
