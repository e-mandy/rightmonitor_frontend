import { getScoreColor } from "../../utils/functions/getScoreColor";

const CustomScoreRow = ({ data }: { data: number }) => {
  return (
    <div>
      <span
        className="bx"
        style={{
          backgroundColor: getScoreColor(data).bg,
          color: getScoreColor(data).color,
        }}
      >
        {Math.round(data)}%
      </span>
    </div>
  );
};

export default CustomScoreRow;
