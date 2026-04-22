import { type FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { checkIsActive, type WithChildren } from "../../../common/helpers";
import { KTIcon } from "../../../common/icons";
import { useLayout } from "../../../common/app-shell/core";
import { Icon, type IconProps } from "@rightcom/right-lib";

type Props = {
  to: string;
  title: string;
  icon?: string;
  fontIcon?: string;
  hasBullet?: boolean;
  googleIcon?: IconProps["name"];
};

const SidebarMenuItem: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  googleIcon,
  hasBullet = false,
}) => {
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);
  const { config } = useLayout();
  const { app } = config;

  return (
    <div className="menu-item">
      <Link
        className={clsx("menu-link without-sub", { active: isActive })}
        to={to}
      >
        {hasBullet && (
          <span className="menu-bullet">
            <span className="bullet bullet-dot"></span>
          </span>
        )}
        {icon && app?.sidebar?.default?.menu?.iconType === "svg" && (
          <span className="menu-icon">
            {" "}
            <KTIcon iconName={icon} className="fs-2" iconType="duotone" />
          </span>
        )}
        {fontIcon && app?.sidebar?.default?.menu?.iconType === "font" && (
          <i className={clsx("bi fs-3", fontIcon)}></i>
        )}
        {googleIcon && (
          <span className="menu-icon">
            <Icon name={googleIcon} size={18} />
          </span>
        )}
        <span className="menu-title">{title}</span>
      </Link>
      {children}
    </div>
  );
};

export { SidebarMenuItem };
