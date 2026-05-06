import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import { Card } from "@rightcom/right-lib";
import { ErrorBoundary } from "../components/ErrorBoundary";
import UserTable from "../components/user_management/UserTable";

const UserManagement = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <div className="view">
        <div className="ph">
          <div>
            <div className="ph-title">User Management</div>
            <div>
              <span className="ph-sub">Settings</span> · User Management
            </div>
          </div>
          <div className="ph-right">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
        <div>
          <Card>
            <Card.Body>
              <ErrorBoundary>
                <UserTable />
              </ErrorBoundary>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Suspense>
  );
};

export default UserManagement;
