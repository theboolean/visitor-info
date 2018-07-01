import { callingCountries } from 'country-data'
import momentTz from 'moment-timezone'
import { zones } from 'moment-timezone/data/meta/latest.json'
import UAParser from 'ua-parser-js'

const getTimezone = () => {
  return momentTz.tz.guess()
}

const getCountryCode = () => {
  const timezoneName = getTimezone()
  return zones[timezoneName] && zones[timezoneName].countries[0]
}

const getCountry = () => {
  return callingCountries.all.find(item => item.alpha2 === getCountryCode())
}

const getBrowser = () => {
  const uaParser = new UAParser()
  uaParser.setUA(navigator.userAgent)
  return uaParser.getBrowser()
}

const visitorInfo = () => {
  return {
    timezone: getTimezone(),
    country: getCountry(),
    browser: getBrowser()
  }
}

export { visitorInfo }
