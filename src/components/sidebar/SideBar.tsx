import { SidebarElement } from "../../constants/sidebar.constants";
import SidebarCard, { type SidebarCardType } from "./SidebarCard";

const SideBar = () => {
  return (
    <div className="sb">
      <div
        style={{
          height: "10px",
        }}
      ></div>
      <div className="sb-sec">Overview</div>
      {SidebarElement.find(
        (element) => element.name == "Overview",
      )?.element?.map((element: SidebarCardType) => {
        return <SidebarCard {...element} />;
      })}
      <div
        className="sb-sec"
        style={{
          marginTop: "6px",
        }}
      >
        Companies
      </div>
      {SidebarElement.find(
        (element) => element.name == "Companies",
      )?.element?.map((element: SidebarCardType) => {
        return <SidebarCard {...element} />;
      })}
      <div
        className="sb-sec"
        style={{
          marginTop: "6px",
        }}
      >
        Reports
      </div>
      {SidebarElement.find(
        (element) => element.name == "Reports",
      )?.element?.map((element: SidebarCardType) => {
        return <SidebarCard {...element} />;
      })}
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
