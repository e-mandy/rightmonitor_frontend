import { Card } from "@rightcom/right-lib";
import type React from "react";

type SectionInfos = {
  section_name: string;
  value: number | React.ReactNode;
};

const HeadDetails = ({ ...data }: SectionInfos) => {
  return (
    <Card>
      <Card.Body className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-8">
          <div>
            <p>{data?.section_name}</p>
            <h4
              style={{
                fontSize: "30px",
                fontWeight: "700",
              }}
            >
              {data?.value}
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
