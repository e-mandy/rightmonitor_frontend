import { NavLink } from "react-router-dom";

export type SidebarCardType = {
  name: string;
  icon: React.ReactNode;
  to: string;
  class: boolean;
  data_view: string;
  children: React.ReactNode | null;
};

const SidebarCard = ({ ...data }: SidebarCardType) => {
  return (
    <NavLink
      to={data.to}
      className={({ isActive }) =>
        `si  ${(+data.class ? "si-ch " : "") + (isActive ? "on" : "")}`
      }
      data-view={data.data_view}
    >
      {data.icon}
      {data.name}
      {data.children && data.children}
    </NavLink>
  );
};

export default SidebarCard;
