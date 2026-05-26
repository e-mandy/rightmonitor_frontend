import { Card } from "@rightcom/right-lib";
import { InfoCircle } from "react-bootstrap-icons";
import { useCurrentCompany } from "../../hooks/useCurrentCompany";

const HealthScoreDetails = () => {
  const { companyWithMetrics } = useCurrentCompany();

  return (
    <div className="px-8">
      <div
        style={{
          width: "fit-content",
          margin: "auto",
          marginTop: "30px",
          gap: "20px",
        }}
      >
        <Card
          style={{
            width: "fit-content",
          }}
        >
          <Card.Body>
            <div>
              <div className="d-flex gap-2 flex-row align-items-start">
                <p>Saas Health</p>
                <InfoCircle color="#0095E8" />
              </div>
              <p className="fs-1 fw-bold">
                {Math.round(companyWithMetrics.saas_health)}%
              </p>
            </div>
            <div className="d-flex gap-10 mt-10">
              <div>
                <p className="d-flex gap-2">
                  Frequency of platform usage <InfoCircle color="#0095E8" />
                </p>
                <p className="fs-2 fw-bold">10%</p>
              </div>
              <div>
                <p className="d-flex gap-2">
                  Depth of feature adoption <InfoCircle color="#0095E8" />
                </p>
                <p className="fs-2 fw-bold">10%</p>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "fit-content",
          }}
        >
          <Card.Body>
            <div>
              <div className="d-flex gap-2 flex-row align-items-start">
                <p>Saas Health</p>
                <InfoCircle color="#0095E8" />
              </div>
              <p className="fs-1 fw-bold">10000</p>
            </div>
            <div className="d-flex gap-10 mt-10">
              <div>
                <p className="d-flex gap-2">
                  Frequency of platform usage <InfoCircle color="#0095E8" />
                </p>
                <p className="fs-2 fw-bold">10%</p>
              </div>
              <div>
                <p className="d-flex gap-2">
                  Depth of feature adoption <InfoCircle color="#0095E8" />
                </p>
                <p className="fs-2 fw-bold">10%</p>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "fit-content",
          }}
        >
          <Card.Body>
            <div>
              <div className="d-flex gap-2 flex-row align-items-start">
                <p>Saas Health</p>
                <InfoCircle color="#0095E8" />
              </div>
              <p className="fs-1 fw-bold">10000</p>
            </div>
            <div className="d-flex gap-10 mt-10">
              <div>
                <p className="d-flex gap-2">
                  Frequency of platform usage <InfoCircle color="#0095E8" />
                </p>
                <p className="fs-2 fw-bold">10%</p>
              </div>
              <div>
                <p className="d-flex gap-2">
                  Depth of feature adoption <InfoCircle color="#0095E8" />
                </p>
                <p className="fs-2 fw-bold">10%</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HealthScoreDetails;
