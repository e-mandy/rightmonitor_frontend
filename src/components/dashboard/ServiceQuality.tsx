import { Spinner } from "react-bootstrap";
import { useQuality } from "../../hooks/useQuality";
import { getFormatTime } from "../../utils/functions/getFormatTime";

const ServiceQuality = () => {
  const {
    fetchServiceQuality: { data },
  } = useQuality();

  return (
    <div className="card">
      <div className="ch">
        <div className="ch-t">Service Quality</div>
        <span className="ch-a">Details →</span>
      </div>
      <div className="cb">
        <div className="mr">
          <div>
            <div className="mr-name">First Response Time</div>
            <div className="mr-tgt">Target: &lt;2h</div>
          </div>
          {data === undefined ? (
            <Spinner />
          ) : (
            <div className="mr-val mr-g">
              {getFormatTime(data?.global_avg_ftr)}
            </div>
          )}
        </div>
        <div className="mr">
          <div>
            <div className="mr-name">Support Tickets (mo.)</div>
            <div className="mr-tgt">This month total</div>
          </div>
          {data === undefined ? (
            <Spinner />
          ) : (
            <div className="mr-val">{data?.companies_support_tickets}</div>
          )}
        </div>
        <div className="mr">
          <div>
            <div className="mr-name">RMA Rate</div>
            <div className="mr-tgt">Target: &lt;5%</div>
          </div>
          {data === undefined ? (
            <Spinner />
          ) : (
            <div className="mr-val mr-g">{Math.round(data?.avg_rma)}%</div>
          )}
        </div>
        <div className="mr">
          <div>
            <div className="mr-name">Implementation NPS</div>
            <div className="mr-tgt">Post-onboarding avg</div>
          </div>
          {data === undefined ? (
            <Spinner />
          ) : (
            <div
              className="mr-val"
              style={{
                color: data?.avg_implementation_nps < 0 ? "#B91C1C" : "#80b500",
              }}
            >
              {Math.round(data?.avg_implementation_nps)}
            </div>
          )}
        </div>
        <div className="mr">
          <div>
            <div className="mr-name">Time-to-Value</div>
            <div className="mr-tgt">Avg days to first use</div>
          </div>
          {data === undefined ? (
            <Spinner />
          ) : (
            <div className="mr-val">{Math.round(data?.avg_ttv)}d</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceQuality;
