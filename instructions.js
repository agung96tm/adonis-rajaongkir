'use strict'

const { join } = require('path')

module.exports = async function (cli) {
  await cli.copy(join(__dirname, 'config/rajaongkir.js'), join(cli.helpers.configPath(), 'rajaongkir.js'))
}