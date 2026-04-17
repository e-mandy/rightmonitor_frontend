import { AppLauncher } from "@rightcom/right-lib";
import { GridFill } from "react-bootstrap-icons";
import { PRODUCTS } from "../constants/products.constants";

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
      </div>
      <AppLauncher xpUrl="" products={PRODUCTS} />
    </div>
  );
};

export default TopBar;
