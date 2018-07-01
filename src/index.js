import { callingCountries } from 'country-data'
import momentTz from 'moment-timezone'
import { zones } from 'moment-timezone/data/meta/latest.json'
import UAParser from 'ua-parser-js'

const getTimezone = () => timezone || momentTz.tz.zone(momentTz.tz.guess())

const getCountryCode = () =>
  countryCode || (zones[timezone.name] && zones[timezone.name].countries[0])

const getCountry = () =>
  country || callingCountries.all.find(item => item.alpha2 === getCountryCode())

const getBrowser = () =>
  browser || new UAParser(navigator.userAgent).getBrowser()

const timezone = getTimezone()
const countryCode = getCountryCode()
const country = getCountry()
const browser = getBrowser()

const visitorInfo = () => {
  return {
    timezone: getTimezone(),
    country: getCountry(),
    browser: getBrowser()
  }
}

export { visitorInfo }
