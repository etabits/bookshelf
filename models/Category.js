'use strict';
var mongoose  = require('mongoose')

var schema = mongoose.Schema({
  code: String,
  label: String,
})
schema.virtual('$pTitle').get(function () {
  return `${this.code} - ${this.label}`;
})

var Model = mongoose.model('Category', schema)
