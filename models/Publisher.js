'use strict';
var mongoose  = require('mongoose')

var schema = mongoose.Schema({
  name: String,
  address: String,
})
schema.virtual('$pTitle').get(function () {
  return `${this.name}`;
})

var Model = mongoose.model('Publisher', schema)
