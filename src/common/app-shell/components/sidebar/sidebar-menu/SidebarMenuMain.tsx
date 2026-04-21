/* eslint-disable react/jsx-no-target-blank */
// import { useIntl } from "react-intl";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";

const SidebarMenuMain = () => {
  // const intl = useIntl();

  return (
    <>
      <SidebarMenuItem
        to="dashboard"
        title="Dashboard"
        fontIcon="bi-archive"
        icon="ranking"
      />

      <SidebarMenuItemWithSub
        to="/test"
        title="Menu"
        icon="notepad-bookmark"
      >
        <SidebarMenuItem
          to="subtest"
          title="Sub Menu"
          hasBullet={true}
        />

        <SidebarMenuItem to="subtest1" title="Sub Menu 1" hasBullet={true} />
      </SidebarMenuItemWithSub>

    </>
  );
};

export { SidebarMenuMain };
