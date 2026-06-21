const Welcome = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        className="fs-1"
        style={{
          fontWeight: "bold",
        }}
      >
        Bienvenue sur{" "}
        <span
          style={{
            color: "#6b9900",
          }}
        >
          Right
        </span>
        <span
          style={{
            color: "#2b8ac9",
          }}
        >
          Monitor
        </span>
      </p>
    </div>
  );
};

export default Welcome;
