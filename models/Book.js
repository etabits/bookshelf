'use strict';
var mongoose  = require('mongoose')

var schema = mongoose.Schema({
  name: String,
  altName: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'Person', $p: {widget: 'select'}},
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', $p: {widget: 'select'}},
  publisher: {type: mongoose.Schema.Types.ObjectId, ref: 'Publisher', $p: {widget: 'select'}},
  publicationYear: Number,
  translator: {type: mongoose.Schema.Types.ObjectId, ref: 'Person', $p: {widget: 'select'}},
  pages: Number,
  keywords: String,
  donor: {type: mongoose.Schema.Types.ObjectId, ref: 'Donor', $p: {widget: 'select'}},
})

var Model = mongoose.model('Book', schema)
