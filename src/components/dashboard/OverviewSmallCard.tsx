type OverviewSmallCardType = {
  icon: React.ReactNode;
  value: string;
  title: string;
};

const OverviewSmallCard = ({ ...data }: OverviewSmallCardType) => {
  return (
    <div className="scard">
      <div
        className="scard-ico"
        style={{
          background: "#f0f7e0",
        }}
      >
        {data.icon}
      </div>
      <div>
        <div className="scard-val">{data.value}</div>
        <div className="scard-lbl">{data.title}</div>
      </div>
    </div>
  );
};

export default OverviewSmallCard;
