'use strict'

const got = require('got')
const queryString = require('query-string');
const GE = require('@adonisjs/generic-exceptions')

class Cost {
  constructor (Config) {
    this.Config = Config
  }

  _getUrlDefault() {
    return 'https://api.rajaongkir.com/starter/cost'
  }
  _getOptionsDefault() {
    return {
      headers: {
        key: this.Config.API_KEY,
      }
    }
  }

  _responseJson(res, collection = true) {
    // return collection ? (Array.isArray(res) ? res : [res]) : res
  }
  _parseResultToJson (body) {
    return JSON.parse(body).rajaongkir.results;
  }
  _parseParamsToQuerys (req) {
    return queryString.stringify(req, {arrayFormat: 'bracket'});
  }

  async calculate (params) {
    try {

      const { body } = await got.post(
        'https://api.rajaongkir.com/starter/cost',
        Object.assign(
          this._getOptionsDefault(),         {
          json: true,
          body: params
        })
      );

      return body.rajaongkir.results[0]
    } catch (e) {

      if (e.body) {
        throw GE.InvalidArgumentException.invalidParameter(
          e.body.rajaongkir.status.description
        )

      } else {
        throw new GE.HttpException('Invalid Your API_KEY in config/rajaongkir.js')
      }
    }

  }
}

module.exports = Cost