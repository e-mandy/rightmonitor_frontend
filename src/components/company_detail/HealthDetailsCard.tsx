import { Card } from "@rightcom/right-lib";

const HealthDetailsCard = ({
  ...data
}: {
  head_name: string;
  score: number;
  label: string;
}) => {
  return (
    <Card className="flex-grow-1">
      <Card.Body>
        <p>{data.head_name}</p>
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
