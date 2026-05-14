import {
  DataTable,
  Dropdown,
  DropdownButton,
  Modal,
  TreeSelect,
} from "@rightcom/right-lib";
import type { UserType } from "../../types/user.types";
import { Person } from "react-bootstrap-icons";
import { useSettings } from "../../hooks/useSettings";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useCompany } from "../../hooks/useCompany";
import type { CompanyType } from "../../types/company.type";

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

  const {
    fetchCompanies: { data: companies },
  } = useCompany();
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => {
    setIsShow(false);
  };

  const handleOpen = () => {
    setIsShow(true);
  };

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
            <Dropdown.Item onClick={handleOpen}>Assign</Dropdown.Item>
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
      <Modal show={isShow} onHide={handleClose} centered>
        <Modal.Header closeButton className={"border-bottom-0 pb-0 mb-0"}>
          <Modal.Title>Assign companies to users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Select the companies.
          <TreeSelect
            treeDate={companies.map((company: CompanyType) => company.name)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserTable;
