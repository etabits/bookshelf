'use strict';

var express = require('express')
var mongoose = require('mongoose')
require('coffee-script/register')

mongoose.connect('mongodb://localhost/bookshelf')

var app = express()

var cookieParser = require('cookie-parser')
var session      = require('express-session')
var flash = require('connect-flash')
app.use(cookieParser(Math.random()+''))
app.use(session({ cookie: { maxAge: 60000 }}))
app.use(flash())

var penguin = require('penguin')
var admin = new penguin.Admin({
  indexTitle: 'بسطة كتب',
  menuExtraHTML: `
    <ul class="nav navbar-nav navbar-right">
      <li>
        <a href="http://www.etabits.com/">etabits.com</a>
      </li>
    </ul>
  `,
  menu: [
    ['Home', '/admin'],
    ['Related Data - بيانات أوّلية', [
      ['Categories - تصنيفات', '/admin/categories'],
      ['People (Authors/Translators...) - أشخاص', '/admin/people'],
      ['Publishers - دور النشر', '/admin/publishers'],
      ['Donors - المتبرعين', '/admin/donors'],
    ]],
    ['Books - الكتب', '/admin/books'],
  ]
})
admin.setupApp(app)

var port = process.env.PORT || 3000
app.listen(port, function (argument) {
  console.log('http://localhost:'+port+'/admin/');
})
