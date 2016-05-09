'use strict';
var mongoose  = require('mongoose')

var schema = mongoose.Schema({
  firstName: String,
  lastName: String,
  altName: String,
  birthdate: Date,
})
schema.virtual('$pTitle').get(function () {
  return `${this.firstName} ${this.lastName}`;
})

var Model = mongoose.model('Person', schema)
