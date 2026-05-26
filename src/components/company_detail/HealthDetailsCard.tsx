import { Card } from "@rightcom/right-lib";

const HealthDetailsCard = () => {
  return (
    <Card className="flex-grow-1">
      <Card.Body>
        <p>Head name</p>
        <span
          style={{
            fontSize: "25px",
          }}
        >
          12
        </span>
        <p>more details</p>
      </Card.Body>
    </Card>
  );
};

export default HealthDetailsCard;
