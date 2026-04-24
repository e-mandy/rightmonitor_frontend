import { getFormatDate } from "../../utils/functions/getFormatDate";

type CustomerScoreType = {
  name: string;
  created_at: string;
};

const CustomerScore = ({ ...data }: CustomerScoreType) => {
  return (
    <>
      <td>
        <div className="cname">{data.name}</div>
        <div className="csince">Since {getFormatDate(data.created_at)}</div>
      </td>
      <td>
        <div className="sbar-w">
          <div
            className="sbar sb-g"
            style={{
              width: "82%",
            }}
          ></div>
        </div>
        <div className="sv sv-g">82</div>
      </td>
      <td>
        <span className="bx bx-g">88%</span>
      </td>
      <td>
        <span className="bx bx-g">79%</span>
      </td>
      <td>
        <span className="bx bx-g">80%</span>
      </td>
      <td>
        <span className="bx bx-g">Healthy</span>
      </td>
      <td>
        <span className="vlink modal-btn">View →</span>
      </td>
    </>
  );
};

export default CustomerScore;
