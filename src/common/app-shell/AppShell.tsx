import { Suspense, type FC } from "react";
import { I18nProvider } from "../i18n/i18nProvider";
import { LayoutProvider, LayoutSplashScreen } from "./core";
import { MasterInit } from "./MasterInit";
import { type WithChildren } from "../helpers";

const AppShell: FC<WithChildren> = ({ children }) => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          {children}
          <MasterInit />
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  );
};

export { AppShell };
