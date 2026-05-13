import { DataTable, Dropdown, DropdownButton } from "@rightcom/right-lib";
import type { UserType } from "../../types/user.types";
import { Person } from "react-bootstrap-icons";
import { useSettings } from "../../hooks/useSettings";

const customStyles = {
  rows: {
    style: {
      minHeight: "60px",
      padding: "16px",
    },
  },
};

const UserTable = () => {
  const {
    getUserUserWithRoles: { data },
  } = useSettings();

  const columns = [
    {
      name: "Full name",
      cell: (row: UserType) => (
        <span className="d-flex gap-4 justify-content-start">
          <Person />
          <p>
            {row?.firstName} {row?.lastName}
          </p>
        </span>
      ),
    },
    {
      name: "Email",
      selector: (row: UserType) => row?.email,
    },
    {
      name: "Mobile",
      selector: (row: UserType) => row?.username,
    },
    {
      name: "Rôle",
      selector: (row: UserType) => row?.realmMappings[1].name.toUpperCase(),
    },
    {
      name: "Actions",
      cell: () => (
        <div>
          <DropdownButton title="Actions">
            <Dropdown.Item>View</Dropdown.Item>
            <Dropdown.Item>Delete</Dropdown.Item>
          </DropdownButton>
        </div>
      ),
    },
  ];
  return (
    <div>
      <DataTable
        customStyles={customStyles}
        columns={columns}
        responsive
        data={data ?? []}
      />
    </div>
  );
};

export default UserTable;
