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
        <p className="fs-2">{data.head_name}</p>
        <span
          style={{
            fontSize: "30px",
          }}
        >
          {data.score}
        </span>
        <p className="fs-7">{data.label}</p>
      </Card.Body>
    </Card>
  );
};

export default HealthDetailsCard;
