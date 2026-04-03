import SideBar from "./sidebar/SideBar";
import TopBar from "./TopBar";
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
