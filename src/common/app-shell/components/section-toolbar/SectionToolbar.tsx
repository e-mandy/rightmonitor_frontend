import { type FC } from "react";
import clsx from "clsx";
import { type WithChildren } from "../../../helpers";
import { useLayout } from "../../core";
import { SectionActions } from "./section-actions/SectionActions";
import { SectionTitle } from "./section-title/SectionTitle";

type Props = {
  title: string;
  description?: string;
};

const SectionToolbar: FC<Props & WithChildren> = ({
  children,
  title,
  description,
}) => {
  const { config, classes } = useLayout();

  return (
    <div
      id="kt_app_toolbar"
      className={clsx(
        "app-toolbar",
        classes.toolbar.join(" "),
        config?.app?.toolbar?.class,
      )}
    >
      <div
        id="kt_app_toolbar_container"
        className={clsx(
          classes.toolbarContainer.join(" "),
          config.app?.toolbar?.containerClass,
          config.app?.toolbar?.minimize?.enabled ? "app-toolbar-minimize" : "",
          "container-fluid ps-0 pe-0",
        )}
      >
        <SectionTitle {...{ title, description }} />
        <SectionActions>{children}</SectionActions>
      </div>
    </div>
  );
};

export { SectionToolbar };
