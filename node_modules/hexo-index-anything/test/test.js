'use strict'
const test          = require('unit.js')
const Index         = require('../index.js')

describe('Index class', function() {
  let index = new Index('authors', '/some/path')
  it('creates instance', function() {
    test.assert(index instanceof Index)
  })
  it('has appropriate properties', function() {
    test.object(index)
    .hasProperty('getPages')
    .hasProperty('getList')
    .hasProperty('getPath')
  })
})
