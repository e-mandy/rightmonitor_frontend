import { Card } from "@rightcom/right-lib";

const HeadDetails = () => {
  return (
    <Card>
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-8">
          <div>
            <p>Saas Health score</p>
            <h4
              style={{
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              74
            </h4>
          </div>
          <div>
            <p>Score evolutioin</p>
          </div>
        </div>
        <div>
          <span className="px-2 py-1 rounded-2">Healthy</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default HeadDetails;
