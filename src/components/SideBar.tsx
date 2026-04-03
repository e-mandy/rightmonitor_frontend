import {
  Clock,
  ExclamationCircle,
  FileText,
  GraphUp,
  GridFill,
  HouseDoor,
  Square,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sb">
      <div
        style={{
          height: "10px",
        }}
      ></div>
      <div className="sb-sec">Overview</div>
      <Link to="/dashboard" className="si on" data-view="dashboard">
        <GridFill size={16} color="#2B8AC9" />
        360° Dashboard
      </Link>
      <Link to="/journey" className="si si-ch" data-view="journey">
        <Square size={16} color="#888" />
        Journey Feed
      </Link>
      <Link to="/onboarding" className="si si-ch" data-view="onboarding">
        <Clock size={16} color="#2B8AC9" />
        Onboarding
      </Link>
      <div
        className="sb-sec"
        style={{
          marginTop: "6px",
        }}
      >
        Companies
      </div>
      <Link to="/dashboard" className="si" data-view="dashboard">
        <HouseDoor size={16} color="#2B8AC9" />
        All Companies
      </Link>
      <Link to="/at-risk" className="si" data-view="atrisk">
        <ExclamationCircle size={16} color="#b45309" />
        At Risk<span className="si-bdg red">2</span>
      </Link>
      <div
        className="sb-sec"
        style={{
          marginTop: "6px",
        }}
      >
        Reports
      </div>
      <Link to="/weekly-report" className="si" data-view="report">
        <FileText size={16} color="#80B500" />
        Weekly Report
      </Link>
      <Link to="/analytics" className="si" data-view="analytics">
        <GraphUp size={16} color="#15803d" />
        Analytics
      </Link>
      <div
        id="sb-co-pin"
        style={{
          display: "none",
        }}
      >
        <div
          className="sb-sec"
          style={{
            marginTop: "6px",
          }}
        >
          Current Company
        </div>
        <div className="sb-co">
          <div className="sb-co-dot"></div>
          <span className="sb-co-name" id="sb-co-name">
            —
          </span>
          <span className="sb-co-score" id="sb-co-score"></span>
        </div>
      </div>
      <div className="sb-foot">
        <div className="sb-user">
          <div
            className="tav"
            style={{
              width: "30px",
              height: "30px",
              fontSize: "10px",
            }}
          >
            AA
          </div>
          <div>
            <div className="sb-uname">Amos Ahounou</div>
            <div className="sb-urole">Lead Frontend · CSA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
