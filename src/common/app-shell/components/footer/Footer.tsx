import { useEffect } from "react";
import { type ILayout, useLayout } from "../../core/index.ts";
import { KTSVG } from "../../../KTSVG";
import RightCom from "../../assets/images/RightCom.svg";
import { useIntl } from "react-intl";
import configs from "../../../../configs.ts";

const Footer = () => {
  const intl = useIntl();
  const { config } = useLayout();
  useEffect(() => {
    updateDOM(config);
  }, [config]);
  return (
    <>
      <div className="text-dark order-2 order-md-1">
        <span className="text-primary fw-semibold me-1">
          &copy; RightCom {new Date().getFullYear().toString()} v
          {configs.appVersion}
        </span>
      </div>

      <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1 flex-grow-1 justify-content-center">
        <li className="menu-item">
          <a
            href="https://rightcom.com/"
            target="_blank"
            className="menu-link px-2"
          >
            Learn about {configs.appName}
          </a>
        </li>

        <li className="menu-item">
          <a
            href="https://rightcom.com/"
            target="_blank"
            className="menu-link px-2"
          >
            More Products
          </a>
        </li>

        <li className="menu-item">
          <a
            href="https://rightcom.com/platform/"
            target="_blank"
            className="menu-link px-2"
          >
            Go to RightCom XP
          </a>
        </li>
      </ul>

      <div className="text-dark order-3">
        <div className="d-flex justify-content-end pt-2 pt-md-0 ">
          <div className="flex-nowrap me-2">
            {intl.formatMessage({ id: "A product of" })}
          </div>{" "}
          {/* <img
            alt="Logo"
            src={toAbsoluteUrl("/RightCom.svg")}
            className="h-20px"
          /> */}
          <KTSVG
            style={{ height: 17 }}
            path={RightCom}
            className="h-15px"
            svgClassName="w-auto"
          />
        </div>
      </div>
    </>
  );
};

const updateDOM = (config: ILayout) => {
  if (config.app?.footer?.fixed?.desktop) {
    document.body.classList.add("data-kt-app-footer-fixed", "true");
  }

  if (config.app?.footer?.fixed?.mobile) {
    document.body.classList.add("data-kt-app-footer-fixed-mobile", "true");
  }
};

export { Footer };
