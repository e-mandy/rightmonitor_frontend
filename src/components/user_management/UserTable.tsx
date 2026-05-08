import { DataTable, Dropdown, DropdownButton } from "@rightcom/right-lib";
import { USERS } from "../../constants/user.constants";
import type { UserType } from "../../types/user.types";
import { Person } from "react-bootstrap-icons";
import { useSettings } from "../../hooks/useSettings";
import { useEffect } from "react";
import { KyConfigs } from "../../utils/kyInstance";
import { useEnvironment } from "@keycloak/keycloak-ui-shared";

const customStyles = {
  rows: {
    style: {
      minHeight: "60px",
      padding: "16px",
    },
  },
};

const UserTable = () => {
  const context = useEnvironment();
  const {
    getUserUserWithRoles: { data },
  } = useSettings();

  console.log(data);
  useEffect(() => {
    (() => {
      KyConfigs(import.meta.env.VITE_XP_BACKEND_URL)
        .kyInstance.post("orgUsersWithRoles", {
          json: {
            token: context.keycloak.token,
            clients: ["rightq"],
            roles: ["rightq_admin", "rightq_user", "rightq_manager"],
            company: "rightintern",
          },
        })
        .json();
    })();
  }, [context.keycloak.token]);

  const columns = [
    {
      name: "Full name",
      cell: (row: UserType) => (
        <span className="d-flex gap-4 justify-content-start">
          <Person />
          <p>{row.full_name}</p>
        </span>
      ),
    },
    {
      name: "Email",
      selector: (row: UserType) => row.email,
    },
    {
      name: "Mobile",
      selector: (row: UserType) => row.mobile,
    },
    {
      name: "Rôle",
      selector: (row: UserType) => row.role,
      center: true,
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
      center: true,
    },
  ];
  return (
    <div>
      <DataTable
        customStyles={customStyles}
        columns={columns}
        responsive
        data={USERS}
      />
    </div>
  );
};

export default UserTable;
