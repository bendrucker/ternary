'use strict'

var test = require('tape')
var ternary = require('./')

test(function (t) {
  t.equal(ternary('foo', 'bar', 'baz'), 'foo ? bar : baz')
  t.end()
})

test2(function (t) {
  t.equal(ternary('foo', 'bar', 'baz'), 'foo ? bar : baz', 'no bar', 'bar not found', 'i hate bars', 'nobar ? barnotfound : ihatebars')
  t.end()
})
