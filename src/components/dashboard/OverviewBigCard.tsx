type OverviewBigCardType = {
  title: string;
  value: string;
};

const OverviewBigCard = ({}: OverviewBigCardType) => {
  return (
    <div className="kcard kc-g">
      <div className="klbl">Gross Revenue Retention</div>
      <div className="kval c-g">94.2%</div>
      <div className="ktrend kt-g">▲ +1.3% vs last month</div>
      <div className="ktgt">Target: &gt;90%</div>
    </div>
  );
};

export default OverviewBigCard;
