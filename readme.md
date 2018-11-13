# ternary [![Build Status](https://travis-ci.org/bendrucker/ternary.svg?branch=master)](https://travis-ci.org/bendrucker/ternary) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/ternary.svg)](https://greenkeeper.io/)

> Build a ternary statement


## Install

```
$ npm install --save ternary
```


## Usage

```js
var ternary = require('ternary')

ternary('condition', 'whenTruthy', 'whenFalsy')
//=> condition ? whenTruthy : whenFalsy
```

## API

#### `ternary(condition, expr1, expr2)` -> `string`

##### condition

*Required*  
Type: `string`

The ternary condition.

##### expr1

*Required*  
Type: `string`

The expression to use when the condition is truthy.

##### expr2

*Required*  
Type: `string`

The expression to use when the condition is falsy.


## License

MIT © [Ben Drucker](http://bendrucker.me)
