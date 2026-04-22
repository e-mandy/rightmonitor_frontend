import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { useLayout } from "../../core";
import { DrawerComponent } from "../../../helpers/ts/components";
import { type WithChildren } from "../../../helpers";

const Content = ({ children }: WithChildren) => {
  const { config, classes } = useLayout();
  const location = useLocation();
  useEffect(() => {
    DrawerComponent.hideAll();
  }, [location]);

  const appContentContainer = config.app?.content?.container;
  return (
    <div
      id="kt_app_content"
      className={clsx(
        "app-content pt-0 container-fluid overflow-y-auto",
        classes.content.join(" "),
        config?.app?.content?.class,
      )}
    >
      {appContentContainer ? (
        <div
          id="rt_app_content_container"
          className={clsx(
            "_app-container _container",
            classes.contentContainer.join(" "),
          )}
        >
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};

export { Content };
