import {
  BarChartFill,
  ChatDotsFill,
  CheckCircle,
  ClockFill,
  GridFill,
  PersonBadgeFill,
  PlayBtnFill,
  Robot,
  Vinyl,
} from "react-bootstrap-icons";

const TopBar = () => {
  return (
    <div className="top">
      <div className="brand" id="brand-home">
        <div className="b-icon">
          <GridFill size={16} color="#2B8AC9" />
        </div>
        <div>
          <div className="b-name">
            <b>Right</b>
            <b>Monitor</b>
          </div>
          <div className="b-sub">CS Platform</div>
        </div>
      </div>
      <div className="top-mid" id="breadcrumb">
        <span className="cc">360° Dashboard</span>
      </div>
      <div className="top-right">
        <select className="tsel" id="co-filter">
          <option>All Companies</option>
          <option>Ecobank GH</option>
          <option>MTN Ghana</option>
        </select>
        <select className="tsel">
          <option>This Month</option>
          <option>Last Month</option>
          <option>Q1 2026</option>
        </select>
        <div className="tsep"></div>
        <div className="tdot"></div>
        <div className="tav">AA</div>
        <div className="tibtn" id="swBtn">
          <div className="d9">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
      <div className="asw" id="asw">
        <div className="asw-grid">
          <div className="asw-item">
            <div
              className="asw-ico"
              style={{
                backgroundColor: "#e8f3fb",
              }}
            >
              <Vinyl size={26} color="#2B8AC9" />
            </div>
            <span className="asw-lbl">RightQ</span>
          </div>
          <div className="asw-item">
            <div
              className="asw-ico"
              style={{
                backgroundColor: "#f0f7e0",
              }}
            >
              <ChatDotsFill size={26} color="#80B500" />
            </div>
            <span className="asw-lbl">RightSurvey</span>
          </div>
          <div className="asw-item">
            <div
              className="asw-ico"
              style={{
                backgroundColor: "#f0f7e0",
              }}
            >
              <PersonBadgeFill size={26} color="#80B500" />
            </div>
            <span className="asw-lbl">RightDesk</span>
          </div>
          <div className="asw-item">
            <div
              className="asw-ico"
              style={{
                backgroundColor: "#e8f3fb",
              }}
            >
              <ClockFill size={26} color="#2B8AC9" />
            </div>
            <span className="asw-lbl">RightTime</span>
          </div>
          <div className="asw-item">
            <div
              className="asw-ico"
              style={{
                backgroundColor: "#f0f7e0",
              }}
            >
              <BarChartFill size={26} color="#2B8AC9" />
            </div>
            <span className="asw-lbl">RightData</span>
          </div>
          <div className="asw-item">
            <div
              className="asw-ico"
              style={{
                backgroundColor: "#e8f3fb",
              }}
            >
              <CheckCircle size={26} color="#2B8AC9" />
            </div>
            <span className="asw-lbl">RightSuccess</span>
          </div>
          <div className="asw-item">
            <div
              className="asw-ico"
              style={{
                background: "#f0f7e0",
              }}
            >
              <PlayBtnFill size={26} color="#80B500" />
            </div>
            <span className="asw-lbl">RightPlayer</span>
          </div>
          <div className="asw-item">
            <div
              className="asw-ico"
              style={{
                background: "#e8f3fb",
              }}
            >
              <Robot size={26} color="#2B8AC9" />
            </div>
            <span className="asw-lbl">RightBots</span>
          </div>
          <div className="asw-item me">
            <div
              className="asw-ico"
              style={{
                backgroundColor: "#80b500",
                borderRadius: "11px",
              }}
            >
              <GridFill
                size={18}
                color="white"
                style={{
                  opacity: 0.9,
                }}
              />
            </div>
            <span className="asw-lbl">RightMonitor</span>
          </div>
        </div>
        <hr className="asw-hr" />
        <div className="asw-xp">
          <div
            className="asw-ico"
            style={{
              backgroundColor: "#e8f3fb",
              borderRadius: "11px",
              width: "40px",
              height: "40px",
            }}
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: "900",
                color: "#2B8AC9",
                fontFamily: "system-ui",
              }}
            >
              XP
            </span>
          </div>
          <span className="asw-xp-name">RightCom XP</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
