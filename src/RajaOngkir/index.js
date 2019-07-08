'use strict'

const City = require('./Lib/City')
const Cost = require('./Lib/Cost')
const Province = require('./Lib/Province')

class RajaOngkir {
  constructor (Config) {
    this.Config = Config.merge('rajaongkir', {
      API_KEY: '',
    })
  }

  City () {
    return new City(this.Config)
  }

  Province () {
    return new Province(this.Config)
  }

  Cost ($atrs) {
    return new Cost(this.Config, $atrs)
  }
}

module.exports = RajaOngkir