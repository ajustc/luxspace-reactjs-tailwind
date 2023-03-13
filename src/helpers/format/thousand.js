/* eslint-disable no-extend-native */
// eslint no-extend-native: ["error", {"exceptions": ["Number"]}]
if (!Number.hasOwnProperty("thousand")) {
  Number.prototype.thousand = function (decimals = 0) {
    const thousand = Intl.NumberFormat(navigator.language);
    return thousand.format(this);
  };
}
