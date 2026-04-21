import type { FC } from "react";
import { useLang } from "./Metronici18n";
import { IntlProvider } from "react-intl";
import "@formatjs/intl-relativetimeformat/polyfill.js";
import "@formatjs/intl-relativetimeformat/locale-data/en";
import "@formatjs/intl-relativetimeformat/locale-data/fr";

import enMessages from "./messages/en.json";
import frMessages from "./messages/fr.json";
import { type WithChildren } from "../helpers";

const allMessages = {
  en: enMessages,
  fr: frMessages,
};

const I18nProvider: FC<WithChildren> = ({ children }) => {
  const locale = useLang();
  const messages = allMessages[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      {children}
    </IntlProvider>
  );
};

export { I18nProvider };
