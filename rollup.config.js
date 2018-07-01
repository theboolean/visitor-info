import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

/* eslint import/no-default-export: 0 */

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'es'
    }
  ],
  external: [
    'country-data',
    'moment-timezone',
    'moment-timezone/data/meta/latest.json',
    'ua-parser-js'
  ],
  plugins: [
    commonjs({
      include: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers',
        'transform-object-rest-spread'
      ]
    })
  ]
}
