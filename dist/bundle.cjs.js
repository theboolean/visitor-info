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

let timezone, countryCode, country, results; // eslint-disable-line prefer-const

const getTimezone = () => timezone || momentTz.tz.zone(momentTz.tz.guess());

const getCountryCode = () => countryCode || latest_json.zones[timezone.name] && latest_json.zones[timezone.name].countries[0];

const getCountry = () => country || countryData.callingCountries.all.find(item => item.alpha2 === getCountryCode());

const getResult = () => results || new UAParser(navigator.userAgent).getResult();

timezone = getTimezone();
countryCode = getCountryCode();
country = getCountry();
results = getResult();

const visitorInfo = () => {
  return _extends({
    timezone: getTimezone(),
    country: getCountry()
  }, results);
};

module.exports = visitorInfo;
