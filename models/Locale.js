import t from "typy";
import translations from "../locales";

export const Locale = {
  state: {
    locale: "tr",
    defaultLocale: "tr",
    translations,
    useTranslation: function (key, prefix) {
      return (
        t(translations?.[this.locale], key).safeObject ||
        t(translations?.[this.defaultLocale], key).safeObject
      );
    },
  },
  reducers: {
    setLocale(state, payload) {
      return { ...state, locale: payload };
    },
  },
};
