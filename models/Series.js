'use strict';
var mongoose  = require('mongoose')

var schema = mongoose.Schema({
  name: String,
  publisher: {type: mongoose.Schema.Types.ObjectId, ref: 'Publisher', $p: {widget: 'select'}},
})
schema.virtual('$pTitle').get(function () {
  return `${this.name}`;
})

var Model = mongoose.model('Series', schema)
