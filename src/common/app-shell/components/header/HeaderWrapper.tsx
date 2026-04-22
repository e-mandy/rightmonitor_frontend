import clsx from "clsx";
import { useLayout } from "../../core/index.ts";
import { Header } from "./Header.tsx";
import { Navbar } from "./Navbar.tsx";
import productIcon from "../../../../assets/favicon.png";
import configs from "../../../../configs.ts";

export function HeaderWrapper() {
  const { config, classes } = useLayout();
  if (!config.app?.header?.display) {
    return null;
  }

  return (
    <div
      id="kt_app_header"
      className="app-header"
      style={{ backgroundColor: "white" }}
    >
      <div
        id="kt_app_header_container"
        className={clsx(
          "app-container w-100 flex-lg-grow-1",
          classes.headerContainer.join(" "),
          config.app?.header?.default?.containerClass,
        )}
      >
        {!config.app.sidebar?.display && (
          <>
            <div
              className="d-flex align-items-center ms-n2 me-2"
              title="Show sidebar menu"
            >
              <a href={"/"} className={"text-dark"}>
                {/*<div*/}
                {/*  className="btn btn-icon btn-active-color-primary w-35px h-35px"*/}
                {/*  id="kt_app_sidebar_mobile_toggle"*/}
                {/*>*/}
                {/*  <KTIcon iconName="abstract-14" className=" fs-1" />*/}
                {/*</div>*/}
                <div
                  className={
                    "d-none d-sm-none d-md-none d-lg-flex align-items-center"
                  }
                >
                  <img src={productIcon} style={{ height: 32, width: 32 }} />
                  <span className={"ms-5 fs-1 fw-bold"}>{configs.appName}</span>
                </div>
                <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                  <div className="d-lg-none">
                    <div className={"d-flex align-items-center"}>
                      <img alt="Logo" src={productIcon} className="h-30px" />
                      <div className={"ms-4"}>
                        {" "}
                        <span className={"text-dark fs-4 fw-bold"}>
                          {configs.appName}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </>
        )}

        <div
          id="kt_app_header_wrapper"
          className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
        >
          {config.app.header.default?.content === "menu" &&
            config.app.header.default.menu?.display && (
              <div
                className="app-header-menu app-header-mobile-drawer align-items-stretch"
                data-kt-drawer="true"
                data-kt-drawer-name="app-header-menu"
                data-kt-drawer-activate="{default: true, lg: false}"
                data-kt-drawer-overlay="true"
                data-kt-drawer-width="225px"
                data-kt-drawer-direction="end"
                data-kt-drawer-toggle="#kt_app_header_menu_toggle"
                data-kt-swapper="true"
                data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
                data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
              >
                <Header />
              </div>
            )}
          <Navbar />
        </div>
      </div>
    </div>
  );
}
