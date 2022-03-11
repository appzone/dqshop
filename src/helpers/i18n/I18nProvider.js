import React from "react";
import {useLang} from "./i18n";
import {IntlProvider} from "react-intl";

import enMessages from "./messages/en";
import idMessages from "./messages/id";

const allMessages = {
  en: enMessages,
  id: idMessages
};

export function I18nProvider({ children }) {
  const locale = useLang();
  const messages = allMessages[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
