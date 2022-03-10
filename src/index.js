import { callingCountries } from 'country-data'
import momentTz from 'moment-timezone'
import zones from 'moment-timezone/data/meta/latest.json'
import UAParser from 'ua-parser-js'

let timezone, countryCode, country, results // eslint-disable-line prefer-const

const getTimezone = () => timezone || momentTz.tz.zone(momentTz.tz.guess())

const getCountryCode = () =>
  countryCode || (zones[timezone.name] && zones[timezone.name].countries[0])

const getCountry = () =>
  country || callingCountries.all.find(item => item.alpha2 === getCountryCode())

const getResult = () => results || new UAParser(navigator.userAgent).getResult()

const visitorInfo = () => {
  timezone = getTimezone()
  countryCode = getCountryCode()
  country = getCountry()
  results = getResult()

  return {
    timezone: getTimezone(),
    country: getCountry(),
    ...results
  }
}

export default visitorInfo
