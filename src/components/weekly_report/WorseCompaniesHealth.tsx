import { DataTable, Card } from "@rightcom/right-lib";
import Graph from "../Graph";
import { useWeeklyReport } from "../../hooks/useWeeklyReport";
import { getTargetColor } from "../../utils/functions/getTargetColor";

const customStyles = {
  rows: {
    style: {
      height: "40px",
      marginTop: "8px",
      marginBottom: "8px",
    },
  },
};

const WorseCompaniesHealth = () => {
  const {
    getWorseningHealthTrend: { data, isPending },
    getCompanyInfo,
  } = useWeeklyReport();

  console.log(data);

  const columns = [
    {
      name: "Company",
      cell: (row) => (
        <span className="d-flex gap-4 justify-content-start">
          <p>{getCompanyInfo(row?.company).name}</p>
        </span>
      ),
    },
    {
      name: "Trend",
      cell: (row) => (
        <div className="text-center">
          <Graph value={row?.current} trend={row?.change} />
          <p
            className="my-3"
            style={{
              color: getTargetColor("red").color,
            }}
          >
            {Math.round(row?.change)}
          </p>
        </div>
      ),
      center: true,
    },
    {
      name: "Health Score",
      selector: (row) => Math.round(row.current),
      center: true,
    },
  ];

  return (
    <Card className="flex-grow-1 px-8">
      <DataTable
        key={5}
        customStyles={customStyles}
        columns={columns}
        responsive
        data={data ?? []}
        pagination
        paginationPerPage={5}
      />
    </Card>
  );
};

export default WorseCompaniesHealth;
