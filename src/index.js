import { callingCountries } from 'country-data'
import momentTz from 'moment-timezone'
import { zones } from 'moment-timezone/data/meta/latest.json'
import UAParser from 'ua-parser-js'

const getTimezone = () => timezone || momentTz.tz.zone(momentTz.tz.guess())

const getCountryCode = () =>
  countryCode || (zones[timezone.name] && zones[timezone.name].countries[0])

const getCountry = () =>
  country || callingCountries.all.find(item => item.alpha2 === getCountryCode())

const getResults = () =>
  results || new UAParser(navigator.userAgent).getResults()

const timezone = getTimezone()
const countryCode = getCountryCode()
const country = getCountry()
const results = getResults()

const visitorInfo = () => {
  return {
    timezone: getTimezone(),
    country: getCountry(),
    ...results
  }
}

export { visitorInfo }
