import clsx from "clsx";
import { KTIcon } from "../../../icons/index.ts";
import { HeaderUserMenu, QuickLinks, Languages } from "../../partials/index.ts";
import { shallowEqual, useSelector } from "react-redux";
import { Notifications } from "../../../../components/Notifications.tsx";
// import { useAuth } from "../../../helpers/dataExamples";

const itemClass = "ms-1 ms-lg-10";
const btnClass =
  "btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px";
const userAvatarClass = "symbol-35px symbol-md-25px d-flex align-items-center";
const btnIconClass = "fs-2x text-primary text-hover-gray-300";

const Navbar = () => {
  const store = useSelector((states: any) => states.root, shallowEqual);
  const currentUser = store.personalInfo;

  return (
    <div className="app-navbar flex-shrink-0">
      <div className={clsx("app-navbar-item", itemClass)}>
        <Languages menuTrigger="click" />
      </div>
      <div className={clsx("app-navbar-item", itemClass)}>
        <Notifications />
      </div>
      <div className={clsx("app-navbar-item", itemClass)}>
        <div
          className={clsx("cursor-pointer symbol", userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
        >
          {/*{currentUser?.image !== "" ? (*/}
          {/*  <img*/}
          {/*    src={currentUser?.image}*/}
          {/*    alt={currentUser?.firstName}*/}
          {/*    className=" me-2"*/}
          {/*  />*/}
          {/*) : (*/}
          <div className="symbol-label fs-8 bg-success text-inverse-primary">
            {currentUser?.firstName?.[0] || currentUser?.email?.[0]}
            {currentUser?.lastName?.[0] || currentUser?.email?.[1]}
          </div>
          {/*)}*/}
          {/* {currentUser?.firstname} */}

          <KTIcon iconName="down" className="ms-2" />
        </div>
        <HeaderUserMenu />
      </div>

      <div className={clsx("app-navbar-item", itemClass)}>
        <div
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
          className={btnClass}
        >
          <KTIcon
            iconName="abstract-30"
            iconType="solid"
            className={btnIconClass}
          />
        </div>
        <QuickLinks />
      </div>
    </div>
  );
};

export { Navbar };
