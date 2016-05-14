'use strict';

$(function() {
  $('select').each(function() {
    var value = $(this).val()
    var options = $('option', this)
    options.sort(function(a, b) {
      return a.textContent.localeCompare(b.textContent);
    })
    $(this).html(options)
    $(this).val(value)
  })
})
