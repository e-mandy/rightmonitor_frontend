import { NavLink } from "react-router-dom";

export type SidebarCardType = {
  name: string;
  icon: React.ReactNode;
  to: string;
  class: boolean;
  data_view: string;
  children: null | number;
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
      {data.children && data.children > 0 && (
        <span className="si-bdg red">{data.children}</span>
      )}
    </NavLink>
  );
};

export default SidebarCard;
