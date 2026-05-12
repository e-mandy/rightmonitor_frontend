import {} from "react-bootstrap-icons";
import { ErrorBoundary } from "../components/ErrorBoundary";
import CustomHealthScoreContainer from "../components/dashboard/CustomHealthScoreContainer";
import CompaniesHeader from "../components/companies/CompaniesHeader";

const Companies = () => {
  return (
    <div className="view active" id="view-dashboard">
      <ErrorBoundary>
        <CompaniesHeader />
      </ErrorBoundary>
      <ErrorBoundary>
        <CustomHealthScoreContainer />
      </ErrorBoundary>
    </div>
  );
};

export default Companies;
