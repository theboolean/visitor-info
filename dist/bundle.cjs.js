'use strict';

var countryData = require('country-data');
var momentTz = require('moment-timezone');
var zones = require('moment-timezone/data/meta/latest.json');
var UAParser = require('ua-parser-js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var momentTz__default = /*#__PURE__*/_interopDefaultLegacy(momentTz);
var zones__default = /*#__PURE__*/_interopDefaultLegacy(zones);
var UAParser__default = /*#__PURE__*/_interopDefaultLegacy(UAParser);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

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

var timezone, countryCode, country, results; // eslint-disable-line prefer-const

var getTimezone = function getTimezone() {
  return timezone || momentTz__default["default"].tz.zone(momentTz__default["default"].tz.guess());
};

var getCountryCode = function getCountryCode() {
  return countryCode || zones__default["default"][timezone.name] && zones__default["default"][timezone.name].countries[0];
};

var getCountry = function getCountry() {
  return country || countryData.callingCountries.all.find(function (item) {
    return item.alpha2 === getCountryCode();
  });
};

var getResult = function getResult() {
  return results || new UAParser__default["default"](navigator.userAgent).getResult();
};

var visitorInfo = function visitorInfo() {
  timezone = getTimezone();
  countryCode = getCountryCode();
  country = getCountry();
  results = getResult();
  return _objectSpread2({
    timezone: getTimezone(),
    country: getCountry()
  }, results);
};

module.exports = visitorInfo;
