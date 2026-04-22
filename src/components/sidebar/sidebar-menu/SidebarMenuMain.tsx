// import { useIntl } from "react-intl";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { useIntl } from "react-intl";
import { useKeycloak } from "@react-keycloak/web";
import { shallowEqual, useSelector } from "react-redux";
import { useSubscriptionAccessGlobals } from "@/hooks/subscription/useSubscriptionAccessGlobals";

const SidebarMenuMain = () => {
  const { formatMessage } = useIntl();
  const t = (string: string) => {
    return formatMessage({ id: string, defaultMessage: string });
  };

  const { keycloak } = useKeycloak();

  const store = useSelector((store: any) => store.rootReducer, shallowEqual);
  const allowManagerAccessToUserManagement =
    store?.company?.attributes?.accessRestrictions
      ?.allowManagerAccessToUserManagement;
  const allowManagerToCreateNewService =
    store?.company?.attributes?.accessRestrictions
      ?.allowManagerToCreateNewService;
  const isAdmin = keycloak.hasResourceRole("rightq_admin", "rightq");
  const isManager = keycloak.hasResourceRole("rightq_manager", "rightq");

  const {
    canDisplayContactAttributes,
    canDisplayUser,
    canDisplayActivityLog,
    canDisplayDashboard,
    canDisplayService,
    canDisplayMarketPlace,
    canAccessToCustomizableDashboards,
  } = useSubscriptionAccessGlobals();
  return (
    <>
      {/* <SidebarMenuItemWithSub
        to='/dashboard'
        icon='setting-2'
        title='Support'
        fontIcon='bi-app-indicator'
      >
        <SidebarMenuItem to='/' title='Dashboard' hasBullet={true} />
        <SidebarMenuItem to='/menu-test' title='Ticket' hasBullet={true} />
        <SidebarMenuItem to='/builder' title='Reports' hasBullet={true} />
      </SidebarMenuItemWithSub> */}

      {canDisplayDashboard && (
        <SidebarMenuItem
          to="dashboard"
          title={t("DASHBOARD")}
          googleIcon="MdOutlineSpaceDashboard"
        />
      )}

      <SidebarMenuItemWithSub
        to="/queue-manager"
        title={t("QUEUE.MANAGEMENT")}
        googleIcon="MdOutlineList"
      >
        <SidebarMenuItem
          to="smart-queue"
          title={t("SMART.QUEUE")}
          hasBullet={true}
        />

        <SidebarMenuItem to="groups" title={t("GROUPS")} hasBullet={true} />
        <SidebarMenuItem to="trash" title={t("TRASH")} hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to="/analytics/"
        title={t("ANALYTICS")}
        googleIcon="MdOutlineList"
      >
        <SidebarMenuItem
          to="analytics/tickets"
          title={t("Standard")}
          hasBullet={true}
        />
        {canAccessToCustomizableDashboards && (
          <SidebarMenuItem
            to="analytics/custom"
            title={t("Custom")}
            hasBullet={true}
          />
        )}
      </SidebarMenuItemWithSub>

      {/* <SidebarMenuItem to="/contacts" title={t('CONTACTS')} googleIcon="MdOutlineContacts" /> */}
      <SidebarMenuItemWithSub
        to="/contacts"
        title={t("CONTACTS")}
        googleIcon="MdOutlineContacts"
      >
        <SidebarMenuItem
          to="contacts/all"
          title={t("All Contacts")}
          hasBullet={true}
        />
        <SidebarMenuItem
          to="contacts/lists"
          title={t("Contact Lists")}
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      {/* <SidebarMenuItem
        to='/reports'
        title='Chat & social'
        fontIcon='bi-chat-left'
        icon='message-text-2'
      /> */}

      {/* <SidebarMenuItem to='/reports' title='Customers' fontIcon='bi-archive' icon='profile-user' /> */}

      {(isAdmin ||
        (isManager && allowManagerToCreateNewService) ||
        (isManager && allowManagerAccessToUserManagement)) && (
        <SidebarMenuItemWithSub
          to="/settings"
          title={t("SETTINGS")}
          googleIcon="MdOutlineSettings"
        >
          {isAdmin && (
            <>
              <SidebarMenuItem
                to="settings/general"
                title={t("GENERAL")}
                hasBullet={true}
              />

              <SidebarMenuItem
                to="settings/subscriptions"
                title={t("SUBSCRIPTION")}
                hasBullet={true}
              />
            </>
          )}
          {/*<SidebarMenuItem to="settings/licenses" title={t('Licenses')} hasBullet={true} />*/}
          {((isManager && allowManagerToCreateNewService) || isAdmin) &&
            canDisplayService && (
              <SidebarMenuItem
                to="settings/service-management"
                title={t("SERVICE.MANAGEMENT")}
                hasBullet={true}
              />
            )}
          {((isManager && allowManagerAccessToUserManagement) || isAdmin) &&
            canDisplayUser && (
              <SidebarMenuItem
                to="settings/user-management"
                title={t("USER.MANAGEMENT")}
                hasBullet={true}
              />
            )}

          {isAdmin && (
            <>
              {canDisplayContactAttributes && (
                <SidebarMenuItem
                  to="settings/contact-attributes"
                  title={t("Contact Attributes")}
                  hasBullet={true}
                />
              )}
              {canDisplayActivityLog && (
                <SidebarMenuItem
                  to="settings/activity-log"
                  title={t("Activity Log")}
                  hasBullet={true}
                />
              )}
              {canDisplayMarketPlace && (
                <SidebarMenuItem
                  to="settings/apps"
                  title={t("Apps")}
                  hasBullet={true}
                />
              )}
            </>
          )}
          {/*<SidebarMenuItem*/}
          {/*    to="/#"*/}
          {/*    title={t("NOTIFICATION")}*/}
          {/*    hasBullet={true}*/}
          {/*/>*/}

          {/*<SidebarMenuItem to="/#" title={t("APP")} hasBullet={true} />*/}
        </SidebarMenuItemWithSub>
      )}
    </>
  );
};

export { SidebarMenuMain };
