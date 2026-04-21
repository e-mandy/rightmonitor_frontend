import type {FC} from "react";
import {KTSVG} from "../../../KTSVG";
import RightSurvey from "../../assets/images/products/right-survey.svg";
import RightDesk from "../../assets/images/products/right-desk.svg";
import RightTime from "../../assets/images/products/right-time.svg";
import RightQ from "../../assets/images/products/right-q.svg";
import RightData from "../../assets/images/products/right-data.svg";
import RightFlow from "../../assets/images/products/right-flow.svg";
import RightPlayer from "../../assets/images/products/right-player.svg";
import RightSuccess from "../../assets/images/products/right-success.svg";
import RightBot from "../../assets/images/products/right-bot.svg";
import RightXP from "../../assets/images/products/rightcom-xp.svg";

import "./style.scss";
import {useEnvironment} from "@keycloak/keycloak-ui-shared";
import configs from "../../../../configs.ts";

const PRODUCTS = [
  {
    logo: <KTSVG path={RightSurvey}/>,
    desc: "RightSurvey",
    path: "",
    productId: "rightsurvey"
  },
  {
    logo: <KTSVG path={RightDesk}/>,
    desc: "RightDesk",
    path: "",
    productId: "rightdesk"
  },
  {
    logo: <KTSVG path={RightTime}/>,
    desc: "RightTime",
    path: "",
    productId: "righttime"
  },
  {
    logo: <KTSVG path={RightQ}/>,
    desc: "RightQ",
    path: "",
    productId: "rightq"
  },
  {
    logo: <KTSVG path={RightData}/>,
    desc: "RightData",
    path: "",
    productId: "rightdata"
  },
  {
    logo: <KTSVG path={RightFlow}/>,
    desc: "RightFlow",
    path: "",
    productId: "rightflow"
  },
  {
    logo: <KTSVG path={RightPlayer}/>,
    desc: "RightPlayer",
    path: "",
    productId: "rightplayer"
  },
  {
    logo: <KTSVG path={RightSuccess}/>,
    desc: "RightSuccess",
    path: "",
    productId: "rightsuccess"
  },
  {
    logo: <KTSVG path={RightBot}/>,
    desc: "RightBot",
    path: "",
    productId: "rightbot"
  },
];

const QuickLinks: FC = () => {
  const context = useEnvironment()
  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column w-300px w-lg-350px"
      data-kt-menu="true"
    >
      <div className="row g-0">
        {PRODUCTS.map((item, i) => (
          <div className="col-4 app-drawer-item" key={i}>
            <a
              href={`https://${context.keycloak.realm}.${item.productId}${configs.clientsIdSuffix}.${configs.domainName}`}
              target={"_blank"}
              className="d-flex flex-column flex-center h-100 p-6 bg-hover-light"
            >
              <div
                style={{width: "48px", height: "48px"}}
                className="app-drawer-logo"
              >
                {/* <img
                src={item.logo}
                style={{width: '100%', aspectRatio: 7 / 6, objectFit: 'contain'}}
              /> */}
                {item.logo}
              </div>
              <span className="desc" style={{color: "#808080"}}>
              {item.desc}
            </span>
            </a>
          </div>
        ))}

        <div
          className="py-2 text-center border-top"
          style={{backgroundColor: "#FAFAFA"}}
        >
          <a
            href={`https://${context.keycloak.realm}.xp.${configs.domainName}`}
            target={"_blank"}
            className="btn btn-color-gray-600 btn-active-color-primary">
            <KTSVG path={RightXP} className="xp"/>
            <span className="fs-7 fw-bold" style={{color: "#808080"}}>
            RightCom XP
          </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export {QuickLinks};
