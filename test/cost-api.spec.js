const test = require('japa')

const Cost = require('../src/RajaOngkir/Lib/Cost')
const Config = require('../config/rajaongkir')

test.group('Cost', (group) => {  
  const model = new Cost(Config)

  test('fetch All Without Parameters', async (assert) => {
    const values = {
      origin: '1',
      destination: '1',
      weight: 1,
      courier: 'jne',
    }

    const result = await model.calculate(values)

    assert.equal(values.courier, result.code)
  })
})