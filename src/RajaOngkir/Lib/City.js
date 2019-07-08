'use strict'

const got = require('got')
const queryString = require('query-string');
const GE = require('@adonisjs/generic-exceptions')

class City {
  constructor (Config) {
    this.Config = Config
  }

  _getUrlDefault() {
    // future, can change starter
    return 'https://api.rajaongkir.com/starter/city?'
  }

  _getOptionsDefault() {
    return {
      headers: {
        key: this.Config.API_KEY,
      }
    }
  }

  _responseJson(res, collection = true) {
    return collection ? (Array.isArray(res) ? res : [res]) : res
  }
  _parseResultToJson (body) {
    return JSON.parse(body).rajaongkir.results;
  }
  _parseParamsToQuerys (req) {
    return queryString.stringify(req, {arrayFormat: 'bracket'});
  }

  async all (params) {
    try {

      const { body } = await got(
        this._getUrlDefault() + (this._parseParamsToQuerys(params) || ''), 
        Object.assign({}, this._getOptionsDefault())
      );

      return this._responseJson(this._parseResultToJson(body))

    } catch (e) {
      throw new GE.HttpException(
        'Invalid Your API_KEY in config/rajaongkir.js'
      )
    }
  }

  async find (id) {
    try {

      const { body } = await got(
        this._getUrlDefault() + this._parseParamsToQuerys({id}),
        Object.assign({}, this._getOptionsDefault())
      );

      return this._responseJson(this._parseResultToJson(body), false)

    } catch (e) {
      throw new GE.HttpException(
        'Invalid Your API_KEY in config/rajaongkir.js'
      )
    }
  }
}

module.exports = City