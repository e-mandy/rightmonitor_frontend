import { Inbox } from "@novu/react";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useIntl } from "react-intl";
import xpApi from "../common/xpApi.ts";
import { useEnvironment } from "@keycloak/keycloak-ui-shared";
import configs from "../configs.ts";

export function Notifications() {
  const context = useEnvironment();
  const [inboxLocales, setInboxLocales] = useState({});
  // const navigate = useNavigate();
  const states = useSelector((state: any) => state.rootReducer, shallowEqual);
  const intl = useIntl();
  // {intl.formatMessage({
  //   id: "Welcome to the Contacts Management",
  // })}

  useEffect(() => {
    xpApi("registerNotificationTopic", {
      realm: context.keycloak.realm,
      token: context.keycloak.token,
    })
      .then(() => {})
      .catch(console.error);
  }, []);
  useEffect(() => {
    if (intl.locale === "fr") {
      setInboxLocales({
        locale: "fr-FR",
        "inbox.filters.dropdownOptions.unread": "Non lues seulement",
        "inbox.filters.dropdownOptions.default": "Lues & non lues",
        "inbox.filters.dropdownOptions.archived": "Archivées",
        "inbox.filters.dropdownOptions.snoozed": "Reportées",
        "inbox.filters.labels.unread": "Non lues",
        "inbox.filters.labels.default": "Boîte de notifications",
        "inbox.filters.labels.archived": "Archivées",
        "inbox.filters.labels.snoozed": "Reportées",
        "notifications.emptyNotice": "Calme pour le moment. Revenez plus tard.",
        "notifications.actions.readAll": "Tout marquer comme lu",
        "notifications.actions.archiveAll": "Tout archiver",
        "notifications.actions.archiveRead": "Archiver les lues",
        "notifications.newNotifications": ({
          notificationCount,
        }: {
          notificationCount: number;
        }) =>
          `${notificationCount > 99 ? "99+" : notificationCount} ${
            notificationCount === 1
              ? "nouvelle notification"
              : "nouvelles notifications"
          }`,
        "notification.actions.read.tooltip": "Marquer comme lu",
        "notification.actions.unread.tooltip": "Marquer comme non lu",
        "notification.actions.archive.tooltip": "Archiver",
        "notification.actions.unarchive.tooltip": "Désarchiver",
        "notification.actions.snooze.tooltip": "Reporter",
        "notification.actions.unsnooze.tooltip": "Annuler le report",
        "notification.snoozedUntil": "Reportée jusqu’au",
        "preferences.title": "Préférences",
        "preferences.emptyNotice":
          "Aucune préférence spécifique pour les notifications pour le moment.",
        "preferences.global": "Préférences globales",
        "preferences.workflow.disabled.notice":
          "Contactez l’administrateur pour activer la gestion des abonnements pour cette notification critique.",
        "preferences.workflow.disabled.tooltip":
          "Contactez l’administrateur pour modifier",
        "preferences.group.info":
          "S’applique à toutes les notifications de ce groupe.",
        "snooze.datePicker.timePickerLabel": "Heure",
        "snooze.datePicker.apply": "Appliquer",
        "snooze.datePicker.cancel": "Annuler",
        "snooze.options.anHourFromNow": "Dans une heure",
        "snooze.datePicker.pastDateTooltip":
          "L’heure sélectionnée doit être au moins 3 minutes dans le futur",
        "snooze.datePicker.noDateSelectedTooltip":
          "Veuillez sélectionner une date",
        "snooze.datePicker.exceedingLimitTooltip": ({
          days,
        }: {
          days: number;
        }) =>
          `L’heure sélectionnée ne peut pas dépasser ${days === 1 ? "24 heures" : `${days} jours`} à partir de maintenant`,
        "snooze.options.customTime": "Heure personnalisée...",
        "snooze.options.inOneDay": "Demain",
        "snooze.options.inOneWeek": "La semaine prochaine",
      });
    }
    if (intl.locale === "en") {
      setInboxLocales({
        locale: "en-US",
        "inbox.filters.dropdownOptions.unread": "Unread only",
        "inbox.filters.dropdownOptions.default": "Unread & read",
        "inbox.filters.dropdownOptions.archived": "Archived",
        "inbox.filters.dropdownOptions.snoozed": "Snoozed",
        "inbox.filters.labels.unread": "Unread",
        "inbox.filters.labels.default": "Inbox",
        "inbox.filters.labels.archived": "Archived",
        "inbox.filters.labels.snoozed": "Snoozed",
        "notifications.emptyNotice": "Quiet for now. Check back later.",
        "notifications.actions.readAll": "Mark all as read",
        "notifications.actions.archiveAll": "Archive all",
        "notifications.actions.archiveRead": "Archive read",
        "notifications.newNotifications": ({
          notificationCount,
        }: {
          notificationCount: number;
        }) =>
          `${notificationCount > 99 ? "99+" : notificationCount} new ${
            notificationCount === 1 ? "notification" : "notifications"
          }`,
        "notification.actions.read.tooltip": "Mark as read",
        "notification.actions.unread.tooltip": "Mark as unread",
        "notification.actions.archive.tooltip": "Archive",
        "notification.actions.unarchive.tooltip": "Unarchive",
        "notification.actions.snooze.tooltip": "Snooze",
        "notification.actions.unsnooze.tooltip": "Unsnooze",
        "notification.snoozedUntil": "Snoozed until",
        "preferences.title": "Preferences",
        "preferences.emptyNotice": "No notification specific preferences yet.",
        "preferences.global": "Global Preferences",
        "preferences.workflow.disabled.notice":
          "Contact admin to enable subscription management for this critical notification.",
        "preferences.workflow.disabled.tooltip": "Contact admin to edit",
        "preferences.group.info":
          "Applies to all notifications under this group.",
        "snooze.datePicker.timePickerLabel": "Time",
        "snooze.datePicker.apply": "Apply",
        "snooze.datePicker.cancel": "Cancel",
        "snooze.options.anHourFromNow": "An hour from now",
        "snooze.datePicker.pastDateTooltip":
          "Selected time must be at least 3 minutes in the future",
        "snooze.datePicker.noDateSelectedTooltip": "Please select a date",
        "snooze.datePicker.exceedingLimitTooltip": ({
          days,
        }: {
          days: number;
        }) =>
          `Selected time cannot exceed ${days === 1 ? "24 hours" : `${days} days`} from now`,
        "snooze.options.customTime": "Custom time...",
        "snooze.options.inOneDay": "Tomorrow",
        "snooze.options.inOneWeek": "Next week",
      });
    }
  }, []);
  const tabs = [
    {
      label: "All",
      filter: { tags: [] },
    },
    {
      label: "Notifications",
      filter: { tags: ["notifications"] },
    },
    {
      label: "Promotions & Events",
      filter: { tags: ["promotions", "events"] },
    },
    {
      label: "Security",
      filter: { tags: ["security", "alert"] },
    },
    {
      label: "Billing",
      filter: { tags: ["billing", "subscriptions"] },
    },
  ];
  return (
    <Inbox
      applicationIdentifier="LOR__41zOSKd"
      subscriber={context.keycloak.realm + ":" + states?.me?.id}
      // routerPush={(path: string) => navigate(path)}
      backendUrl={configs.backendUrl}
      socketUrl={configs.socketUrl}
      tabs={tabs}
      localization={inboxLocales}
    />
  );
}
