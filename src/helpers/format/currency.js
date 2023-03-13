/* eslint-disable no-extend-native */
// eslint no-extend-native: ["error", {"exceptions": ["Number"]}]
if (!Number.hasOwnProperty("currency")) {
  Number.prototype.currency = function (decimals = 0) {
    const currency = Intl.NumberFormat(navigator.language, {
      style: "currency",
      currency: "IDR"
    });
    return currency.format(this);
  };
}
