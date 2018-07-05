import { callingCountries } from 'country-data';
import momentTz from 'moment-timezone';
import { zones } from 'moment-timezone/data/meta/latest.json';
import UAParser from 'ua-parser-js';

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var timezone = void 0,
    countryCode = void 0,
    country = void 0,
    results = void 0; // eslint-disable-line prefer-const

var getTimezone = function getTimezone() {
  return timezone || momentTz.tz.zone(momentTz.tz.guess());
};

var getCountryCode = function getCountryCode() {
  return countryCode || zones[timezone.name] && zones[timezone.name].countries[0];
};

var getCountry = function getCountry() {
  return country || callingCountries.all.find(function (item) {
    return item.alpha2 === getCountryCode();
  });
};

var getResult = function getResult() {
  return results || new UAParser(navigator.userAgent).getResult();
};

timezone = getTimezone();
countryCode = getCountryCode();
country = getCountry();
results = getResult();

var visitorInfo = function visitorInfo() {
  return _extends({
    timezone: getTimezone(),
    country: getCountry()
  }, results);
};

export default visitorInfo;
