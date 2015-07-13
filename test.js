'use strict'

var test = require('tape')
var ternary = require('./')

test(function (t) {
  t.equal(ternary('foo', 'bar', 'baz'), 'foo ? bar : baz')
  t.end()
})
