import { useLocation } from "react-router-dom";
import { SidebarElement } from "../../constants/sidebar.constants";
import SidebarCard, { type SidebarCardType } from "./SidebarCard";
import { atRiskCompanies, companies } from "../../constants/at_risk.constants";
import { getScoreColor } from "../../utils/getScoreColor";
import { shallowEqual, useSelector } from "react-redux";

const SideBar = () => {
  const { state } = useLocation();
  const store: any = useSelector((state: any) => state.root, shallowEqual);
  const currentUser = store.personalInfo;
  const id: string | null = state?.id ?? null;

  const companyName = id
    ? companies.find((company) => company.id === state?.id)?.name
    : null;
  const companyHealthScore = id
    ? atRiskCompanies.find((company) => company.company_id === state?.id)
        ?.health_score
    : null;
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
      {state?.id && (
        <div
          id="sb-co-pin"
          style={{
            display: state?.id != null ? "flex" : "none",
            flexDirection: "column",
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
              {companyName}
            </span>
            <span
              className="sb-co-score"
              id="sb-co-score"
              style={{
                color: companyHealthScore
                  ? getScoreColor(companyHealthScore)
                  : "",
              }}
            >
              {companyHealthScore}
            </span>
          </div>
        </div>
      )}
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
            {currentUser?.firstName[0]}
            {currentUser?.lastName[0]}
          </div>
          <div>
            <div className="sb-uname">
              {currentUser?.firstName} {currentUser?.lastName}
            </div>
            <div className="sb-urole">Lead Frontend · CSA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
