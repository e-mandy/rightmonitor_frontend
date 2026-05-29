import { DataTable, Card } from "@rightcom/right-lib";
import Graph from "../Graph";
import { useWeeklyReport } from "../../hooks/useWeeklyReport";
import { getTargetColor } from "../../utils/functions/getTargetColor";
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

type WorseningHealthType = {
  company: string;
  current: number;
  previous: number;
  change: number;
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
      cell: (row: WorseningHealthType) => (
        <span className="d-flex gap-4 justify-content-start">
          <p>{getCompanyInfo(row?.company).name}</p>
        </span>
      ),
    },
    {
      name: "Trend",
      cell: (row: WorseningHealthType) => (
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
      selector: (row: WorseningHealthType) => Math.round(row.current),
      center: true,
    },
  ];

  return (
    <Card className="flex-grow-1 px-8 py-6">
      <div>
        <h4>Worsening health trend</h4>
      </div>
      <DataTable
        noDataComponent={isPending ? <Spinner /> : <p>No data found !!</p>}
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
