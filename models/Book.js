'use strict';
var mongoose  = require('mongoose')

var schema = mongoose.Schema({
  name: String,
  altName: String,
  language: {type: String, $p: {
    widget: 'select',
    formFieldOpts: {
      choices: {
        ar: 'Arabic',
        en: 'English',
        'ar,en': 'Arabic/English',
        fr: 'French',
      },
  }}},
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'Person', $p: {widget: 'select'}},
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', $p: {widget: 'select'}},
  publisher: {type: mongoose.Schema.Types.ObjectId, ref: 'Publisher', $p: {widget: 'select'}},
  series: {type: mongoose.Schema.Types.ObjectId, ref: 'Series', $p: {widget: 'select'}},
  number: Number,
  publicationYear: Number,
  translator: {type: mongoose.Schema.Types.ObjectId, ref: 'Person', $p: {widget: 'select', display: 'e'}},
  pages: Number,
  keywords: {type: String, $p: {display: 'e'}},
  donor: {type: mongoose.Schema.Types.ObjectId, ref: 'Donor', $p: {widget: 'select', display: 'e'}},
  returnToDonor: {type: Boolean, $p: {display: 'e'}},
  needsRevision: Boolean,
  notes: {type: String, $p: {widget: 'textarea', display: 'e'}},
  extraData: {type: String, $p: {widget: 'textarea', display: 'e'}},
})

var Model = mongoose.model('Book', schema)
