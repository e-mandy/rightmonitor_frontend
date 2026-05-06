// import { useIntl } from "react-intl";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { useLocation } from "react-router-dom";
import { companies } from "../../../../../constants/at_risk.constants";

const SidebarMenuMain = () => {
  const { state } = useLocation();

  const id: null | string = state?.id ?? null;
  const companyName = id
    ? companies.find((company) => company.id === id)?.name
    : null;

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
        <SidebarMenuItem
          to="/companies"
          title="All Companies"
          hasBullet={true}
        />

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

      {companyName && (
        <SidebarMenuItem
          to="/company-profile"
          title={companyName}
          fontIcon="bi-archive"
          icon="ranking"
        />
      )}
    </>
  );
};

export { SidebarMenuMain };
