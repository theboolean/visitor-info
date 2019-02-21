# visitor-info

[![Build Status](https://travis-ci.org/theboolean/visitor-info.svg?branch=master)](https://travis-ci.org/theboolean/visitor-info)

Tiny library that wraps other modules useful to gather information about a visitor in Javascript, such as `browser`, `timezone`, `country`, `OS`, etc...

It is useful in case you want to find fast information about the user without making requests to a third party API service, but relying on the capabilities of the browser.

## How to use

Add `visitor-info` as a dependency:

```sh
npm install visitor-info
```

Import it in your project as an ES6 module:

```js
import visitorInfo from 'visitor-info'

console.log(visitorInfo())

/*
Result:
{
  browser: {...}
  country: {...}
  cpu: {...}
  device: {...}
  engine: {...}
  os: {...}
  ua: "..."
}
*/

```

or with require:

```js
var visitorInfo = require('visitor-info')

console.log(visitorInfo())

/*
Result:
{
  browser: {...}
  country: {...}
  cpu: {...}
  device: {...}
  engine: {...}
  os: {...}
  ua: "..."
}
*/

```
