// import { useIntl } from "react-intl";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { useCompany } from "../../../../../hooks/useCompany";

const SidebarMenuMain = () => {
  const {
    fetchCurrentCompany: { data },
  } = useCompany();

  return (
    <>
      <SidebarMenuItem
        to="/dashboard"
        title="Dashboard"
        fontIcon="bi-archive"
        icon="ranking"
      />

      <SidebarMenuItemWithSub to="" title="Overview" icon="kanban">
        <SidebarMenuItem to="/journey" title="Journey Feed" hasBullet={true} />

        <SidebarMenuItem to="/onboarding" title="Onboarding" hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to="" title="Companies" icon="office-bag">
        <SidebarMenuItem to="/at-risk" title="At Risk" hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to="" title="Report" icon="graph-up">
        <SidebarMenuItem
          to="/weekly-report"
          title="Weekly Report"
          hasBullet={true}
        />

        <SidebarMenuItem to="/analytics" title="Analytics" hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to="/settings" icon="setting" title="Settings">
        <SidebarMenuItem
          to="/user-management"
          title="User Management"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      {data?.name && (
        <SidebarMenuItem
          to="/company-profile"
          title={data?.name}
          fontIcon="bi-archive"
          icon="ranking"
        />
      )}
    </>
  );
};

export { SidebarMenuMain };
