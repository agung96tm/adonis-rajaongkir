'use strict'

const Env = use('Env')

module.exports = {
  API_KEY: Env.get('RAJAONGKIR_TOKEN', 'OVER_HERE'),
}