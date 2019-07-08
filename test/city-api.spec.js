const test = require('japa')

const City = require('../src/RajaOngkir/Lib/City')
const Config = require('../config/rajaongkir')

test.group('City', (group) => {  
  const model = new City(Config)

  test('fetch All Without Parameters', async (assert) => {
    const cities = await model.all()
    assert.exists(cities)
  })

  test('fetch All City With Parameters', async (assert) => {
    const params = {
      province: 21,
      id: '429',
    }

    const cities = await model.all(params);
    assert.equal(cities[0].city_id, params.id);
  })

  test('fetch One City with id', async (assert) => {
    const id = Math.floor(Math.random() * 10) + 1;

    const city = await model.find(id)
    assert.equal(city.city_id, id)
  })
})
