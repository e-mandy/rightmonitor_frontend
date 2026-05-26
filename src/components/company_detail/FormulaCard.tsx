type FormulaCardType = {
  formula_label: string;
  order: number;
  explanation: string;
  formula: string;
  value_gained: string;
};

const FormulaCard = ({ ...data }: FormulaCardType) => {
  return (
    <div className="d-flex align-items-start gap-5 my-8">
      <div
        className="py-2 px-4 rounded-pill d-flex align-items-center justify-content-center"
        style={{
          backgroundColor: "#008AE2",
          color: "white",
        }}
      >
        {data.order}
      </div>
      <div className="w-100">
        <h4>{data.formula_label}</h4>
        <p>{data.explanation}</p>
        <div
          className="py-4 rounded-4 d-flex align-items-center px-4"
          style={{
            backgroundColor: "#f0f0f0",
            flex: "1",
            width: "100%",
          }}
        >
          <div
            style={{
              height: "fit-content",
            }}
          >
            <span
              style={{
                color: "#9e680c",
              }}
              className="fw-bold"
            >
              {data.value_gained}
            </span>{" "}
            = {data.formula}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulaCard;
