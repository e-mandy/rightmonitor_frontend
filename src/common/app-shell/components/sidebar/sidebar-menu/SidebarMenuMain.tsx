// import { useIntl } from "react-intl";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";

const SidebarMenuMain = () => {
  // const intl = useIntl();

  return (
    <>
      <SidebarMenuItem
        to="/dashboard"
        title="Dashboard"
        fontIcon="bi-archive"
        icon="ranking"
      />

      <SidebarMenuItemWithSub to="" title="Overview" icon="notepad-bookmark">
        <SidebarMenuItem to="/journey" title="Journey Feed" hasBullet={true} />

        <SidebarMenuItem to="/onboarding" title="Onboarding" hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to="" title="Companies" icon="notepad-bookmark">
        <SidebarMenuItem
          to="/dashboard"
          title="All Companies"
          hasBullet={true}
        />

        <SidebarMenuItem to="/at-risk" title="At Risk" hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to="" title="Report" icon="notepad-bookmark">
        <SidebarMenuItem
          to="/weekly-report"
          title="Weekly Report"
          hasBullet={true}
        />

        <SidebarMenuItem to="/analytics" title="Analytics" hasBullet={true} />
      </SidebarMenuItemWithSub>
    </>
  );
};

export { SidebarMenuMain };
