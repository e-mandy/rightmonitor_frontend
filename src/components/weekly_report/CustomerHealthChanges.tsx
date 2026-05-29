import { useState } from "react";
import { DataTable, Card, Spinner } from "@rightcom/right-lib";
import { getEvolution } from "../../utils/functions/getEvolution";
import { getTargetColor } from "../../utils/functions/getTargetColor";
import { useWeeklyReport } from "../../hooks/useWeeklyReport";

const customStyles = {
  rows: {
    style: {
      minHeight: "60px",
    },
  },
  cells: {
    style: {
      display: "flex",
      alignItems: "center",
    },
  },
};

const CustomerHealthChanges = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [perPage, setPerPage] = useState(5);
  const {
    getHealthChanges: { data, isPending },
    getCompanyInfo,
  } = useWeeklyReport();

  const columns = [
    {
      name: "Company",
      cell: (row: { company: string }) => (
        <span className="d-flex gap-4 justify-content-start">
          <p>{getCompanyInfo(row?.company)?.name}</p>
        </span>
      ),
      style: {},
    },
    {
      name: "Previous",
      selector: (row: { previous: number }) => Math.round(row.previous),
      center: true,
    },
    {
      name: "Current",
      cell: (row: { current: number }) => <p>{Math.round(row.current)}</p>,
      center: true,
    },
    {
      name: "Changes",
      cell: (row: { change: number }) => (
        <>
          <p
            style={{
              color:
                row.change <= 0
                  ? getTargetColor("red").color
                  : getTargetColor("green").color,
            }}
          >
            {getEvolution(row?.change).symbol} {getEvolution(row?.change).sign}
            {row?.change}
          </p>
        </>
      ),
      center: true,
    },
  ];

  return (
    <Card className="flex-grow-1 px-8 py-6">
      <div>
        <h3 className="d-flex flex-column align-items-start fs-7">
          <span className="fs-1">{data?.length}</span> company(ies)
        </h3>
      </div>
      <DataTable
        noDataComponent={isPending ? <Spinner /> : <p>No changes noticed !!</p>}
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

export default CustomerHealthChanges;
