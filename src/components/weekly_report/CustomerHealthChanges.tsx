import { useState } from "react";
import { DataTable, Card } from "@rightcom/right-lib";
import { customStyles } from "../../constants/styles.constants";
import { getEvolution } from "../../utils/functions/getEvolution";
import { getTargetColor } from "../../utils/functions/getTargetColor";
import { useWeeklyReport } from "../../hooks/useWeeklyReport";

const DUMMY_COMPANIES: {
  company: string;
  change: number;
  previous: number;
  current: number;
}[] = [
  {
    company: "Alpha Corp",
    change: -12,
    previous: 28,
    current: 70,
  },
  {
    company: "Beta Logistics",
    change: 5,
    previous: 65,
    current: 70,
  },
  {
    company: "Gamma CyberSec",
    change: -24,
    previous: 12,
    current: 70,
  },
  {
    company: "Delta FinTech",
    change: -1,
    previous: 72,
    current: 70,
  },
  {
    company: "Epsilon Agro",
    change: -2,
    previous: 45,
    current: 70,
  },
  {
    company: "Omega Health",
    change: -18,
    previous: 78,
    current: 70,
  },
  {
    company: "Zeta Energy",
    change: -8,
    previous: 33,
    current: 70,
  },
];

const CustomerHealthChanges = () => {
  const [perPage, setPerPage] = useState(5);
  const {
    getHealthChanges: { data },
  } = useWeeklyReport();

  console.log(data);
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
      name: "Previous",
      selector: (row) => row.previous,
    },
    {
      name: "Current",
      cell: (row) => <p>{row.current}</p>,
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
            {getEvolution(row.change).symbol} {getEvolution(row.change).sign}
            {row.change}
          </p>
        </>
      ),
    },
  ];

  return (
    <Card className="flex-grow-1 px-8 py-6">
      <div>
        <h3 className="d-flex flex-column align-items-start fs-7">
          <span className="fs-1">{DUMMY_COMPANIES?.length}</span> company(ies)
        </h3>
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

export default CustomerHealthChanges;
