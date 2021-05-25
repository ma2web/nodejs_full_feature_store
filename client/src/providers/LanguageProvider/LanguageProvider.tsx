import { useRouter } from "next/router";
import { FC } from "react";
import { IntlProvider, ReactIntlErrorCode } from "react-intl";
import fa from "../../../public/static/locales/fa-IR.json";
import ar from "../../../public/static/locales/ar-AR.json";
import en from "../../../public/static/locales/en-US.json";

const LanguageProvider: FC = ({ children }) => {
  const { locale, defaultLocale } = useRouter();

  const languages = {
    "fa-IR": fa,
    "ar-AR": ar,
    "en-US": en,
  };

  const currentLocale = locale ?? defaultLocale ?? ("fa-IR" as any);

  return (
    <IntlProvider
      locale={currentLocale}
      messages={languages[currentLocale] as any}
      onError={(err) => {
        if (err.code === ReactIntlErrorCode.MISSING_TRANSLATION) {
          return console.warn(err.message, "🎃 MISSING_TRANSLATION");
        }
      }}
    >
      {children}
    </IntlProvider>
  );
};

export default LanguageProvider;
