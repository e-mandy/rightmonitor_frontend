type LocaleRegionType = "en-US" | "fr-FR";
type CurrencyType = "USD" | "EUR";

export const getFormatMoney = (
  amount: number,
  locale: LocaleRegionType = "en-US",
  currency: CurrencyType = "USD",
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
};
