import { type FC, useEffect } from "react";
import { KTIcon } from "../../../icons";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { useEnvironment } from "@keycloak/keycloak-ui-shared";

const HeaderUserMenu: FC = () => {
  const context = useEnvironment();
  const store: any = useSelector((states: any) => states.root, shallowEqual);
  const currentUser = store.personalInfo;

  const logout = () => {
    context.keycloak.logout();
  };
  useEffect(() => {}, []);
  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-250px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex justify-content-between align-items-center px-3">
          {/* <div className='symbol symbol-50px me-5'>
            <div className='symbol-label fs-8 fw-bold bg-success text-inverse-primary'>
              {currentUser?.firstname[0]}
            </div>
          </div> */}

          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex align-items-center text-hover-primary fs-5">
              {currentUser?.firstName} {currentUser?.lastName}
            </div>
            <div className="fw-bold text-muted text-hover-primary fs-7">
              {currentUser?.email}
            </div>
            <div className="fw-bold text-muted text-hover-primary fs-7">
              {currentUser?.username}
            </div>
          </div>
          {context.keycloak.hasRealmRole("owner") ? (
            <div className={"badge bg-success-subtle text-success"}>OWNER</div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="separator my-2"></div>

      <div className="menu-item px-3 my-1">
        <Link
          to={context.keycloak.createAccountUrl()}
          className="menu-link"
          target={"_blank"}
        >
          <KTIcon
            iconName="user"
            iconType="outline"
            className={"fs-6 fw-bold me-3"}
          />{" "}
          My Account
        </Link>
      </div>

      {context.keycloak.hasResourceRole("realm-admin", "realm-management") ? (
        <>
          <div className="menu-item px-3 my-1">
            <Link
              to={`${context.keycloak.authServerUrl}/admin/${context.keycloak.realm}/console`}
              className="menu-link"
              target={"_blank"}
            >
              <KTIcon
                iconName="element-1"
                iconType="outline"
                className={"fs-6 fw-bold me-3"}
              />{" "}
              My Admin
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="menu-item px-3 my-1">
        <Link to={`/settings`} className="menu-link">
          <KTIcon
            iconName="gear"
            iconType="outline"
            className={"fs-6 fw-bold me-3"}
          />{" "}
          My Settings
        </Link>
      </div>

      <div className="separator my-2"></div>

      <div className="menu-item px-3">
        <a onClick={logout} className="menu-link">
          <KTIcon
            iconName="exit-right"
            iconType="outline"
            className={"fs-6 fw-bold me-3"}
          />{" "}
          Sign Out
        </a>
      </div>
    </div>
  );
};

export { HeaderUserMenu };
