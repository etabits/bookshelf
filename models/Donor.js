'use strict';
var mongoose  = require('mongoose')

var schema = mongoose.Schema({
  name: String,
  phone: String,
  // birthdate: Date,
})
schema.virtual('$pTitle').get(function () {
  return `${this.name}`;
})

var Model = mongoose.model('Donor', schema)
