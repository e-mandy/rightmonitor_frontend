import { Card } from "@rightcom/right-lib";
import { getFormatMoney } from "../../../utils/functions/fetFormatMoney";
import { GraphDown } from "react-bootstrap-icons";
import { getTargetColor } from "../../../utils/functions/getTargetColor";

const PipelineExpansion = () => {
  return (
    <Card>
      <Card.Body>
        <div>
          <p>Expansion Pipeline</p>
          <div className="d-flex gap-4 align-items-center">
            <h5 className="fs-1">{getFormatMoney(3000)}</h5>
            <span
              className="d-flex gap-2 px-2 py-1 rounded"
              style={{
                backgroundColor: getTargetColor("green").bg,
                color: getTargetColor("green").color,
              }}
            >
              + {getFormatMoney(3)}
              <GraphDown />{" "}
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PipelineExpansion;
