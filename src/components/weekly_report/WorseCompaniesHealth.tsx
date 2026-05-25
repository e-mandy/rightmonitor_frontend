import { DataTable, Card } from "@rightcom/right-lib";
import type { CompanyType } from "../../types/company.type";

const customStyles = {
  rows: {
    style: {
      minHeight: "60px",
      padding: "16px",
    },
  },
};

const WorseCompaniesHealth = () => {
  const columns = [
    {
      name: "Company",
      cell: (row: CompanyType) => (
        <span className="d-flex gap-4 justify-content-start">
          <p>{row?.name}</p>
        </span>
      ),
    },
    {
      name: "Status",
      selector: (row: CompanyType) => "",
    },
    {
      name: "Health Score",
      selector: (row: CompanyType) => "",
    },
  ];

  return (
    <Card className="flex-grow-1">
      <DataTable
        customStyles={customStyles}
        columns={columns}
        responsive
        data={[]}
      />
    </Card>
  );
};

export default WorseCompaniesHealth;
