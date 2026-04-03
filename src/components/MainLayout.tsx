import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <TopBar />
      <div className="body">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
