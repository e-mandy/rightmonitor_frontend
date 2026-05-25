import { Card, Container } from "@rightcom/right-lib";
import { InfoCircle } from "react-bootstrap-icons";

const HealthScoreDetails = () => {
  return (
    <Container>
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
            <div>10000</div>
          </div>
          <div className="d-flex gap-4 mt-10">
            <div>
              <p>
                Frequency of platform usage <InfoCircle color="#0095E8" />
              </p>
              <p>10%</p>
            </div>
            <div>
              <p>
                Depth of feature adoption <InfoCircle color="#0095E8" />
              </p>
              <p>10%</p>
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
            <div>10000</div>
          </div>
          <div className="d-flex gap-4 mt-10">
            <div>
              <p>
                Frequency of platform usage <InfoCircle color="#0095E8" />
              </p>
              <p>10%</p>
            </div>
            <div>
              <p>
                Depth of feature adoption <InfoCircle color="#0095E8" />
              </p>
              <p>10%</p>
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
            <div>10000</div>
          </div>
          <div className="d-flex gap-4 mt-10">
            <div>
              <p>
                Frequency of platform usage <InfoCircle color="#0095E8" />
              </p>
              <p>10%</p>
            </div>
            <div>
              <p>
                Depth of feature adoption <InfoCircle color="#0095E8" />
              </p>
              <p>10%</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default HealthScoreDetails;
