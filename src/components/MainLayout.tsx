import SideBar from "./sidebar/SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="body">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
