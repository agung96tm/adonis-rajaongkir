'use strict'

const { ServiceProvider } = require('@adonisjs/fold')

class RajaOngkirProvider extends ServiceProvider {
  register () {
    this.app.register('Adonis/Addons/RajaOngkir', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new (require('../src/RajaOngkir'))(Config)
    })

    this.app.alias('Adonis/Addons/RajaOngkir', 'agung96tm/RajaOngkir')
  }
}

module.exports = RajaOngkirProvider