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
  const [perPage, setPerPage] = useState(5);
  const {
    getHealthChanges: { data },
    getCompanyInfo,
  } = useWeeklyReport();

  const columns = [
    {
      name: "Company",
      cell: (row) => (
        <span className="d-flex gap-4 justify-content-start">
          <p>{getCompanyInfo(row?.company)?.name}</p>
        </span>
      ),
      style: {},
    },
    {
      name: "Previous",
      selector: (row) => Math.round(row.previous),
      center: true,
    },
    {
      name: "Current",
      cell: (row) => <p>{Math.round(row.current)}</p>,
      center: true,
    },
    {
      name: "Changes",
      cell: (row) => (
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
        noDataComponent={<Spinner />}
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
