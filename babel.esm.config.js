var babelConfig = require('./babel.config')

babelConfig.presets[0] = ["@babel/preset-env", {
  "targets": { "esmodules": true }
}]

module.exports = babelConfig
