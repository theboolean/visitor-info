'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var countryData = require('country-data');
var momentTz = _interopDefault(require('moment-timezone'));
var latest_json = require('moment-timezone/data/meta/latest.json');
var UAParser = _interopDefault(require('ua-parser-js'));

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
  return _extends({
    timezone: getTimezone(),
    country: getCountry()
  }, results);
};

module.exports = visitorInfo;
