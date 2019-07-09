# Adonis Rajaongkir

This package is a **Check Shipping Costs** for JNE, TIKI, and POS

## Getting Started

Install the package using the `adonis` CLI.

```bash
> adonis install adonis-rajaongkir
```

Instruction: ([Click Here](https://github.com/agung96tm/adonis-bitly/blob/master/instructions.md)).


## Configure

Configure token inside the `config/rajaongkir.js`
```js
const Env = use('Env')

module.exports = {
  // change OVER_HERE with token from RAJAONGKIR website
  API_KEY: Env.get('RAJAONGKIR_TOKEN', 'OVER_HERE'),
}
```

or inside the `.env`
```
RAJAONGKIR_TOKEN=7ab070f4e5xxxx0bac67xxxx24249b3b0606xxxx
```


## Usage

comming soon


## How Can I Get Token
1. Register to https://rajaongkir.com
2. Go to your panel (Dashboard)
3. Copy API Key and Paste
4. Done