'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var countryData = require('country-data');
var momentTz = _interopDefault(require('moment-timezone'));
var latest_json = require('moment-timezone/data/meta/latest.json');
var UAParser = _interopDefault(require('ua-parser-js'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var timezone, countryCode, country, results; // eslint-disable-line prefer-const

var getTimezone = function getTimezone() {
  return timezone || momentTz.tz.zone(momentTz.tz.guess());
};

var getCountryCode = function getCountryCode() {
  return countryCode || latest_json.zones[timezone.name] && latest_json.zones[timezone.name].countries[0];
};

var getCountry = function getCountry() {
  return country || countryData.callingCountries.all.find(function (item) {
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
  return _objectSpread({
    timezone: getTimezone(),
    country: getCountry()
  }, results);
};

module.exports = visitorInfo;
