import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HeaderWrapper } from "./components/header";
import { Content } from "./components/content";
import { FooterWrapper } from "./components/footer";
// import { ThemeModeProvider } from "./partials";
import { PageDataProvider } from "./core";
import { reInitMenu } from "../helpers";
import { ThemeModeProvider } from "./partials";
import SidebarRC from "./components/sidebar/Sidebar";
// import {Sidebar} from "./components/sidebar";

const MasterLayout = () => {
  const location = useLocation();
  useEffect(() => {
    reInitMenu();
  }, [location.key]);

  return (
    <PageDataProvider>
      <ThemeModeProvider>
        <div className="d-flex flex-row flex-root app-root" id="kt_app_root">
          <div
            className="app-page d-flex flex-row flex-row-fluid"
            id="kt_app_page"
            style={{ height: "100vh", overflow: "hidden" }}
          >
            <SidebarRC />
            <HeaderWrapper />
            <div
              className="app-wrapper d-flex flex-row-fluid overflow-hidden"
              id="kt_app_wrapper"
            >
              <div
                className="app-main flex-column flex-row-fluid overflow-y-auto"
                id="kt_app_main"
              >
                <div className="d-flex flex-column flex-column-fluid">
                  {/*<ToolbarWrapper />*/}
                  <Content>
                    <Outlet />
                  </Content>
                </div>
                <FooterWrapper />
              </div>
            </div>
          </div>
        </div>
      </ThemeModeProvider>
    </PageDataProvider>
  );
};

export { MasterLayout };
