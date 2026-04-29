import { ExclamationTriangleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useCompanyMetrics } from "../../hooks/useCompaniesMetrics";

const AlertAtRisk = () => {
  const { getCompanyWithMetrics } = useCompanyMetrics();
  const companyAtRisk = getCompanyWithMetrics("warning");
  return (
    companyAtRisk &&
    companyAtRisk.length > 0 && (
      <div className="alert">
        <ExclamationTriangleFill size={16} color="#f59e0b" />
        <span>
          <strong>{companyAtRisk.length} companies</strong> below health score
          50.
          <Link
            to="/at-risk"
            style={{
              color: "var(--b)",
              fontWeight: "700",
              cursor: "pointer",
              textDecoration: "none",
            }}
            id="alert-atrisk"
          >
            {" "}
            View at-risk →
          </Link>
        </span>
      </div>
    )
  );
};

export default AlertAtRisk;
