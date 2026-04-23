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

      <SidebarMenuItemWithSub to="" title="Report" icon="note">
        <SidebarMenuItem
          to="/weekly-report"
          title="Weekly Report"
          hasBullet={true}
        />

        <SidebarMenuItem to="/analytics" title="Analytics" hasBullet={true} />
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
