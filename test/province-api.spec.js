const test = require('japa')

const Province = require('../src/RajaOngkir/Lib/Province')
const Config = require('../config/rajaongkir')

test.group('Province', (group) => {  
  const model = new Province(Config)

  test('fetch All Without Parameters', async (assert) => {
    const province = await model.all()
    assert.exists(province)
  })

  test('fetch All Province With Parameters', async (assert) => {
    const params = {
      province: 21,
      id: '1',
    }

    const province = await model.all(params);
    assert.equal(province[0].province_id, params.id);
  })

  test('fetch One Province with id', async (assert) => {
    const id = Math.floor(Math.random() * 10) + 1;

    const province = await model.find(id)
    assert.equal(province.province_id, id)
  })
})
