const ProgressBar = ({ label, value }: { label: string; value: number }) => {
  return (
    <div
      className="d-flex gap-4 my-6"
      style={{
        alignItems: "center",
      }}
    >
      <span>40%</span>
      <div
        style={{
          flex: "1",
          background: "#f0f0f0",
          borderRadius: "20px",
          height: "4px",
          overflow: "hidden",
          flexShrink: "0",
        }}
      >
        <div
          className="oi-p"
          style={{
            width: `${value}%`,
            background: "#80b500",
          }}
        ></div>
      </div>
      <div>{label}</div>
    </div>
  );
};

export default ProgressBar;
